let front = {
  hamburger: $('.hamburger'),
  nav: $('.navbar'),
  init: function () {
      this.events();
      $(".accordion__item .icon-arrow").on("click", function(e) {
        e.preventDefault();
            if ($(this).parent().parent().hasClass("active")) {
            $(this).parent().parent().removeClass("active");
            $(this).parent().parent().find(".accordion__content").slideUp(200);
            } else {
            $(".accordion__item").removeClass("active");
            $(this).parent().parent().addClass("active");
            $(".accordion__content").slideUp(200);
            $(this).parent().parent().find(".accordion__content").slideDown(200);
            }
        });
  },
  toggleNav: function () {
    if (!this.hamburger.hasClass('open')) {
        this.hamburger.addClass('open');
        this.nav.toggleClass('active');
        } else {
            this.hamburger.removeClass('open');
            this.nav.toggleClass('active');
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
