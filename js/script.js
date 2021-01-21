$(document).ready(function(){

    $('.navbar-toggler').click(function(){
    $('.navbar-toggler').toggleClass('active')
         
    });
    //---
    $('.toggle-setting .fa-gear').click(function(){
        $(this).toggleClass('fa-spin')
        $('.box').toggleClass('open')
    })
    
  

    $(window).scroll(function(){
       var fix = $(window).scrollTop()
       if(fix > 200){
           $('.navbar').addClass('fixed').slideDown(500)
       }
       else{
        $('.navbar').removeClass('fixed')

       }

       // Top scroll
       if(fix >300){
           $('.top').show(1000);
       }
       else{
        $('.top').hide(1000);

       }

    })

    //Counter
    $(window).scroll(function(){
        var counttt = $(this).scrollTop();
          
     if(counttt > 1975){
        $('.time').countTo();
       }
   
    });
   

    //portfolio
    $('.buttons button').click(function(){
        $(this).addClass('active_btn').siblings().removeClass('active_btn')
        var CssFilter=$(this).attr('id');
        if(CssFilter=='all'){
            $('.Images > div').css('opacity','1')
        }
        else{
            $('.Images > div').css('opacity','0.1')
            $('.Images').contents().filter('.'+ CssFilter).css('opacity','1')

        }
        
        /*
        طريقة تانية
        $(this).addClass('active_btn').siblings().removeClass('active_btn');
        var Cssfilter= $(this).attr('id')
        if(Cssfilter=='all'){
            $('.Images > div').fadeIn();
        }
        else{
            $('.Images > div').fadeOut();
            $('.Images').contents().filter('.' + Cssfilter).fadeIn()

        }
        */
       
    })

    //owl-carousel
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
       // dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    })

   //click Top to Body
    $('.top').click(function(){
    $('html,body').animate({'scrollTop':0},3000)
           
    })

    //choose to show the  content
    $('.choose .c_panel ul li').click(function(){
        $(this).addClass('active_btn').siblings().removeClass('active_btn')
        var p =$(this).data('role')
        $('.content > div').hide();
        $('.content').contents().filter('#' + p).fadeIn(1000);
    })

    // view the viedeo in class choose
    $('.pop').magnificPopup({
        type: 'iframe'
    
    });

    // view the Images in Portfolios
    $('.pp').magnificPopup({
        type: 'image'
    
    });

  //------slick----------------------
  $('.slick').slick({
    prevArrow:false,
    nextArrow:false,  
  });
  
//keydown the input
  $('input').on({
      'keydown':function(){
          $(this).css('color','#252525')
      },
      'keyup':function(){
        $(this).css('color','#7cb62f')

      }
  })
  //-----

 $('.more').click(function(){
     $('.morel').show()
     
 })


  //Smooth Scroll
  $('.nav-item .nav-link').click(function(){
      $('body,html').animate({
          scrollTop:$($(this).attr('href')).offset().Top 
    });
/*
    $('body,html').animate({
        scrollTop:$('#',$(this).attr('href'))
  },1000);
  */
  })



   
  



    //console.log($('.pricing ').offset().top)
    
})