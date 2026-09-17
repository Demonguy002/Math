let user="", score=0, xp=0, streak=0, index=0, set=[], difficulty="", solved=false;
let profile = JSON.parse(localStorage.getItem("rootquestProfile") || "null");
if(profile){user=profile.user||"";score=profile.score||0;xp=profile.xp||0;streak=profile.streak||0}

const mathSymbols=["∑","∫","√x","π","Δx","f(x)","lim","∞","x²","dy/dx","∂","λ","α","β","θ","sin(x)","cos(x)","eˣ","xⁿ","∇","≈","≠","±"];
function initMath(){const box=document.getElementById("math-field");box.innerHTML="";for(let i=0;i<34;i++){let s=document.createElement("span");s.className="math";s.textContent=mathSymbols[Math.floor(Math.random()*mathSymbols.length)];s.style.left=Math.random()*100+"%";s.style.setProperty("--dx",(Math.random()*220-110)+"px");s.style.animationDuration=(10+Math.random()*18)+"s";s.style.animationDelay=(-Math.random()*20)+"s";box.appendChild(s)}}
initMath();

function save(){localStorage.setItem("rootquestProfile",JSON.stringify({user,score,xp,streak}))}
function showLogin(){
 document.getElementById("dashboard").innerHTML="";document.getElementById("app").innerHTML="";document.getElementById("graph").style.display="none";
 document.getElementById("login").innerHTML=`<div class="hero"><h1>ROOTQUEST AI</h1><p>Interactive Numerical Methods Laboratory</p></div>
 <div class="card login-card"><div class="pill">NEURAL MATH ENGINE • ONLINE</div><h2>Enter the Lab</h2><p>Explore roots, visualize convergence and master numerical methods.</p>
 <input id="name" placeholder="Enter your name" value="${user||""}" maxlength="30">
 <input id="email" placeholder="Email (optional)" type="email">
 <button onclick="login()">Initialize Experience →</button></div>`;
}
function login(){const n=document.getElementById("name").value.trim();if(!n){toast("Please enter your name");return}user=n;save();showDashboard();toast("Welcome to the RootQuest Lab, "+user+"!")}
function logout(){user="";score=0;xp=0;streak=0;localStorage.removeItem("rootquestProfile");showLogin()}
function showDashboard(){
 if(!user){showLogin();return}
 document.getElementById("login").innerHTML="";document.getElementById("app").innerHTML="";document.getElementById("graph").style.display="none";
 const total=easy.length+normal.length+hard.length;
 document.getElementById("userBadge").textContent=user.toUpperCase();
 document.getElementById("dashboard").innerHTML=`<div class="hero"><div class="pill">MISSION CONTROL</div><h1>WELCOME, ${escapeHtml(user).toUpperCase()}</h1><p>Your mathematical journey continues.</p></div>
 <div class="stats"><div class="stat"><small>SCORE</small><b>${score}</b></div><div class="stat"><small>XP</small><b>${xp}</b></div><div class="stat"><small>STREAK</small><b>🔥 ${streak}</b></div><div class="stat"><small>MISSIONS</small><b>${total}</b></div></div>
 <div class="card"><h2>⚡ Select Simulation Level</h2><div class="levels">
 <div class="card level" onclick="start('easy')"><span class="pill">20 MISSIONS</span><h3>🟢 EASY</h3><p>Quadratic systems • Fundamentals • Guided convergence</p><button>Launch</button></div>
 <div class="card level" onclick="start('normal')"><span class="pill">20 MISSIONS</span><h3>🟣 NORMAL</h3><p>Cubic systems • Engineering scenarios • Deeper analysis</p><button>Launch</button></div>
 <div class="card level" onclick="start('hard')"><span class="pill">10 MISSIONS</span><h3>🔴 HARD</h3><p>Transcendental systems • AI • Signals • Advanced roots</p><button>Launch</button></div>
 </div></div>
 <div class="card"><h3>🧠 Lab Features</h3><span class="pill">Newton-Raphson</span><span class="pill">Bisection</span><span class="pill">Regula Falsi</span><span class="pill">Live Graphing</span><span class="pill">XP System</span><span class="pill">Animated Math Field</span><span class="pill">Progress Tracking</span></div>`;
}
function start(level){difficulty=level;set=scenarios[level];index=0;solved=false;nextQ()}
function nextQ(){
 if(index>=set.length){showDashboard();toast("Level complete! 🎉");return}
 solved=false;document.getElementById("dashboard").innerHTML="";document.getElementById("graph").style.display="none";
 let q=set[index], pct=(index/set.length)*100;
 document.getElementById("app").innerHTML=`<div class="card"><div class="question-head"><div><span class="pill">${difficulty.toUpperCase()}</span><span class="pill">MISSION ${index+1}/${set.length}</span><h2>${escapeHtml(q.title)}</h2></div><div style="min-width:180px"><small>PROGRESS</small><div class="progress"><i style="width:${pct}%"></i></div></div></div>
 <div class="grid2"><div><h3>🌍 Scenario</h3><p>${escapeHtml(q.desc)}</p><h3>🔢 Equation</h3><div class="equation">f(x) = ${escapeHtml(q.equation)}</div></div>
 <div class="card"><h3>🧪 Numerical Engine</h3><p>Select an algorithm and watch the approximation evolve.</p><select id="method"><option value="newton">Newton-Raphson</option><option value="bisection">Bisection</option><option value="regula">Regula Falsi</option><option value="all">Compare All</option></select><br><br><button onclick="solve()">Run Simulation ▶</button></div></div>
 <div id="output"></div></div>`;
}
function derivative(f,x){const h=1e-5;return (f(x+h)-f(x-h))/(2*h)}
function newton(f){let x=1,steps=[];for(let i=1;i<=6;i++){let fx=f(x),d=derivative(f,x);if(Math.abs(d)<1e-10)break;let next=x-fx/d;steps.push({i,x,fx,d,next});x=next}return {root:x,steps}}
function bracket(f){const candidates=[];for(let a=-10;a<10;a+=.25){let b=a+.25;if(Number.isFinite(f(a))&&Number.isFinite(f(b))&&f(a)*f(b)<=0)candidates.push([a,b])}return candidates[0]||[0,3]}
function bisection(f){let [a,b]=bracket(f),steps=[];for(let i=1;i<=10;i++){let c=(a+b)/2;steps.push({i,a,b,c,fc:f(c)});if(f(a)*f(c)<=0)b=c;else a=c}return {root:(a+b)/2,steps}}
function regula(f){let [a,b]=bracket(f),x=b,steps=[];for(let i=1;i<=10;i++){let fa=f(a),fb=f(b);if(Math.abs(fb-fa)<1e-12)break;x=(a*fb-b*fa)/(fb-fa);steps.push({i,a,b,x,fx:f(x)});if(f(a)*f(x)<=0)b=x;else a=x}return {root:x,steps}}
function fmt(x){return Number.isFinite(x)?x.toFixed(6):"undefined"}
function renderSteps(name,data){let s=`<h3>⚙️ ${name}</h3>`;data.steps.forEach(v=>{if(name==="Newton-Raphson")s+=`<div class="step"><b>Iteration ${v.i}</b><br>Current x = ${fmt(v.x)}<br>f(x) = ${fmt(v.fx)}<br>Derivative ≈ ${fmt(v.d)}<br>Next x = <strong>${fmt(v.next)}</strong></div>`;else if(name==="Bisection")s+=`<div class="step"><b>Iteration ${v.i}</b><br>Interval [${fmt(v.a)}, ${fmt(v.b)}]<br>Midpoint c = <strong>${fmt(v.c)}</strong><br>f(c) = ${fmt(v.fc)}</div>`;else s+=`<div class="step"><b>Iteration ${v.i}</b><br>Secant intersection x = <strong>${fmt(v.x)}</strong><br>f(x) = ${fmt(v.fx)}</div>`});return s}
function solve(){
 if(solved)return;solved=true;let q=set[index],f=new Function("x","return "+q.equation),method=document.getElementById("method").value,root,data;
 let out=`<div class="card"><h3>📘 Mission Analysis</h3><p>${escapeHtml(q.desc)}</p>`;
 if(method==="newton"){data=newton(f);root=data.root;out+=renderSteps("Newton-Raphson",data)}
 if(method==="bisection"){data=bisection(f);root=data.root;out+=renderSteps("Bisection",data)}
 if(method==="regula"){data=regula(f);root=data.root;out+=renderSteps("Regula Falsi",data)}
 if(method==="all"){let n=newton(f),b=bisection(f),r=regula(f);root=n.root;out+=renderSteps("Newton-Raphson",n)+renderSteps("Bisection",b)+renderSteps("Regula Falsi",r)}
 out+=`<div class="step"><h3>🎯 Root Approximation</h3><div class="equation">x ≈ ${fmt(root)}</div><p>${escapeHtml(q.real||"The computed value represents an equilibrium or solution point in the model.")}</p></div>
 <p>📊 <b>Graph:</b> function curve, x-axis, root marker and animated convergence path.</p>
 <button onclick="next()">Next Mission ➡️</button><button onclick="showDashboard()">Dashboard</button><button onclick="retry()">Run Again</button></div>`;
 document.getElementById("output").innerHTML=out;drawGraph(f,root);document.getElementById("graph").style.display="block";
 score+=10;xp+=5;streak++;save();toast("+10 score • +5 XP")}
function next(){
  if(!set || set.length===0){
    showDashboard();
    return;
  }
  index++;
  if(index >= set.length){
    showDashboard();
    toast("🎉 Level complete!");
    return;
  }
  solved=false;
  nextQ();
}

function retry(){
  solved=false;
  document.getElementById("output").innerHTML="";
  document.getElementById("graph").style.display="none";
}
function drawGraph(f,root){
 const c=document.getElementById("graph"),ctx=c.getContext("2d"),w=c.width,h=c.height;ctx.clearRect(0,0,w,h);
 ctx.fillStyle="#010712";ctx.fillRect(0,0,w,h);ctx.font="12px Segoe UI";
 const xmin=-10,xmax=10,ymin=-5,ymax=5,sx=w/(xmax-xmin),sy=h/(ymax-ymin);
 ctx.strokeStyle="#ffffff12";ctx.lineWidth=1;
 for(let x=xmin;x<=xmax;x++){let px=(x-xmin)*sx;ctx.beginPath();ctx.moveTo(px,0);ctx.lineTo(px,h);ctx.stroke()}
 for(let y=ymin;y<=ymax;y++){let py=h-(y-ymin)*sy;ctx.beginPath();ctx.moveTo(0,py);ctx.lineTo(w,py);ctx.stroke()}
 const X=x=> (x-xmin)*sx,Y=y=>h-(y-ymin)*sy;
 ctx.strokeStyle="#d9ffffaa";ctx.beginPath();ctx.moveTo(0,Y(0));ctx.lineTo(w,Y(0));ctx.moveTo(X(0),0);ctx.lineTo(X(0),h);ctx.stroke();
 ctx.strokeStyle="#00f7ff";ctx.lineWidth=3;ctx.beginPath();let started=false;
 for(let x=xmin;x<=xmax;x+=.03){let y=f(x);if(!Number.isFinite(y)||Math.abs(y)>ymax*3){started=false;continue}let px=X(x),py=Y(y);if(!started){ctx.moveTo(px,py);started=true}else ctx.lineTo(px,py)}ctx.stroke();
 const ry=f(root);if(Number.isFinite(ry)){ctx.setLineDash([7,7]);ctx.strokeStyle="#ffe66d";ctx.beginPath();ctx.moveTo(X(root),0);ctx.lineTo(X(root),h);ctx.stroke();ctx.setLineDash([]);ctx.fillStyle="#ff3cac";ctx.shadowBlur=20;ctx.shadowColor="#ff3cac";ctx.beginPath();ctx.arc(X(root),Y(ry),9,0,Math.PI*2);ctx.fill();ctx.shadowBlur=0;ctx.fillStyle="#fff";ctx.fillText("ROOT",X(root)+12,Y(ry)-12)}
 ctx.fillStyle="#9db8c8";ctx.fillText("x",w-18,Y(0)-8);ctx.fillText("f(x)",X(0)+8,18);
}
function toast(msg){let old=document.querySelector(".toast");if(old)old.remove();let t=document.createElement("div");t.className="toast";t.textContent=msg;document.body.appendChild(t);setTimeout(()=>t.remove(),2600)}
function escapeHtml(s){return String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]))}
window.addEventListener("keydown",e=>{if(e.key==="Enter"&&document.getElementById("name"))login()})
if(user)showDashboard();else showLogin();


/* LIGHT / DARK MODE */
let theme = localStorage.getItem("rootquestTheme") || "dark";
function applyTheme(){
 document.body.classList.toggle("light", theme === "light");
 const btn=document.getElementById("themeToggle");
 if(btn){btn.textContent=theme === "light" ? "🌙" : "☀️";btn.title=theme === "light" ? "Switch to dark mode" : "Switch to bright mode";}
}
function toggleTheme(){theme=theme === "dark" ? "light" : "dark";localStorage.setItem("rootquestTheme",theme);applyTheme();toast(theme === "light" ? "☀️ Bright mode enabled" : "🌙 Dark mode enabled");}
applyTheme();
