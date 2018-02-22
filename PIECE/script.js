// resizing

var isResizing = false,
    lastDownX = 0;

$(function () {
    var container = $('#container'),
        left = $('#spanish'),
        right = $('#english'),
        handle = $('#drag');

    handle.on('mousedown', function (e) {
        isResizing = true;
        lastDownX = e.clientX;
    });

    $(document).on('mousemove', function (e) {
        // we don't want to do anything if we aren't resizing.
        if (!isResizing) 
            return;
        
        var offsetRight = container.width() - (e.clientX - container.offset().left);

        left.css('right', offsetRight);
        right.css('width', offsetRight);
    }).on('mouseup', function (e) {
        // stop resizing
        isResizing = false;
    });
});



// scrolling


window.onload = function(){

    var isSyncingLeftScroll = false;
    var isSyncingRightScroll = false;
    var leftDiv = document.getElementById('spanish_under');
    var rightDiv = document.getElementById('english');

    leftDiv.onscroll = function() {
        if (!isSyncingLeftScroll) {
        isSyncingRightScroll = true;
        rightDiv.scrollTop = this.scrollTop;
      }
      isSyncingLeftScroll = false;
    }

    rightDiv.onscroll = function() {
        if (!isSyncingRightScroll) {
        isSyncingLeftScroll = true;
        leftDiv.scrollTop = this.scrollTop;
      }
      isSyncingRightScroll = false;
    }
};