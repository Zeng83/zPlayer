;(function($){
	

	$.fn.zplayer = function(options){
		var setting = $.extend({},$.fn.zplayer.defaults,options);

		return this.each(function(){
			var $zVideo = $(this);

			var $video_wrap = $('<div></div>').addClass('videoContainer');

			var $video_controls = $('<div class="video-controls"><div class="video-seek"></div><a class="video-play" title="Play/Pause"></a><div class="video-timer">00:00</div><div class="volume-box"><div class="volume-slider"></div><a class="volume-button" title="Mute/Unmute"></a></div></div>');

			$zVideo.wrap($video_wrap);
			$zVideo.after($video_controls);

			//get newly created elements
			var $video_container = $zVideo.parent('.videoContainer');
			var $video_controls = $('.video-controls', $video_container);
			var $play_btn = $('.video-play', $video_container);
			var $video_seek = $('.video-seek', $video_container);
			var $video_timer = $('.video-timer', $video_container);
			var $volume = $('.volume-slider', $video_container);
			var $volume_btn = $('.volume-button', $video_container);

			// $video_controls.hide(); // keep the controls hidden
		});

	};

	$.fn.zplayer.defaults = {

	};
	
})(jQuery);