$(document).ready(function(){
	'use strict';

	/* 세로 롤링 배너 */
	/* 1개씩 */
	function verticalBanner() {
		function sliding(){ 
			var height = $('.vertical_list').height();	
			$('.vertical_list ul').stop().animate({'marginTop':'-='+height+'px'},'fast','linear',
						function(){$('.vertical_list li:first').appendTo('.vertical_list ul');
								   $('.vertical_list ul').css('marginTop','-'+height+'px');
			});
		}
		setInterval( sliding, 5000 );
	}
	/* 2개씩 */
	function verticalBanner_multi() {
		function sliding(){ 
			var height = $('.vertical_list li').outerHeight();	
			$('.vertical_list ul').stop().animate({'marginTop':'-='+height+'px'},'fast','linear',function(){
				if ( window.outerWidth > 800) {	 /* 800이상일때 2개  롤링*/	
					$('.vertical_list li:first-child, .vertical_list li:nth-child(2)').appendTo('.vertical_list ul');
				}else{ /* 800이하일때 1개씩 롤링 */
					$('.vertical_list li:first-child').appendTo('.vertical_list ul');
				}
				$('.vertical_list ul').css('marginTop','-'+height+'px');
				$('.vertical_list ul').css('marginTop','0px');
			});
		}
		setInterval( sliding, 3000 );
	}

});




