# Marquee JS
Marquee is a plugin that will create a scrolling marquee of images.  It will accept 3 options: pause, speed, and leftToRight.  Details and examples of each option are below.


## Pause
By default, the scrolling will pause on hover.  You can change the value to false to turn this off.

Example usage:

    $('#scroller').marquee({
            pause: false
        });

## Speed
By default, the speed of the scroller is set to 1.  You can change the speed of the scroller by passing in a new value.

Example usage:

        $('#scroller').marquee({
            speed: 4
        });


## Left to Right
By defalut, the scroller will scroll from right to left.  If you'd like to change the direction of the scrolling you can set leftToRight to true.

Example usage:

        $('#scroller').marquee({
            leftToRight: true
        });

