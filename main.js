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

// fixed header toggle
const showAnim = gsap
    .from(".sticky", {
        yPercent: -100,
        paused: true,
        duration: 0.2
    })
    .progress(1);

ScrollTrigger.create({
    start: "top top",
    end: 99999,
    onUpdate: (self) => {
        self.direction === -1 ? showAnim.play() : showAnim.reverse();
    }
});


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
        // scroller: ".home-container",
        trigger: ".landing-left",
        start: 'top 30%',
        end: "center 100px",
        markers: false,
        invalidateOnRefresh: true,
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

//showcase

gsap.to(".pic", {
    yPercent: 0,
    ease: "none",
    scrollTrigger: {
        trigger: ".project-wrapper",
        start: "top center", // the default values
        end: "center top",
        scrub: true,
    },
});

gsap.to(".descriptions", {
    yPercent: -54,
    ease: "none",
    scrollTrigger: {
        trigger: ".project-wrapper",
        start: "top bottom", // the default values
        end: "bottom top",
        // markers: true,
        scrub: true,
    },
});


