const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");
//END SECTION
const section = document.querySelector("section");
const end = section.querySelector("h1");

//SCROLL MAGIC
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({
 duration: 14000,
 triggerElement: intro,
 triggerHook: 0
})
 .setPin(intro)
 .addTo(controller);

//Text Animation
const textAnim = TweenMax.fromTo(text, 0, { opacity: 1 }, { opacity: 0 });

let scene2 = new ScrollMagic.Scene({
    duration: 0,
    triggerElement: 0,
    triggerHook: 0
})
.setTween(textAnim)
.addTo(controller);

 //Video Animation
 let accelamount = 1;
 let scrollpos = 0;
 let delay = 0;

scene.on("update", e => {
    scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
    delay += (scrollpos - delay) * accelamount;
    delay = parseFloat(delay.toFixed(2));
    console.log(scrollpos, delay);
    video.currentTime = delay
}, 250);