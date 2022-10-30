// $(document).ready(function(){
//     $("div").click(function(){
//         $(this).hide();
//     });
// });


// $(document).ready(function(){
//     $("div").click(function(){
//         alert("MUNCUL ALERT");
//     });
// });


$(document).ready(function(){
    $(".btn-show").click(function(){
        $(".text").show();
    });

    $(".btn-toggle").click(function(){
        $(".menu-content").toggle();
    });

    $(".form-input").change(function(){
        $(".alert").show();
    });

    $(".form-blur").blur(function(){
        $(".alert-blur").show();
    });

    $('#tabs li a:not(:first)').addClass('inactive');
    $('.tab-content-custom').hide();
    $('.tab-content-custom:first').show();

    $('#tabs li a').click(function(){
        var n = $(this).attr('id');
        if($(this).hasClass('inactive')){
            $('#tabs li a').addClass('inactive');
            $(this).removeClass('inactive');

            $('.tab-content-custom').hide();
            $('#' + n + 'content').fadeIn('slow');
        }
    })

    $('.clickToSmall').click(function(){
        $('.box').animate({
            marginLeft: "300px",
            height: "100px"
        });
    })

    $('.clickToBig').click(function(){
        $('.box').animate({
            marginLeft: "0px",
            height: "300px"
        }, 3000);
    })

    $('.fadeTo').click(function(){
        // $('.boxFade').fadeOut(1000)
        $('.boxFade').fadeTo(1000, 0.3)
    })

    $('.slideToggle').click(function(){
        $('.boxToggle').slideToggle(3000)
    })
});