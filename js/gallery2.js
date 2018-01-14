(function($) {

$(document).ready(function() {
        var gallery = new $.ThumbnailGallery($('#gallery'), {
                thumbImages: 'img/thumbs/thumb',
                smallImages: 'img/small/image',
                largeImages: 'img/large/image',
                count: 10,
                thumbImageType: 'jpg',
                imageType: 'jpg',
                breakpoint: 300,
                shadowStrength: 1
            });
});
      })(jQuery);