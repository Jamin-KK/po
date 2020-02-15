 //lightgallery lightbox
 $(".lightbox").lightGallery({
    thumbnail: true,
    autoplay: true,
    pause: 3000,
    progressBar: true
}); 

//window popup
$(".window").click(function(e){
    e.preventDefault();
    //window.open("파일명", "팝업이름", "옵션설정");
    //옵션 : left, top, width, height, status, toolbor, location, menubar, scrollbars, fullscreen, channelmode
    window.open('sample_popup.html', 'popup01', 'width=800, height=563, left=50, top=50, scrollbars=0, toolbar=0, menubar=no');
});


//layer popup
$(".layer").click(function(e){
    e.preventDefault();
    // $("#layer").css("display","block");
    // $("#modal").show();
    $("#layer").fadeIn(200);
    // $("#modal").slideDown();
});
$("#layer .close").click(function(e){
    e.preventDefault();
    // $("#layer").css("display","none");
    // $("#modal").hide();
    $("#layer").fadeOut(200);
    // $("#modal").slideUp();
});


 //tab_menu
var $tab_list = $(".tab_menu");

$tab_list.find("ul ul").hide();
$tab_list.find("li.active > ul").show();

function tabMenu(e){
    e.preventDefault();
    var $this = $(this);

    $this.next("ul").show().parent("li").addClass("active").siblings("li").removeClass("active").find(">ul").hide();
}
$tab_list.find("ul>li>a").click(tabMenu).focus(tabMenu);

//ban
$(".ban").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true
});

//gallery
$(".gallery_img").slick({
    dots: false,
    fade: true,
    pauseOnHover: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 300,
    slidesToShow: 1
});

$(".pause").click(function(){
    $(".gallery_img").slick("slickPause");
});
$(".play").click(function(){
    $(".gallery_img").slick("slickPlay");
});
$(".prev").click(function(){
    $(".gallery_img").slick("slickPrev");
});
$(".next").click(function(){
    $(".gallery_img").slick("slickNext");
});

//when lick btn open all the menu
$(".tit .btn").click(function(e){
    e.preventDefault();
    //$("#cont_nav").css("display","block");    
    //$("#cont_nav").show();                    //똑같아
    //$("#cont_nav").fadeIn();                  //서서히나나남
    //$("#cont_nav").slideDown();               //only use it once
    //$("#cont_nav").toggle();                  //show+hide
    //$("#cont_nav").fadeToggle();              //toggle+fade
    $("#cont_nav").slideToggle(200);
    $(this).toggleClass("on"); //addClass + removeClass
});