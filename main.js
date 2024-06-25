//jquery
$(document).ready(function(){
    $('.fa-bars').click(function(){
        $(this).toggleClass("fa-times");   //change class to fa-times
        $('nav').toggleClass('nav-toggle');
    });

    $(window).on('scroll load',function(){
        $('.fa-bars').removeClass("fa-times");   //remove classes when load the window
        $('nav').removeClass('nav-toggle');
    });
    //counting from 0 to..
    $('.count').each(function() {
        var $this = $(this),
            countTo = $this.attr('data-count');
        $({ countNum: $this.text()}).animate({
          countNum: countTo
        },
        {
          duration: 5000,
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum + '+');
          }
        });

    });

    $(".project").magnificPopup({   //for slideshow
      delegate:'a',
      type:'image',
      gallery:{
        enabled:true
      }
    });

});