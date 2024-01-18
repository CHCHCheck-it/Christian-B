const lenis = new Lenis({
    lerp: 0.1,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
  });
  
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  
  // Add a click event listener to the links you want to scroll smoothly
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
  
      if (targetElement) {
        lenis.scrollTo(targetElement.offsetTop);
      }
    });
  });
  
  requestAnimationFrame(raf);
  
  
//CURSOR DESIGN
  var cursor = document.querySelector('.cursor'),
      cursorScale = document.querySelectorAll('.cursor-scale'),
      mouseX = 0,
      mouseY = 0
  
  gsap.to({}, 0.016, {
      repeat: -1,
  
      onRepeat: function () {
          gsap.set(cursor, {
              css: {
                  left: mouseX,
                  top: mouseY
              }
          })
      }
  });

  window.addEventListener("mousemove", function (e) {
      mouseX = e.clientX;
      mouseY = e.clientY
  });

//DISPLAY DATE AND TIME
function updateClock() {
    var now = new Date();

    var optionsTime = { timeZone: 'Asia/Manila', hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' };
    var phTime = now.toLocaleTimeString('en-US', optionsTime);
    document.getElementById('time').textContent = phTime;

    var optionsMonthYear = { timeZone: 'Asia/Manila', month: 'long', year: 'numeric' };
    var monthyear = now.toLocaleDateString('en-US', optionsMonthYear);
    document.getElementById('monthyear').textContent = monthyear;
}
    setInterval(updateClock, 1000);
    updateClock();


//FEATURED WORKS REVERSING
    document.addEventListener('DOMContentLoaded', function () {
      var featuredWorksList = document.getElementById('featured-works-list');
      var containers = featuredWorksList.querySelectorAll('.featured-works-container');
  
      containers.forEach(function (container, index) {
        if (index % 2 === 1) { // Check if it's an even-numbered child (index is 0-based)
          container.classList.add('reverse-layout');
        }
      });
    });