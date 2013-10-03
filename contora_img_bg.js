(function ($) {

    function bg_preloader_init () {
        $('.bg-preload').not('.init').each(function(key, element) {
            $(element).addClass('init');
            $(element).after('<div class="preloader"><div class="preloader_container"></div></div>');
            console.log('Начинаем загрузку.');
            var url = $(element).data('url');
            var id = $(element).data('id');
            var sel = '*[data-id=' + id + ']';

            $.imgpreload(url, function() {
                $(sel).css('background-image', 'url(' + url + ')');
                $(sel ).addClass('loaded');
                $(sel).next('.preloader').addClass('loaded');
            });
        });
    }

    $(document).ready(function(){
        bg_preloader_init ();
    });

    $(document).ajaxComplete(function(){
        bg_preloader_init ();
    });

})(jQuery);