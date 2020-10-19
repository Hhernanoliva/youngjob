import Bound from 'bound.js'

const boundary = Bound({
    margins: { bottom: -400 }
});

const h4 = document.querySelector("h4");

boundary.watch(h4, () => {
    h4.classList.add('h4rev');
    console.log("ASLDJLASDJLAS ")
}, () => {
    h4.classList.remove('h4rev')
});