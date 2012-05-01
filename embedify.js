$(document).ready(function(){
    $.fn.embedify = function(options) {
        var attr = options["attr"] || "href";
        return this.each(function() {
            var url = $(this).attr(attr);
            if( url.match(/youtube/) || url.match("youtu.be")){
                var id;
                if( url.match(/youtube/)){
                    id = url.match(/watch\?v=([\w\-]+)/);
                }else{
                    id = url.match(/youtu.be\/([\w\-]+)/);
                }
                var height = $(this).attr("height") || options["height"];
                var width = $(this).attr("width") || options["width"];
                var frame='<iframe width="'+width+'" height="'+height+'" src="http://www.youtube.com/embed/'+id[1]+'" frameborder="0" allowfullscreen></iframe>';
                $(this).replaceWith(frame);
            }
        });
    }
});

