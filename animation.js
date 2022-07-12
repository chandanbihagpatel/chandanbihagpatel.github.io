
const tl = gsap.timeline({defaults: {duration: 0.1}})
const t2 = gsap.timeline({defaults: {duration: 0.1}})
const t3 = gsap.timeline({defaults: {duration: 0.5}})



tl.fromTo('#right', {y: '500px'}, {y: '0px', duration: 1.5})
tl.fromTo('#left', {y: '-500px'}, {y: '0px', duration: 1.5}, '<0%')
tl.fromTo('#left-letters', {x: '-500px' , opacity: 0}, {x: '10px', opacity: 1, duration: 1})
tl.fromTo('#right-letters', {x: '500px', opacity: 1}, {x: '-10px', opacity: 1, duration: 1},'<0%')

tl.to('#right',{x: '-500px', opacity: 0, duration: .5})
tl.to('#left', {x: '500px', opacity: 0, duration: .5},'<0%')
tl.to('.welcome-container', {opacity: 0})
tl.to('.piano-container', {opacity: 1})







var child = []
var imageChild = []
var keypress = document.getElementById('key-press');
var children = keypress.children;

for(var i=0; i<children.length; i++){
        child[i] = children[i];
        }


    child.forEach(element => {
        tl.fromTo(element, { scale:100, opacity:0}, { scale: 1, opacity: 1})
            
        element.addEventListener('mouseover', () => {
            console.log(element);
            tl.to(element , {opacity: 0, duration: 0.01})
        
        })
        element.addEventListener('mouseout', () => {
            console.log(element);
            tl.to(element , {opacity: 1, duration: 0.01})
        
        })
        
    })
    var imageChild = []
    var images = document.getElementById('piano-links');
    var imageChildren = images.children;
    for(var i=0; i<imageChildren.length; i++){
        imageChild[i] = imageChildren[i];
    }
    imageChild.forEach(element =>{
        tl.fromTo(element, {opacity:0, y: '500px'}, { opacity: 1, y: '0px'})
    
    })

tl.fromTo('#piano-outline', {opacity:0}, { opacity: 1, duration: 2})
tl.to('.welcome', {y: '-1000px'})

// setInterval(() => {
//     t2.to('body', {backgroundColor: '#030303', ease: "bounce", duration: 1.5})
//     t2.to('body', {backgroundColor: '#a80c2e', ease: "bounce", duration: 1.5})
//     t2.to('body', {backgroundColor: '#ff577e', ease: "bounce", duration: 1.5})
// }, 1000);

setInterval(() => {
    t2.to('body', {backgroundColor: '#030303', ease: "bounce", duration: 1.5})
    t2.to('body', {backgroundColor: '#a80c2e', ease: "bounce", duration: 1.5})
    t2.to('body', {backgroundColor: '#ff577e', ease: "bounce", duration: 1.5})
}, 1000);

// var imageChild = []


//     var keyImage = document.getElementById('piano-links');
//     var keyChildren = keyImage.children;
//     for(var i=0; i<keyChildren.length; i++){
//         imageChild[i] = keyChildren[i];
//     }

// imageChild.forEach(thing => {
//     thing.addEventListener('mouseover', () => {
//         tl.to(thing , {opacity: 1})
    
//     })
//     thing.addEventListener('mouseout', () => {
//         tl.to(thing , {opacity: 0})
    
//     })
    
// })