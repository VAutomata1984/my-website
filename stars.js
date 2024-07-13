// stars.js

const canvas = document.getElementById('starryBackground');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = [];
const numberOfStars = 100;

class Star {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 2.5; // was 1.5 
        this.alpha = Math.random();
        this.speed = Math.random() * 0.2 + 0.2; // OG:  * 0.5 + 0.2 
    }

    draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();
        ctx.restore();
    }

    update() {
        this.y += this.speed;
        if (this.y > canvas.height) {
            this.y = 0;
            this.x = Math.random() * canvas.width;
        }
        this.alpha = Math.random() * 0.5 + 0.5; 
    }
}

function init() {
    for (let i = 0; i < numberOfStars; i++) {
        stars.push(new Star());
    }
}

// Add touchstart event listener to enable touch events on canvas
canvas.addEventListener('touchstart', () => {});

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    stars.forEach(star => {
        star.update();
        star.draw();
    });

    requestAnimationFrame(animate);
}

init();
animate();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
