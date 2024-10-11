let close = document.getElementById('close');
document.getElementById('nav-toggle').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');

    if(close){
        close.addEventListener('click', ()=>{
            navLinks.classList.remove('active');

        })
    }
    });


