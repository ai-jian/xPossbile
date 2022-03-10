// preloader
setTimeout(function () { document.body.classList.add("loaded"); }, 1000);

// hamburger
const toggleBtn = document.querySelector('.hamburger')
const bars = document.querySelector('.bar')
const navbar = document.querySelector('.navbar')


toggleBtn.addEventListener('click', function () {
    bars.classList.toggle('toggled')
    navbar.classList.toggle('show-nav')
})

//ticker

gsap.set('.ticker-wrapper', { xPercent: -50 })
const boxWidth = '540',
    totalWidth = boxWidth * 5,  //  * n of boxes
    ticker = document.querySelectorAll("#ticker .box"),
    dirFromLeft = "+=" + totalWidth,
    dirFromRight = "-=" + totalWidth;

const mod = gsap.utils.wrap(0, totalWidth);

function marquee(which, time, direction) {
    gsap.set(which, {
        x: function (i) {
            return i * boxWidth;
        }
    });
    const action = gsap.timeline()
        .to(which, {
            x: direction,
            modifiers: {
                x: x => mod(parseFloat(x)) + "px"
            },
            duration: time, ease: 'none',
            repeat: -1,
        });
    return action
}

const master = gsap.timeline()
    .add(marquee(ticker, 20, dirFromLeft), 1)




//landing
gsap.registerPlugin(ScrollTrigger);
let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".landing-left",
        start: 'top 30%',
        end: "center 100px",
        markers: true,
        scrub: 3,
        toggleActions: "restart pause reverse pause"
    }
})

tl
    .to('.landing-left', {
        x: -700,
        opacity: 0,
        duration: 3
    })
    .to('.landing-right', {
        x: 700,
        opacity: 0,
        duration: 3
    }, 0)
    .to('#showcase', {
        y: 0,
    })

