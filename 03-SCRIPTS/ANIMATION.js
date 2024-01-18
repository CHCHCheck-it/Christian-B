//PRELOADER
function startLoader() {
    let counterElement = document.querySelector(".count h6");
    let currentValue = 0;

    function updateCounter(){
        if (currentValue < 100){
            let increment = Math.floor(Math.random()* 10) + 1;
            currentValue = Math.min (currentValue + increment, 100);
            counterElement.textContent = currentValue;

            let delay =Math.floor(Math.random() * 200) + 25;
            setTimeout (updateCounter, delay);
        }
    }
    updateCounter();
}
startLoader();

gsap.to(".count", {
    opacity: 0,
    delay: 3.5,
    duration: 0.5
});
const splitType = document.querySelectorAll('.ml16')

        splitType.forEach((char,i) => {
            const text = new SplitType(char, { types: 'chars'})

            gsap.from(".char", 1, {
                stagger:{
                    amount: .1,
                  },
                y: '-100%',
                ease: "power4.inOut"
            })
            gsap.to(".char", 1, {
                stagger:{
                    amount: .1,
                  },
                  delay: 3.5,
                y: '-100%',
                ease: "power4.inOut"
            })
        })

    gsap.to (".pre-loader",{
        scale: 0.5,
        ease: "power4.inOut",
        duration: 2,
        delay: 3
    })
    gsap.to (".pre-loader",{
        height: 0,
        ease: "power4.inOut",
        duration: 1.5,
        delay: 4,
        borderWidth: 0
    })
    gsap.to (".loader",{
        height: 0,
        ease: "power4.inOut",
        duration: 1.5,
        delay: 3.75
    })
    gsap.to (".loader-bg",{
        height: 0,
        ease: "power4.inOut",
        duration: 1.5,
        delay: 4
    })
    gsap.to(".container", {
        display: "none",
        delay: 5,
    })
    gsap.to("body", {
        top: 0,
        position: "fixed",
        duration: 3.8,
        ease: "power1.inOut",
      })
    gsap.to("body", {
        top: "auto",
        position: "static",
        duration: 0.1,
        delay: 3.8,
        ease: "power4.inOut",
      });


//MAIN ANIAMTION
    gsap.from(".menu-links p, .about-text p", 1.5, {
        y: '100%',
        ease: "power4.inOut",
        stagger:{
            amount: 1,
        },
        delay: 4
    });



    gsap.from(".services-list-wrapper h3, .services-list-wrapper h4", 1,{
        y: '100%',
        ease: "power4.inOut",
        scrollTrigger: {
            trigger: ".services-list-container",
            start: "top 75%",
        },
    });

    gsap.from(".footer-text p", 1,{
        y: '100%',
        ease: "power4.inOut",
        scrollTrigger: {
            trigger: ".christian-bacalso-footer",
            start: "top 75%",
        },
    });
