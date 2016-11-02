(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function($){


    $.fn.popup = function (e, intWidth, intHeight, blnResize) {

        // Prevent default anchor event
        e.preventDefault();

        // Set values for window
        var intWidth = intWidth || '500';
        var intHeight = intHeight || '400';
        var strResize = (blnResize ? 'yes' : 'no');

        // Set title and open popup with focus on it
        var strTitle = ((typeof this.attr('title') !== 'undefined') ? this.attr('title') : 'Social Share');
        var strParam = 'width=' + intWidth + ',height=' + intHeight + ',resizable=' + strResize;
        window.open(this.attr('href'), strTitle, strParam).focus();

    };

    $(document).ready(function ($) {
        $('.share').on("click", function(e) {
            $(this).popup(e);
        });
    });


}(jQuery));

$( document ).ready(function() {

    var video = document.getElementById('video');
    var buttonPlay = document.getElementById('button-play');
    var arrowDown = document.getElementById('places-video-arrow');

    if (video) {
        buttonPlay.addEventListener('click', function() {
            video.play();
            buttonPlay.style.display = 'none';
            arrowDown.style.display = 'none';
            video.setAttribute("controls","controls")
        }, false);
    }
    
    
    // active flowplayer video
    if ($(".video-container").length > 0){
    	var video_container = $(".video-container");
    	
	    var video_id = video_container.attr("id");	    				
		if (video_id){			
			var player_api = initFlowplayer(video_id);			
		}
		
		//video_container.css("background-size", "cover");

	}	

    //window.onload = function() {
    //
    //    // Get the Object by ID
    //    var a = document.getElementById("svg-map");
    //    // Get the SVG document inside the Object tag
    //    var svgDoc = a.contentDocument;
    //    // Get one of the SVG items by ID;
    //    var calais = svgDoc.getElementById("calais_group");
    //    var fiumicino = svgDoc.getElementById("fiumicino_group");
    //    var mediterraneo = svgDoc.getElementById("mediterraneo_group");
    //    var bulgaria = svgDoc.getElementById("bulgaria_group");
    //    var turchia = svgDoc.getElementById("turchia_group");
    //    var libano = svgDoc.getElementById("libano_group");
    //    var melilla = svgDoc.getElementById("melilla_group");
    //
    //    // Set the colour to something else
    //    calaisSVG.setAttribute("display", "none");
    //    fiumicino.setAttribute("display", "none");
    //    mediterraneo.setAttribute("display", "none");
    //    bulgaria.setAttribute("display", "none");
    //    turchia.setAttribute("display", "none");
    //    libano.setAttribute("display", "none");
    //    melilla.setAttribute("display", "none");
    //
    //    console.log('calais', calaisSVG);
    //
    //};
    //
    //
    //$(window).on('scroll', function(){
    //
    //    console.log('calais scroll', calaisSVG);
    //
    //    var Wscroll = $(this).scrollTop();
    //    $('div').each(function(){
    //        var ThisOffset = $(this).closest('div').offset();
    //        if(Wscroll > ThisOffset.top &&  Wscroll < ThisOffset.top  + $(this).closest('div').outerHeight(true)){
    //            var currentId = $(this).attr('id');
    //            if (currentId) {
    //                console.log('currentId', calais);
    //                calais.setAttribute("opacity", "100%");
    //            } else {
    //                return;
    //            }
    //        }
    //    });
    //});

});


},{}]},{},[1])