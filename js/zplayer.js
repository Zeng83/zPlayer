;(function($){
	

	$.fn.zplayer = function(options){
		var options = $.extend($.fn.zplayer.defaults,options);

		return this.each(function(){
			var $zVideo = $(this);

			var $video_wrap = $('<div></div>').addClass('videoContainer');

			var $video_controls = $('<div class="ghinda-video-controls"><div class="ghinda-video-seek"></div><a class="ghinda-video-play" title="Play/Pause"></a><div class="ghinda-video-timer">00:00</div><div class="ghinda-volume-box"><div class="ghinda-volume-slider"></div><a class="ghinda-volume-button" title="Mute/Unmute"></a></div></div>');

			$zVideo.wrap($video_wrap);
			$zVideo.after($video_controls);

			//get newly created elements
			var $video_container = $zVideo.parent('.videoContainer');
			var $video_controls = $('.ghinda-video-controls', $video_container);
			var $ghinda_play_btn = $('.ghinda-video-play', $video_container);
			var $ghinda_video_seek = $('.ghinda-video-seek', $video_container);
			var $ghinda_video_timer = $('.ghinda-video-timer', $video_container);
			var $ghinda_volume = $('.ghinda-volume-slider', $video_container);
			var $ghinda_volume_btn = $('.ghinda-volume-button', $video_container);

			$video_controls.hide(); // keep the controls hidden
		});

	};

	$.fn.zplayer.defaults = {

	};
	
})(jQuery);