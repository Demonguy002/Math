// ================= EASY (20) =================
const easy = [
{
title:"Bridge Balance System",
desc:`A small bridge is being tested under a light load condition. 
The forces acting on it are slightly unbalanced and engineers want to stabilize it. 
They model the system using a quadratic equation. 
Find the position where the bridge becomes perfectly balanced.`,
equation:"x*x - 4",
real:"This gives the point where the bridge reaches equilibrium."
},

{
title:"Spring Motion",
desc:`A stretched spring is released and starts oscillating. 
At a certain point, the restoring force becomes zero. 
This motion is modeled using a quadratic equation. 
Find the position where the spring becomes stable.`,
equation:"x*x - 9",
real:"This gives the equilibrium position of the spring."
},

{
title:"Car Braking Distance",
desc:`A car is slowing down due to braking force. 
Engineers want to determine the exact point where velocity becomes zero. 
The system is modeled mathematically using a quadratic equation. 
Find the stopping point.`,
equation:"x*x - 16",
real:"This gives the distance where the car stops."
},

{
title:"Temperature Stability",
desc:`A heated object is cooling down to room temperature. 
At some point, the temperature difference becomes zero. 
The system is modeled using a quadratic equation. 
Find when the temperature stabilizes.`,
equation:"x*x - 25",
real:"This gives the stable temperature point."
},

{
title:"Electrical Voltage Balance",
desc:`A simple electrical circuit reaches steady voltage over time. 
The difference in voltage reduces to zero at equilibrium. 
This behavior is modeled using a quadratic equation. 
Find the stable voltage level.`,
equation:"x*x - 36",
real:"This gives the steady-state voltage."
},

{
title:"Ball Motion Peak",
desc:`A ball is thrown upwards and reaches a peak height. 
At the highest point, its velocity becomes zero. 
The motion is modeled using a quadratic equation. 
Find that point.`,
equation:"x*x - 49",
real:"This gives the highest point reached."
},

{
title:"Water Tank Level",
desc:`Water is filling a tank and reaches a steady level. 
At equilibrium, inflow equals outflow. 
The system is modeled mathematically. 
Find the stable water level.`,
equation:"x*x - 64",
real:"This gives the steady water level."
},

{
title:"Basic Force Balance",
desc:`A mechanical system has forces acting in opposite directions. 
At a certain point, the net force becomes zero. 
The system is modeled using a quadratic equation. 
Find that balance point.`,
equation:"x*x - 81",
real:"This gives the point of force equilibrium."
},

{
title:"Light Intensity Balance",
desc:`Light intensity changes over distance in a system. 
At a certain point, intensity difference becomes zero. 
This behavior is modeled mathematically. 
Find that position.`,
equation:"x*x - 100",
real:"This gives equal light intensity point."
},

{
title:"Pressure Equilibrium",
desc:`Pressure inside a system adjusts to external conditions. 
At equilibrium, pressure difference becomes zero. 
The system is modeled using a quadratic equation. 
Find the stable pressure point.`,
equation:"x*x - 121",
real:"This gives the pressure equilibrium point."
},

{
title:"Simple Balance 11",
desc:`A system is trying to stabilize under small forces. 
The behavior is modeled mathematically. 
Equilibrium occurs when the function becomes zero. 
Find the value of x.`,
equation:"x*x - 144",
real:"Represents stable condition."
},

{
title:"Simple Balance 12",
desc:`A system adjusts itself until forces cancel out. 
This is represented using a quadratic model. 
Find the point where system stabilizes. 
Solve for equilibrium.`,
equation:"x*x - 169",
real:"Stable point."
},

{
title:"Simple Balance 13",
desc:`A system gradually stabilizes over time. 
The equation models the system state. 
Equilibrium occurs when value becomes zero. 
Find that value.`,
equation:"x*x - 196",
real:"Equilibrium position."
},

{
title:"Simple Balance 14",
desc:`A mechanical system reaches a balanced state. 
The system is modeled mathematically. 
Find the point where forces cancel. 
Solve the equation.`,
equation:"x*x - 225",
real:"Balance point."
},

{
title:"Simple Balance 15",
desc:`A structure stabilizes under load conditions. 
The model predicts equilibrium using an equation. 
Find where the system stabilizes. 
Solve for x.`,
equation:"x*x - 256",
real:"Stable structure point."
},

{
title:"Simple Balance 16",
desc:`A system is reaching equilibrium over time. 
The model predicts stability mathematically. 
Find where the output becomes zero. 
Solve the equation.`,
equation:"x*x - 289",
real:"Equilibrium value."
},

{
title:"Simple Balance 17",
desc:`A system adjusts itself to minimize imbalance. 
The equation represents system behavior. 
Find the equilibrium point. 
Solve for x.`,
equation:"x*x - 324",
real:"Stable point."
},

{
title:"Simple Balance 18",
desc:`A system reaches stability gradually. 
The model predicts equilibrium mathematically. 
Find the value where function becomes zero. 
Solve for x.`,
equation:"x*x - 361",
real:"Equilibrium point."
},

{
title:"Simple Balance 19",
desc:`A system stabilizes under changing conditions. 
The behavior is modeled using an equation. 
Find the value where system is stable. 
Solve for x.`,
equation:"x*x - 400",
real:"Stable system point."
},

{
title:"Simple Balance 20",
desc:`A system reaches final equilibrium state. 
The forces cancel out completely. 
This behavior is modeled mathematically. 
Find the stable value.`,
equation:"x*x - 441",
real:"Final equilibrium point."
}
];

// ================= NORMAL (20) =================
const normal = [

{
title:"Robot Arm Position",
desc:`A robotic arm must reach a precise angle to grab an object. 
Due to nonlinear motion, the position is difficult to calculate directly. 
Engineers model this system using a cubic equation. 
Find the angle where the arm becomes stable.`,
equation:"x*x*x - x - 2",
real:"Gives correct robotic arm position."
},

{
title:"Drone Altitude Control",
desc:`A drone adjusts its altitude during flight. 
Air pressure causes nonlinear changes in height. 
The system is modeled using a cubic equation. 
Find the stable altitude.`,
equation:"x*x*x - 2*x - 5",
real:"Stable drone altitude."
},

{
title:"Fluid Flow System",
desc:`Fluid flows through a pipe under pressure changes. 
The system becomes stable when flow is balanced. 
This is represented using a nonlinear equation. 
Find the equilibrium point.`,
equation:"x*x*x - 3*x + 1",
real:"Stable fluid flow condition."
},

{
title:"Economic Equilibrium",
desc:`Supply and demand curves meet at equilibrium. 
The system is modeled using a cubic equation. 
The equilibrium occurs when supply equals demand. 
Find that point.`,
equation:"x*x*x - 4*x + 2",
real:"Market equilibrium point."
},

{
title:"Mechanical Load System",
desc:`A machine operates under varying load conditions. 
The system behaves nonlinearly due to external forces. 
Engineers use a cubic model to predict stability. 
Find the stable operating point.`,
equation:"x*x*x - 5*x - 1",
real:"Stable operating condition."
},

{
title:"Thermal System Balance",
desc:`A thermal system is adjusting to temperature changes. 
The response is nonlinear due to heat transfer. 
Engineers model it using a cubic equation. 
Find the equilibrium temperature.`,
equation:"x*x*x - 6*x - 1",
real:"Stable temperature point."
},

{
title:"Hydraulic System",
desc:`Fluid pressure changes in a hydraulic system. 
The behavior is nonlinear due to resistance. 
A cubic equation models this system. 
Find the stable pressure point.`,
equation:"x*x*x - 7*x - 1",
real:"Stable pressure level."
},

{
title:"Motor Speed Control",
desc:`A motor adjusts speed dynamically under load. 
The system response is nonlinear. 
Engineers use a cubic model. 
Find the speed where the system stabilizes.`,
equation:"x*x*x - 8*x - 1",
real:"Stable motor speed."
},

{
title:"Energy Balance System",
desc:`Energy flows into and out of a system. 
The system stabilizes when input equals output. 
This is modeled using a cubic equation. 
Find the equilibrium energy level.`,
equation:"x*x*x - 9*x - 1",
real:"Energy equilibrium."
},

{
title:"Control System Stability",
desc:`A control system adjusts itself continuously. 
Its behavior is nonlinear due to feedback. 
A cubic equation models the system. 
Find the stable operating point.`,
equation:"x*x*x - 10*x - 1",
real:"Control stability point."
},

{
title:"Engineering System 11",
desc:`An engineering system behaves nonlinearly under varying conditions. 
The system is modeled using a cubic equation. 
It reaches stability when the equation becomes zero. 
Find the stable operating point.`,
equation:"x*x*x - 11*x - 1",
real:"Stable operating condition."
},

{
title:"Engineering System 12",
desc:`A system behaves unpredictably under load. 
Engineers model it using nonlinear equations. 
The system stabilizes when output becomes zero. 
Find that stable point.`,
equation:"x*x*x - 12*x - 1",
real:"Stable system state."
},

{
title:"Engineering System 13",
desc:`A system shows nonlinear behavior under stress. 
It is modeled mathematically using cubic functions. 
Find the point where system stabilizes.`,
equation:"x*x*x - 13*x - 1",
real:"Stable system condition."
},

{
title:"Engineering System 14",
desc:`A system adjusts dynamically to maintain stability. 
The behavior is nonlinear. 
Find the equilibrium point using the model.`,
equation:"x*x*x - 14*x - 1",
real:"Equilibrium condition."
},

{
title:"Engineering System 15",
desc:`A system undergoes nonlinear transformation. 
It stabilizes at a certain point. 
Find that point using the given equation.`,
equation:"x*x*x - 15*x - 1",
real:"Stable output."
},

{
title:"Engineering System 16",
desc:`A system operates under nonlinear constraints. 
It reaches equilibrium at a certain point. 
Solve the equation to find it.`,
equation:"x*x*x - 16*x - 1",
real:"Equilibrium solution."
},

{
title:"Engineering System 17",
desc:`A system responds to external inputs nonlinearly. 
It stabilizes at a certain value. 
Find that stable value.`,
equation:"x*x*x - 17*x - 1",
real:"Stable system point."
},

{
title:"Engineering System 18",
desc:`A nonlinear system adjusts itself to reach stability. 
Engineers model it mathematically. 
Find the equilibrium point.`,
equation:"x*x*x - 18*x - 1",
real:"Stable output."
},

{
title:"Engineering System 19",
desc:`A system stabilizes under nonlinear effects. 
The model predicts equilibrium mathematically. 
Find the stable value.`,
equation:"x*x*x - 19*x - 1",
real:"Equilibrium value."
},

{
title:"Engineering System 20",
desc:`A nonlinear system reaches final stability. 
The equation models its behavior. 
Find the stable point.`,
equation:"x*x*x - 20*x - 1",
real:"Final equilibrium."
}

];

// ================= HARD (10) =================
const hard = [

{
title:"AI Optimization",
desc:`An AI model is minimizing prediction error. 
The error changes nonlinearly with input value x. 
This behavior is modeled using a transcendental equation. 
Find the value where error becomes zero.`,
equation:"Math.sin(x) - x/2",
real:"Optimal AI parameter."
},

{
title:"Signal Processing",
desc:`A signal processing system tries to eliminate noise. 
The system follows a sinusoidal behavior. 
Noise becomes zero at a certain point. 
Find that point.`,
equation:"Math.sin(x) - 0.5",
real:"Noise-free signal level."
},

{
title:"Chemical Reaction",
desc:`A chemical reaction stabilizes over time. 
Concentration difference becomes zero at equilibrium. 
This is modeled using exponential equations. 
Find the stable point.`,
equation:"Math.exp(x) - 3",
real:"Reaction equilibrium."
},

{
title:"Population Growth",
desc:`Population growth stabilizes due to environmental limits. 
The system is modeled using exponential functions. 
Find the point where growth stabilizes.`,
equation:"Math.exp(x) - x - 2",
real:"Stable population level."
},

{
title:"Advanced System 5",
desc:`A complex system behaves with sinusoidal variation. 
The system reaches equilibrium at a certain point. 
This is modeled mathematically. 
Find the solution.`,
equation:"Math.sin(x) - 0.3",
real:"Stable system condition."
},

{
title:"Advanced System 6",
desc:`A nonlinear system stabilizes over time. 
The model includes sinusoidal behavior. 
Find the equilibrium point.`,
equation:"Math.sin(x) - 0.4",
real:"Equilibrium point."
},

{
title:"Advanced System 7",
desc:`A system behaves dynamically under oscillation. 
The system stabilizes when output becomes zero. 
Find that value.`,
equation:"Math.sin(x) - 0.5",
real:"Stable value."
},

{
title:"Advanced System 8",
desc:`A system shows oscillatory behavior. 
It stabilizes at a certain value. 
Solve to find that point.`,
equation:"Math.sin(x) - 0.6",
real:"Equilibrium solution."
},

{
title:"Advanced System 9",
desc:`A system oscillates before stabilizing. 
The equation models this behavior. 
Find the stable point.`,
equation:"Math.sin(x) - 0.7",
real:"Stable system."
},

{
title:"Advanced System 10",
desc:`A nonlinear oscillatory system reaches equilibrium. 
The model uses sinusoidal functions. 
Find the equilibrium value.`,
equation:"Math.sin(x) - 0.8",
real:"Final stable point."
}

];

// FINAL EXPORT
const scenarios = { easy, normal, hard };