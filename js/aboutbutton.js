$('section1').click(function(){
    $('section1').fadeOut(5000);
    console.log("click");
})

let abouttext1 = true;

$(".circle_title").click(function(){
    $('.circle_title').fadeOut(500);
    $('.circle_title').fadeIn(500);
    if(abouttext1 === false){
        $('.about-text1').animate({left:'0%'});
        $('.about-text2').animate({left:'0%'});
        $('.about-text1').fadeOut(200);
        abouttext1 = true;
    }else{
        $('.about-text1').fadeIn(200);
        $('.about-text1').animate({left:'30%'});
        $('.about-text2').animate({left:'-30%'});
        abouttext1 = false;
    }
    console.log(abouttext1);
})
// $(".about-text1").click(function(){
//     $('.about-text1').animate({left:'-200px'});
// })

// $(".circle_title").click(function(){

//     if(abouttext1 === false){
       
//         abouttext1 = true;
//         console.log(abouttext1);
//     }
// })
