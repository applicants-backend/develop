let abouttext1 = true;

$("button").click(function(){
    console.log(111);
    $('.slide-txt-box').fadeOut(500);
})

// $(".circle_title").click(function(){
//     $('.circle_title').fadeOut(500);
//     $('.circle_title').fadeIn(500);
//     if(abouttext1 === false){
//         $('.about-text1').animate({left:'0%'});
//         $('.about-text2').animate({left:'0%'});
//         $('.about-text1').fadeOut(200);
//         abouttext1 = true;
//     }else{
//         $('.about-text1').fadeIn(200);
//         $('.about-text1').animate({left:'30%'});
//         $('.about-text2').animate({left:'-30%'});
//         abouttext1 = false;
//     }
//     console.log(abouttext1);
// })