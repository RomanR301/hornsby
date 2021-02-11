let front = {
  hamburger: $('.hamburger'),
  nav: $('.navbar'),
  init: function () {
      this.events();
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
