const button = document.querySelectorAll('input.caption-button');

button.forEach(element => {
    element.addEventListener('click', function(e) {
        const target = e.target.parentElement;
        const targetElement = target.querySelector('.caption');
        targetElement.classList.toggle('active');
    });
});

console.log('coba');