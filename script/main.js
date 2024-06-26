$(function(){
    // alert ('hi')
    $('.profile .btn').click(function(e){
        e.preventDefault()
        $('.popup').show()
    })
    $('.popup button').click(function(){
        $('.popup').fadeOut(200)
    })

     
    let andc = false;
    $(window).scroll(function() {  
        $('.h-inner').addClass('hi')
        //만약에 스크롤탑이 0이면 removeclass (hi)
        if ($(window).scrollTop()==0) {
            $('.h-inner').removeClass('hi');
        }
        
        if ($(window).scrollTop() >= 7200) {
            $('header .container > .logo').addClass('on').removeClass('and');
            andc = false; 
        } else {
            if (!andc) {
                $('header .container > .logo').addClass('and').removeClass('on');
                andc = true; 
                setTimeout(function() {
                    $('header .container > .logo').removeClass('and');
                }, 500);
            }
        }

        // _________________________탑버튼___________________________
        if($(this).scrollTop()>=1350){
            $('.gotop').fadeIn()
        }else{
            $('.gotop').fadeOut()
        }

        // _________________________메뉴바___________________________

        $('main .mainbg > section').each(function(){
            if($(this).offset().top <= $(window).scrollTop() + 200 ){
     
                let idx = $(this).index()
   
                $('header ul li').removeClass('ha')
                $('header ul li').eq(idx).addClass('ha')
            }
            
        })
        
    });
    $('.gotop').click(function(e){
        e.preventDefault()
        $('html,body').stop().animate({
            scrollTop : '0'
        },400)
    })

    $('header ul li').click(function(){
        $(this).addClass('ha').siblings().removeClass('ha')

        let idx = $(this).index()

        let section = $('main .mainbg > section').eq(idx)
        // console.log(section)-작업관리자확인용

        let distance = section.offset().top + (100)

        $('html, body').animate({
            scrollTop : distance
        })
    })

    $('.hamburger').click(function(){
            $('.h-inner').toggleClass('hi')

    })

    
})
