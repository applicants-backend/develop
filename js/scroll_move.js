// 바로가기 버튼
const button1 = document.getElementById('about-button');
// 이동할 대상
const section1 = document.getElementById('section2-container');

button1.addEventListener('click',() =>{
    window.scrollBy({top:section1.getBoundingClientRect().top-50, behavior:"smooth"})
})


const button2 = document.getElementById('category-button');
const section2 = document.getElementById('section1-container');
button2.addEventListener('click',() =>{
    window.scrollBy({top:section2.getBoundingClientRect().top-50, behavior:"smooth"})
})