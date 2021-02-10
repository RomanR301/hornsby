let front = {
  hamburger: $('.hamburger'),
  nav: $('.navbar'),
  $body: $('body'),
  init: function () {
      this.events();
  },
  toggleNav: function () {
    if (!this.hamburger.hasClass('open')) {
        this.hamburger.addClass('open');
        this.nav.toggleClass('active');
        this.$body.addClass('active')
        } else {
            this.hamburger.removeClass('open');
            this.nav.toggleClass('active');
            this.$body.removeClass('active')
        }
    },


  openTab: function (element, tabName, parent) {
      let i, tab_content, tab_links;

      tab_content = $(element).closest(parent).find('.tab-content');

      for (i = 0; i < tab_content.length; i++) {
          tab_content[i].style.display = "none";
      }

      tab_links = $(element).closest('.tabs-ul').find('.tab-links');

      for (i = 0; i < tab_links.length; i++) {
          tab_links[i].className = tab_links[i].className.replace(" active", "");
      }

      document.getElementById(tabName).style.display = "block";
      $(element).addClass('active');
  },

  events: function () {
      let self = this;
      $(document).on('click', '.hamburger', function () {
          self.toggleNav();
      });
  }
};

let modal = {
  closeButton: $('.modal__close'),
  closeOverlay: $('.modal'),
  can: 1,
  init: function () {
      this.events();
  },
  openModal: function (id) {
      let modalWindow = $(id);
      modalWindow.fadeIn();
      modalWindow.find('.modal__content').removeClass('animate-away').addClass('animate-in');

      $('body, html').addClass('active');
  },

  closeModal: function (id) {
      let modalWindow = $(id);
      modalWindow.find('.modal__content').removeClass('animate-in').addClass('animate-away');
      modalWindow.fadeOut();
      $('body, html').removeClass('active');
  },

  events: function () {

      $(document).on('click', '.modalTrigger', function (e) {
          e.preventDefault();
          let self = $(this),
              target = self.attr('data-modal');
          modal.openModal(target);

      });

    //   $(document).ready(function() {
    //     $(".accordion__item .accordion__button").on("click", function(e) {
    //     e.preventDefault();
    //         if ($(this).parent().hasClass("active")) {
    //         $(this).parent().removeClass("active");
    //         $(this).parent().find(".accordion__content").slideUp(200);
    //         } else {
    //         $(".accordion__item").removeClass("active");
    //         $(this).parent().addClass("active");
    //         $(".accordion__content").slideUp(200);
    //         $(this).parent().find(".accordion__content").slideDown(200);
    //         }
    //     });
    //   });
    $(document).ready(function() {
        $(".accordion__item .icon-arrow").on("click", function(e) {
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
      });
    $(document).on('click', '.modal', function (event) {
          let self = '#' + $(this).attr('id');
          if (event.target.className == 'modal__body') {
              modal.closeModal(self);
          }
      });

      $(document).on('click', '.modal__close', function () {
          let self = '#' + $(this).closest('.modal').attr('id');
          modal.closeModal(self);
      });


  }
};


jQuery(function () {
  front.init();
  modal.init(); 
});
