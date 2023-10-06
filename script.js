  const btn = document.getElementsByTagName('button')[0];
const colors = [
    'pink','green','purple','yellow','cyan'
];

btn.addEventListener('click', function() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
    document.body.classList.add('change-background-animation');

    setTimeout(() => {
        document.body.classList.remove('change-background-animation');
    }, 500);
});
