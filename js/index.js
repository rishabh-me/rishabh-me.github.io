particlesJS("particles-js",
    {
        "particles": {
            "number": {
                "value": 40,
                "density": { "enable": true, "value_area": 750 }
            },
            "color": { "value": "#55ff06" },
            "shape": {
                "type": "circle",
                "stroke": { "width": 0, "color": "#eeeeee" },
                "polygon": { "nb_sides": 5 },
                "image": { "src": "img/github.svg", "width": 100, "height": 1000 }
            },
            "opacity": {
                "value": 0.5, "random": false,
                "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false }
            },
            "size": { "value": 4, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } },
            "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 },
            "move": {
                "enable": true, "speed": 4, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false,
                "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 }
            }
        },
        "interactivity": {
            "detect_on": "window",
            "events": {
                "onhover": { "enable": true, "mode": "grab" },
                "onclick": { "enable": true, "mode": "remove" }, "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 231.44200550588337,
                    "line_linked": { "opacity": 1 }
                },
                "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 },
                "repulse": { "distance": 200, "duration": 0.4 },
                "push": { "particles_nb": 4 },
                "remove": { "particles_nb": 2 }
            }
        },
        "retina_detect": true
    });
var count_particles, stats, update;
stats = new Stats;
stats.setMode(0);
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';
document.body.appendChild(stats.domElement);
count_particles = document.querySelector('.js-count-particles');
update = function () {
    stats.begin(); stats.end();
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; }
    requestAnimationFrame(update);
};
requestAnimationFrame(update);;
var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };
    function mailRoute(){
        window.open("mailto:rishabh5530@gmail.com");
    };
    function hacker(){
        window.open("https://www.hackerearth.com/@akashpandey123");
    };
    function gitRoute(){
        window.open("https://github.com/rishabh-me");
    };
    function sourceRoute(){
        window.open("https://sourcerer.io/akashf");
      
    }

    
    
function skillRoute() {
    let elmnt = document.getElementById("skillSet");
    elmnt.scrollIntoView();
  }    
function aboutRoute() {
    let elmnt = document.getElementById("aboutMe");
    elmnt.scrollIntoView();
  }
        
function projectRoute() {
    let elmnt = document.getElementById("projectMy");
    elmnt.scrollIntoView();
  }
      
function certificationRoute() {
    let elmnt = document.getElementById("myCertificates");
    elmnt.scrollIntoView();
  }
function contactRoute() {
  let elmnt = document.getElementById("myContacts");
  elmnt.scrollIntoView();
}  
function resumeRoute() {
    window.open('https://drive.google.com/file/d/1yipgsBozyWuhGzYHG3dOeHIfoEf6fy_5/view?usp=sharing', '_blank');
    
  }  


  var delayInMilliseconds = 500; // half a second

setTimeout(function() { 

   var iframe = document.getElementsByTagName('iframe')[0];
   iframe.style.background = '#121212';
   iframe.contentWindow.document.body.style.backgroundColor = '#121212';

   iframe.contentWindow.document.body.style.color = '#121212';

}, delayInMilliseconds);