const load = () => {
    const navbar = document.querySelector(".navbar");
    const header = document.querySelector(".header");
    const servicios = document.querySelector(".servicios");
    const menuModal = document.querySelector(".menu-modal");
    const overlay = document.querySelector("#bodyOverlay");
    const overlayActive = document.querySelector(".activeOverlay");
    const cerrarModal = document.querySelector(".cerrarModal");
    const btnBurger = document.querySelector('.btn-burger');

    // Sticky NavBar
    window.addEventListener('scroll', function(){
        navbar.classList.toggle('sticky', window.scrollY > 400);
    });

    // Burger NavBar
    btnBurger.addEventListener('click', () => {
        btnBurger.classList.toggle('opened');
        // Menu Modal
        menuModal.classList.toggle('activeModal');
        overlay.classList.toggle('activeOverlay');

    });
    cerrarModal.addEventListener('click', () => {
        btnBurger.classList.remove('opened');
        menuModal.classList.remove('activeModal');
        overlay.classList.remove('activeOverlay');
    });

    // Button General
    const buttons = document.querySelectorAll('button');
    function handleClick(e) {
    const { layerX, layerY } = e;
    const { width, height } = this.getBoundingClientRect();

    this.style.setProperty('--top', `${(layerY / height) * 100}%`);
    this.style.setProperty('--left', `${(layerX / width) * 100}%`);

    const dx = layerX > width / 2 ? layerX : width - layerX;
    const dy = layerY > height / 2 ? layerY : height - layerY;
    const size = Math.sqrt(dx ** 2 + dy ** 2) * 2;
    this.style.setProperty('--size', `${size}px`);
    }
    buttons.forEach(button => {
    button.addEventListener('mousedown', handleClick);
    });


}


