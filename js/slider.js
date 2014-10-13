/**
 * Created by fkhanzada on 9/25/2014.
 */
(function($){
    var sliderUL = $('.slider').css('overflow', 'hidden').children('ul'),
        imgs = sliderUL.find('img'),
        imgLen = imgs.length,
        imgWidth = imgs[0].width,
        totalImgWidth = imgLen * imgWidth,
        current = 1,
        controller = $('.controller'),
        loc = 0;


        sliderUL.css('width', totalImgWidth);
        //console.log(totalImgWidth);

        controller.show().find('button').on('click', function(){
            var direction = $(this).data('dir'),
                loc = imgWidth;
            (direction === 'next') ? ++current : --current;
            if(current == 0){
                current = imgLen;
                direction = 'next';
                loc = totalImgWidth - imgWidth;
            }else if( current - 1 == imgLen){
                current = 1;
                loc = 0;
            }
            console.log(current);
            transition(sliderUL, loc, direction);
        });

        function transition(container, loc, direction){
            var unit;
            if(direction && loc !== 0){
                unit = (direction === 'next') ? '-=' : '+=';
            }
            container.animate({
               'margin-left' : unit ? (unit + loc) : loc
            });
        }

})(jQuery);