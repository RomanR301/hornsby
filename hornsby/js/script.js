let front = {
  hamburger: $('.hamburger'),
  nav: $('.navbar'),
  init: function () {
      this.events();
      $(".accordion__item .accordion__button").on("click", function(e) {
        e.preventDefault();
            if ($(this).parent().hasClass("active")) {
            $(this).parent().removeClass("active");
            $(this).parent().find(".accordion__content").slideUp(200);
            } else {
            $(".accordion__item").removeClass("active");
            $(this).parent().addClass("active");
            $(".accordion__content").slideUp(200);
            $(this).parent().find(".accordion__content").slideDown(200);
            }
        });

        $(".toggle__frame .toggle__button").on("click", function(e) {
          e.preventDefault();
              if ($(this).parent().hasClass("active")) {
              $(this).parent().removeClass("active");
              $(this).parent().find(".toggle__content").slideUp(200);
              } else {
              $(".toggle__frame").removeClass("active");
              $(this).parent().addClass("active");
              $(".toggle__content").slideUp(200);
              $(this).parent().find(".toggle__content").slideDown(200);
              }
          });

        if(window.matchMedia('(min-width: 1400px)').matches){
          $('.has-sub-menu a').hover(
            function(){ 
              $(".main-screen").addClass('active');
            },
            function(){ 
              $(".main-screen").removeClass('active'); 
            }
          );
        }

        if(window.matchMedia('(max-width: 1400px)').matches){
          $(document).on('click', '.has-sub-menu .icon-arrow', function(){
            
            if ($(this).hasClass('open') ) {
              $(this).removeClass('open');
              $(this).next('.sub-menu').hide();
              $(this).prev('a').removeClass('active');
            } else {
              $(this).addClass('open');
              $(this).next('.sub-menu').show();
              $(this).prev('a').addClass('active');
            }
          })
        }
  },
  toggleNav: function () {
    if (!this.hamburger.hasClass('open')) {
        this.hamburger.addClass('open');
        this.nav.slideDown('fast');
        } else {
            this.hamburger.removeClass('open');
            this.nav.hide();
        }
    },


  events: function () {
      let self = this;
      $(document).on('click', '.hamburger', function () {
          self.toggleNav();
      });
  }
};

jQuery(function () {
  front.init();
});
