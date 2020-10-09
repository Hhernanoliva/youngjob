const load = () => {
    const navbar = document.querySelector(".navbar")
    const header = document.querySelector(".header")

    //const modalBurguer = document.createElement()

    // Sticky NavBar
    window.addEventListener('scroll', function(){
        navbar.classList.toggle('sticky', window.scrollY > header.scrollHeight);
    });

    // Hamburguesa
    document.getElementById('button').addEventListener('click', function () {
        this.classList.toggle('opened');
        this.setAttribute('aria-expanded', this.classList.contains('opened'));


    });
}
