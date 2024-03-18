let bar = document.querySelector(".bars");
let links = document.querySelector(".links");

bar.addEventListener("click", () => {
    links.classList.toggle("links-active");
})

// gsap animation


gsap.from("nav .logo", {
   y: -200,
   delay:.1,
})


gsap.from("nav .links li", {
    y: -200,
    duration: 1,
    delay: .5,
    stagger: 0.2,
})


gsap.from(".home .left .small-text,h1,h3", {
    x: -300,
    opacity:0,
    duration: 2,
    delay: 2,
    stagger: 0.4,
})

gsap.from(".home .left .animated-btn", {
    x: -300,
    opacity:0,
    duration: 2,
    delay: 3.6,
  
})

gsap.from(".home .right img", {

    opacity:0,
    duration: 2,
    delay: 4.1,
    rotate:340,
    scale:0,
  
})

gsap.from(".intro-heading .about-h2",{
    opacity:0,
    scale:0,
    scrollTrigger:{
trigger:".intro-heading .about-h2",
scroller:"body",
    }
})


gsap.from(".about-left .image-cover",{
 rotate:90,
 opacity:0,
    scrollTrigger:{
trigger:".about-left .image-cover",
scroller:"body",

    }
})


gsap.from(".about-right h3,.about-para,h4,pre",{
 stagger:0.3,
    opacity:0,
    delay:1,
       scrollTrigger:{
   trigger:".about-right h3,p,h4",
   scroller:"body",
   
       }
   })



   gsap.from(".services-boxes .box-overlay",{
 stagger:0.3,
    scale:0,
    delay:1,
       scrollTrigger:{
   trigger:".services-boxes .box-overlay",
   scroller:"body",
   
       }
   })


   gsap.from(".skill .line-inside",{
    stagger:0.3,
       width:0,
          scrollTrigger:{
      trigger:".skill .line-inside",
      scroller:"body",
      
          }
      })


         gsap.from(".skill .percents",{
    innerText:0,
          scrollTrigger:{
      trigger:".skill .percents",
      scroller:"body",
      
          }
      })


      gsap.from(".contact .contact-left h2,p,icons i",{
        x:-600,
        stagger:0.5,
              scrollTrigger:{
          trigger:".contact .contact-left h2,p,icons i",
          scroller:"body",
          
              }
          })

          gsap.from(".contact .contact-right input,textarea,.lst-btn",{
            scale:0,
            stagger:0.5,
                  scrollTrigger:{
              trigger:".contact  .contact-right input,textarea,.lst-btn",
              scroller:"body",
             
              
                  }
              })