const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const question = document.getElementById('question');

let scale = 1;
let noScale = 1;

noBtn.addEventListener('click', () => {
    scale += 0.5;
    yesBtn.style.transform = `scale(${scale})`;
        noScale -= 0.1;
    if (noScale > 0.2) {
        noBtn.style.transform = `scale(${noScale})`;
    }
    const phrases = ["Are you sure?", "Really?", "Think again!", "Please?", "Don't do this!"];
    noBtn.innerText = phrases[Math.floor(Math.random() * phrases.length)];
});

yesBtn.addEventListener('click', () => {
    question.innerText = "Yipeeeeee,Sedra is my valentine,Yipeeeeee";
    document.querySelector('.buttons').style.display = 'none';
});