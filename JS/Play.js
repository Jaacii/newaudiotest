 
   //------------Play Button
		var onOff = 0;
		var btn = document.querySelector('.playbtn');
	
				button.onclick = function () {/*function playOrPauseSong() {*/
				
				
				
				if (onOff == 0) {
					audioElement2.src = songs[select];
				
					audioElement2.play();
				
					//Pic change
					document.getElementById("playbtn").style.background ='url (https://svgsilh.com/svg_v2/27429.svg)';
					//document.getElementById("playbtn").src="pause.png";
					onOff = 1;
				}
				else {
					
					audioElement2.pause();     			  
					//Pic change
					document.getElementById("playbtn").style.background ='url (https://svgsilh.com/svg_v2/1718976.svg)';
					//document.getElementById("playbtn").src="play.png";
					onOff = 0;
				}
			}