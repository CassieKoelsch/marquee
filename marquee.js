/**
  * Marquee JS
  *
  * @author Cassie Herd
  * @options
  *     pause: true,
  *     speed: 1,
  *     leftToRight: false
  *
  */
$(function() {
    $.fn.marquee = function ( options ) {

        var settings = $.extend({
            pause: true,
            speed: 1,
            leftToRight: false
        }, options );

        return this.each(function () {

             var Methods = {

                 // Start the automatic scrolling
                doScroll : function()
                {
                    var curX = scroller.scrollLeft();
                    var newX = curX + controller.curSpeed;
                    if (newX > fullW*2 - viewportW)
                        newX -= fullW;
                    else if (newX < 0)
                        newX += fullW;
                    scroller.scrollLeft(newX);
                },

                 //Set scrolling speed
                tweenToNewSpeed : function(newSpeed, duration)
                {
                    if (duration === undefined)
                        duration = 100;
                    $controller.stop(true).animate({curSpeed:newSpeed}, duration);
                },

                 //Pause on hover
                pauseHover : function () {
                    if (settings.pause) {
                        scroller.hover(function(){
                            Methods.tweenToNewSpeed(0);
                        }, function(){
                            if (settings.leftToRight){
                                Methods.tweenToNewSpeed(-(settings.speed));
                            }else {
                                Methods.tweenToNewSpeed(controller.fullSpeed);
                            }
                        });
                    }
                }
            }

            $(this).find('ul').wrap("<div class='innerScrollArea'></div>");
            var scroller = $('.innerScrollArea');
            var scrollerContent = scroller.children('ul');
            scrollerContent.children().clone().appendTo(scrollerContent);
            var curX = 0;
            scrollerContent.children().each(function(){
                var $this = $(this);
                $this.css('left', curX);
                curX += $this.outerWidth(true);
            });
            var fullW = curX / 2;
            var viewportW = scroller.width();

            var controller = {curSpeed:0, fullSpeed: settings.speed };
            var $controller = $(controller);

            Methods.pauseHover();

            setInterval(Methods.doScroll, 20);
            Methods.tweenToNewSpeed(controller.fullSpeed);

            if (settings.leftToRight) {
                Methods.tweenToNewSpeed(controller.curSpeed = -(settings.speed));
            }
        });
    }
}( jQuery ));

