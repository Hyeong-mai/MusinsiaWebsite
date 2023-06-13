var maincount = 0;
history.scrollRestoration = "manual"

var men_1 = {
    title : "와이드 히든 밴딩 슬랙스",
    price : "32,900원",
    join_price : "31,584 ~ 32,900원",
    color : "색상 : 블랙 | #000000",
    info : "여유로운 실루엣의 와이드 핏 히든 밴딩 슬랙스.4%의 폴리우레탄이 포함된 양방향 스트레치 T/R 원단을 사용해 신축성이 뛰어나며 덕분에 자유로운 활동성을 보장한다. 적당한 두께와 중량으로 한여름을 제외한 사계절 내내 활용할 수 있다."
}
var men_2 = {
    title : "럭비 맨투맨 네이비",
    price : "79,000원",
    join_price : "75,840 ~ 79,000원",
    color : "색상 : 베이지,네이비 | #222b31,#d2ccb0",
    info : "네이비 컬러는 두가지 컬러의 소재로 스프라이프 패턴을 표현하였고, 브라운 브리티시그린 컬러는 캥거루 포켓이 포인트인 럭비 맨투맨"
}
var men_7 = {
    title : "제이든 블랙 폴리시드 스무스",
    price : "280,000원",
    join_price : "256,200 ~ 280,000원",
    color : "색상 : 블랙 | #000000",
    info : "1460 부츠를 베이스로 청키한 플랫폼 아웃솔과 사이드 지퍼에 디테일 추가로 재탄생된 모델입니다.강한 내구성과 착화 시 편리함을 제공하며 Polished Smooth Leather 소재로 빈티지한 멋의 유광 부츠입니다."
}
var none = {
    title : "상품 정보 준비중",
    price : "000,000원",
    join_price : "000,000 ~ 000,000원",
    color : "색상 : none | #000000",
    info : "....."
}
$(window).ready(function(){
    var page = 1;
    var oldVal;
    ////////////////
    // musinasa_main
    ////////////////
    $(".left_btn").click(function(){
        if(page == 2){
            $(".musinsa_main_wrap").animate({
                "left":"0"
            },200)
            page = page - 1;
            $(".left_btn").css({
                "display":"none"
            })
        }else if(page == 3){
            $(".musinsa_main_wrap").animate({
                "left":"-100%"
            },200)
            page = page - 1;
            $(".musinsa_main_btn").css({
                "display":"flex"
            });
        }
    }); 
    $(".right_btn").click(function(){
        if(page == 2){
            $(".musinsa_main_wrap").animate({
                "left":"-200%"
            },200)
            page = page + 1;
            $(".right_btn").css({
                "display":"none"
            })
        }else if(page == 1){
            $(".musinsa_main_wrap").animate({
                "left":"-100%"
            },200)
            page = page + 1;
            $(".musinsa_main_btn").css({
                "display":"flex"
            });
        }
    });
    $(".musinsa_main_btn").click(function(){
        if(page == 1){
            $(".right_btn>span").text("WOMAN")
            $(".musinsa_list_ttitle>h1").text("MUSINSA MEN")
        }else if(page ==2){
            $(".left_btn>span").text("MEN")
            $(".right_btn>span").text("KIDS")
            $(".musinsa_list_ttitle>h1").text("MUSINSA WOMAN")
        }else if(page == 3){
            $(".left_btn>span").text("WOMAN")
            $(".musinsa_list_ttitle>h1").text("MUSINSA KIDS")
        }
    });

         var mainEventValue = false;
        $(".musinsa_main").on("mousewheel",function(c){
            c.preventDefault();
            var x = c.originalEvent.wheelDeltaX;
            var y = c.originalEvent.wheelDeltaY;

            var Xval = Math.abs(x);
            var Yval = Math.abs(y);
            if(Xval > Yval ){
                if(x < -80 && mainEventValue == false && page < 3){   
                    mainEventValue = true;
                    page = page + 1;
                    var mainPage = page-1 ; 
                    var leftTop = -100;
                    console.log(page)
                    if(page == 2){
                        $(".musinsa_main_btn").css({
                            "display":"flex"
                        });
                        $(".left_btn>span").text("MEN")
                        $(".right_btn>span").text("KIDS")
                        $(".musinsa_list_ttitle>h1").text("MUSINSA WOMAN")
                    }else if(page == 3){
                        $(".right_btn").css({
                            "display":"none"
                        })
                        $(".left_btn>span").text("WOMAN")
                        $(".musinsa_list_ttitle>h1").text("MUSINSA KIDS")
                    }
                    $(".musinsa_main_wrap").stop().animate({left : mainPage * leftTop +"%"},{duration : 200, complete:function(){
                        mainEventValue = false; 
                    }});
                  
                }else if(x > 80 && mainEventValue == false && page > 1){
                    mainEventValue = true;
                    page = page - 1;
                    var mainPage = page-1 ; 
                    var leftTop = -100;
                   
                    if(page == 2){
                        $(".musinsa_main_btn").css({
                            "display":"flex"
                        });
                        $(".left_btn>span").text("MEN")
                        $(".right_btn>span").text("KIDS")
                        $(".musinsa_list_ttitle>h1").text("MUSINSA WOMAN")
                    }else if(page == 1){
                        $(".right_btn>span").text("WOMAN")
                        $(".musinsa_list_ttitle>h1").text("MUSINSA MEN")
                        $(".left_btn").css({
                            "display":"none"
                        })
                    }
                    $(".musinsa_main_wrap").stop().animate({left : mainPage * leftTop +"%"},{duration : 200, complete:function(){
                        mainEventValue = false; 
                    }});
                   
                }
            }else{
                if(y > 10 && mainEventValue == false && maincount  > -1){
                    mainEventValue = false;
                     }else if(y < -10 && mainEventValue == false && maincount <1){
                    mainEventValue = true;
                    maincount ++;
                    // $(".musinsa_main").stop().animate({top:-100+"%"},
                    //     {duration:500, complete: function(){
                    //         mainEventValue = false;
                    //     }
                    // });
                    $(".musinsa_main").stop().fadeOut(function(){
                        mainEventValue = false;
                    });
                    $("body,html").stop().css({"overflow":"unset"})
                    $(".up_to__btn").css({"display":"flex"})
                }else{
                    return true;
                }
            }
          


            
       
        })
        $(".musinsa_main_down_btn").click(function(){
            $(".musinsa_main").stop().fadeOut(function(){
                mainEventValue = false;
            });
            $("body,html").stop().css({"overflow":"unset"})
            $(".up_to__btn").css({"display":"flex"})
        });
    

        
    
    /////////////////////
    // musinasa_side_menu
    /////////////////////
    $(".side_menu_open_btn").click(function(){
        // $(".side_menu").css({
        //     "display":"block"
        // });
        $(".side_menu").fadeIn(300);
    });
    $(".side_menu_close_btn").click(function(){
        // $(".side_menu").css({
        //     "display":"none"
        // });
        $(".side_menu").fadeOut(300);
    });
    $(".side_list_ul li>span").click(function(){
        var ul = $(this).parent("li").children("ul")
        if(ul.css('display') == 'none'){
            ul.slideDown(200);
        }else{
            ul.slideUp(200);
        }
       
    });
    ////////////////
    // musinasa_list
    ////////////////
    $(".move_bar_btn").click(function(){
        var click_id = $(this).attr('id');
        $(".details").css({
            "display":"flex"
        });
        if(click_id == 'bar_btn1'){
            if($("#bar_btn3").css('display') == 'none'){
                $(".column").animate({
                    "width":"60%",
                    "padding":"30px"
                },300);
                $(".move_bar_icon").animate({
                    "left":"20%"
                },300);
                $(".details_wrap").css({
                    "display":"flex",
                    "font_size":"0.7em"
                });
                $(".details>button").css({
                    "font-size":"1.2em",
                    "height":"10%"
                });
            }else{
                $(".column").animate({
                    "width":"35%",
                    "padding":"30px"
                },300);
                $(".move_bar_icon").animate({
                    "left":"10%"
                },300);
                $(".details_wrap").css({
                    "display":"flex",
                    "font_size":"0.7em"
                });
                $(".details>button").css({
                    "font-size":"1.2em",
                    "height":"10%"
                });
            }
        }else if(click_id == 'bar_btn2'){
           

            if($("#bar_btn3").css('display') == 'none'){
                $(".column").animate({
                    "width":"35%",
                    "padding":"30px"
                },300);
                $(".move_bar_icon").animate({
                    "left":"75%"
                },300);
                $(".details_wrap").css({
                    "display":"none"
                });
                $(".details>button").css({
                    "font-size":"1.2em",
                    "height":"60%"
                });
            }else{
                $(".column").animate({
                    "width":"25%",
                    "padding":"20px"
                },300);
                $(".move_bar_icon").animate({
                    "left":"47%"
                },300);
                $(".details_wrap").css({
                    "display":"flex",
                    "font_size":"0.4em"
                });
                $(".details>button").css({
                    "font-size":"1.0em",
                    "height":"10%"
                });
            }
           
            
        }else if(click_id == 'bar_btn3'){
            $(".column").animate({
                "width":"11%",
                "padding":"15px"
            },300);
            $(".details").css({
                "display":"flex"
            });
            $(".details_wrap").css({
                "display":"none"
            });
            $(".details>button").css({
                "font-size":"0.7em",
                "height":"60%"
            });
            $(".move_bar_icon").animate({
                "left":"85%"
            },300);
        }
    }); 
    ///////////////////
    // musinasa_contact
    ///////////////////
    $(".contact_input>input").on("change keyup paste", function() {
        var currentVal = $(this).val();
        if(currentVal == oldVal) {
            return;
        }else{
            $(".contact_textarea").slideDown(200)
            $(".contact_input").css({
                "justify-content"
                : "space-around" 
            });
            oldVal = currentVal;
        }
    });
    ///////////////////
    // musinasa_search
    ///////////////////
    $(".search_wrap>input").on("change keyup paste", function() {
        var currentVal = $(this).val();
       
        if(currentVal == oldVal) {
            return;
        }else{
           var span = $(this).parent().children("span");
           span.text('"'+currentVal+'" 대한 검색 결과가 없습니다.')
        }
    });
    $(".search_openBtn").click(function(){
        $(".search").css({
            "top":"0"
        });
        $(this).css({
            "visibility":"hidden"
        })
    });
    $(".search_closeBtn").click(function(){
        $(".search").css({
            "top":"-120%"
        });
        $(".search_openBtn").css({
            "visibility":"visible"
        })
    });
    //////////////////////
    // musinasa_img_slide
    //////////////////////
    var scrollEvent = false;
    var count = 0;
    var countBar = 1;
    $(".img_slide_main").on('mousewheel',function(c){
        c.preventDefault();
        var m = c.originalEvent.wheelDelta;
        var value = -100;
        var BarVal = 20;
        if(m > 10 && scrollEvent == false && count >= 1){
            scrollEvent = true;
            count --;
            countBar --;
            console.log("asd");
            $(this).children(".img_slide_wrap").stop().animate({top:value*count+"%"},300)
            $(".slideBar>span").stop().animate({height:BarVal*countBar+"%"},
                {duration:300, complete: function(){
                        scrollEvent = false;
                }
            });
        }else if(m < -10 && scrollEvent == false && count < 4){
            scrollEvent = true;
            count ++;
            countBar ++;
            $(this).children(".img_slide_wrap").stop().animate({top:value*count+"%"},300)
            $(".slideBar>span").stop().animate({height:BarVal*countBar+"%"},
                {duration:300, complete: function(){
                        scrollEvent = false;
                }
            });
        }
    });
    $(".img_slide").on("mouseover", function(){
        $(".img_subSlide_wrap").stop().animate({ "opacity": "1"},300)
    });
    $(".img_slide").on("mouseleave", function(){
        $(".img_subSlide_wrap").stop().animate({ "opacity": "0"},300)
    });
        $(".subSlide_img_wrap").click(function(){
            var subCountBar = $(this).attr('name');
            var subCount = subCountBar-1;
            count = subCount;
            countBar = subCountBar;
            var value = -100;
            var BarVal = 20;
            $(".img_slide_wrap").stop().animate({top:value*subCount+"%"},300)
            $(".slideBar>span").stop().animate({height:BarVal*subCountBar+"%"},300);
        });
    var imgslide_img ;
    $(".info_wrap_close_btn").click(function(){
        $(".info").css({"display":"none"})
        // $(".slide_img_wrap").children().remove();
        // $(".subSlide_img_wrap").children().remove();
    });
    $(".detail_btn").click(function(){
        count = 0;
        countBar = 1;
        $(".img_slide_wrap").css({"top":"0%"})
        $(".slideBar>span").css({"height":"20%"})
        $(".info").css({"display":"flex"})
        imgslide_img = $(this).parent(".details").parent(".card").children(".image").children("img");
        var imgAlt =  imgslide_img.attr("alt");
        var imgNumber = imgslide_img.attr("name")
        var imgSrc = imgslide_img.attr("src");
        for(var i = 1; i < 6 ; i++){
            if(i == 1){
                $(".slide_img_wrap[name = "+i+"]").children("img").attr("src", imgSrc);
                $(".subSlide_img_wrap[name = "+i+"]").children("img").attr("src", imgSrc);
            }else{
                //$(".subSlide_img_wrap[name = "+i+"]").append("<img src='img/musinsa_"+imgAlt+"_"+imgNumber+"_"+i+".jpeg'></img>")
                $(".subSlide_img_wrap[name = "+i+"]").children("img").attr("src", "img/musinsa_"+imgAlt+"_"+imgNumber+"_"+i+".jpeg");
                $(".slide_img_wrap[name = "+i+"]").children("img").attr("src", "img/musinsa_"+imgAlt+"_"+imgNumber+"_"+i+".jpeg");
                //$(".slide_img_wrap[name = "+i+"]").append("<img src='img/musinsa_"+imgAlt+"_"+imgNumber+"_"+i+".jpeg'></img>")
            }
           
        }
        if(imgAlt == "men"){
            if(imgNumber == 1){
                $(".title").empty().text(men_1.title)
                $(".p_info").empty().text(men_1.info)
                $(".join_price").empty().text(men_1.join_price)
                $(".product_color").empty().text(men_1.color)
            } else  if(imgNumber == 2){
                $(".title").empty().text(men_2.title)
                $(".p_info").empty().text(men_2.info)
                $(".join_price").empty().text(men_2.join_price)
                $(".product_color").empty().text(men_2.color)
            }else  if(imgNumber == 7){
                $(".title").empty().text(men_7.title)
                $(".p_info").empty().text(men_7.info)
                $(".join_price").empty().text(men_7.join_price)
                $(".product_color").empty().text(men_7.color)
            }else{
                $(".title").empty().text(none.title)
                $(".p_info").empty().text(none.info)
                $(".join_price").empty().text(none.join_price)
                $(".product_color").empty().text(none.color)
            }
            
        }

        // $(".slide_img_wrap").append("<img src="+imgSrc+"></img>"); // 태그 추가
        // $(".subSlide_img_wrap").children().remove();
        // $(".subSlide_img_wrap").append("<img src="+imgSrc+"></img>");
    })
    $('.info').on('scroll touchmove mousewheel', function(event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
      });
      $('.search').on('scroll touchmove mousewheel', function(event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
      });
      $('.side_menu').on('scroll touchmove mousewheel', function(event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
      });
});

$(window).scroll(function(){
    var footer = $("#mv4").offset().top;
    var list = $("#mv2").offset().top;
    var contact = $("#mv3").offset().top;
    var scrollValue = $(document).scrollTop();  
    if( scrollValue <= list){
    //    $(".musinsa_main").stop().animate({top:0+"%"})
       $(".musinsa_main").stop().fadeIn();
       $(".up_to__btn").css({"display":"none"})
       $("body,html").stop().css({"overflow":"hidden"});
       maincount --;
    }else if(scrollValue <= contact-200){
        $(".mv_btn").css({"background-color":"white"});
        $("#btn2").css({
            "background-color":"black"
        });
    }else if(scrollValue <= footer){
        $(".mv_btn").css({"background-color":"white"});
        $("#btn3").css({
            "background-color":"black"
        });
    }
}); 

function sideMv(seq){
    var offset = $("#mv" + seq).offset();
    $('html, body').scrollTop(offset.top);
}

