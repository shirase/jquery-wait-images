(function($) {
    $.fn.waitImages = function(callback) {
        if(!callback) return false;
        var imgs = this.find('img[src][src!=""]');
        var loadcounter = 0;
        var waitcount = 0;
        imgs.each(function() {
            var img = new Image();
            img.src = this.src;
            if(!img.complete) {
                img = new Image();
                waitcount++;
                $(img).one('load error', function() {
                    loadcounter++;
                    if(loadcounter==waitcount) {
                        callback();
                    }
                });
                img.src = this.src;
            }
        });
        if(!waitcount) callback();
    }
})(jQuery);