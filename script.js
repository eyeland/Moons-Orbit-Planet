//Define the canvas
let canvas = document.createElement('canvas');
let ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);

let planetGradients = {
    jupiter: ctx.createLinearGradient(100, 0, canvas.height / 2, canvas.height / 2),
    venus: ctx.createLinearGradient(100, 0, canvas.height/2, canvas.height/2)
}

planetGradients.jupiter.addColorStop(0, "#3f87a6");
planetGradients.jupiter.addColorStop(0.5, "#ebf8e1");
planetGradients.jupiter.addColorStop(0.75, "#f69d3c");
planetGradients.jupiter.addColorStop(1, "#561423");

planetGradients.venus.addColorStop(0, '#943fa6')
planetGradients.venus.addColorStop(0.5, '#e1ecf8')
planetGradients.venus.addColorStop(0.75, '#3cf6b7')
planetGradients.venus.addColorStop(1, '#561423')


let sunGradient = {
    sun: ctx.createLinearGradient(0, 0, canvas.height / 2, canvas.height / 2)
}

sunGradient.sun.addColorStop(0, "#3f87a6");
sunGradient.sun.addColorStop(0.5, "#ebf8e1");
sunGradient.sun.addColorStop(0.75, "#f69d3c");
sunGradient.sun.addColorStop(1, "#561423");

//Define the yellow star
let star = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 105,
    color: sunGradient.sun
};

//Draw the yellow star
function drawStar() {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = star.color;
    ctx.fill();
    ctx.closePath();
}





//Define the planets
let planets = [
    { x: star.x + 100, y: star.y, radius: 40, color: planetGradients.jupiter, speed: 0.05, velocity: 0.02, distance: 0.65 },
    { x: star.x + 150, y: star.y, radius: 30, color: planetGradients.venus, speed: 0.28, velocity: 0.04, distance: 0.9 },
    { x: star.x + 200, y: star.y, radius: 10, color: 'green', speed: 0.41, velocity: 0.05, distance: 0.8 },
    { x: star.x + 250, y: star.y, radius: 10, color: 'blue', speed: 1.14, velocity: 0.025, distance: 0.7 },
    { x: star.x + 300, y: star.y, radius: 10, color: 'indigo', speed: 0.17, velocity: 0.04, distance: 0.6 },
    { x: star.x + 350, y: star.y, radius: 10, color: 'violet', speed: 0.2, velocity: 0.05, distance: 0.5 },
    { x: star.x + 500, y: star.y, radius: 10, color: 'pink', speed: 0.23, velocity: 0.08, distance: 0.4 }
];

//Draw the planets
function drawPlanets() {
    for (let i = 0; i < planets.length; i++) {
        ctx.beginPath();
        ctx.arc(planets[i].x, planets[i].y, planets[i].radius, 0, Math.PI * 2, false);
        ctx.fillStyle = planets[i].color;
        ctx.fill();
        ctx.closePath();
    }
}

//Orbit the planets
function orbitPlanets() {
    for (let i = 0; i < planets.length; i++) {
        planets[i].x = star.x + Math.cos(planets[i].speed) * (planets[i].distance * 500);
        planets[i].y = star.y + Math.sin(planets[i].speed) * 100;
        planets[i].speed += planets[i].velocity;
    }
}

//Animate the planets
function animate() {
    requestAnimationFrame(animate);
    ctx.fillStyle = 'rgba(20, 0, 0, 0.1)'
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawStar();
    drawPlanets();
    orbitPlanets();
}

animate();