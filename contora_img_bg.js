(function ($) {

    function bg_preloader_init () {
        $('.bg-preload').not('.init').each(function(key, element) {
            $(element).addClass('init');
            $(element).after('<div class="preloader"><div class="preloader_container"></div></div>');

            console.log('Начинаем загрузку.');

            $.imgpreload($(element).data('url'), function() {

                //
                // Магия анимированного появления картинки пишется здесь.
                //

                $(element).css('background-image', 'url(' + $(element).data('url') + ')');
                $(element).addClass('loaded');
                $(element).next('.preloader').addClass('loaded');
            });
        });
    }

    Drupal.behaviors.contora_img_bg = {
        attach: function (context, settings) {
            bg_preloader_init ();
        }
    };

})(jQuery);