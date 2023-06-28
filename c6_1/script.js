const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
    document.querySelectorAll('.icon').forEach(element => {
        element.classList.toggle('hidden')
    });
    
})

