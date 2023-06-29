const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
    alert(`
    Монитор: ${window.screen.width} x ${window.screen.height}
    Окно браузера(с колесом прокрутки): ${window.innerWidth} x ${window.innerHeight}
    `)
    });
    


