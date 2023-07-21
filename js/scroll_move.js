const button1 = document.getElementById('about-button');
const section1 = document.getElementById('section2-container');

button1.addEventListener('click',() =>{
    window.scrollBy({top:section1.getBoundingClientRect().top, behavior:"smooth"})
    console.log(11111);
})