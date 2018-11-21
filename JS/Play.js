 
   //------------Play Button
		var onOff = 0;
		
			function playOrPauseSong() {
				
				
				
				if (onOff == 0) {
					audioElement2.src = songs[select];
				
					audioElement2.play();
				
					//Pic change
					document.getElementById("playpic").src="../pause.png";
					onOff = 1;
				}
				else {
					
					audioElement2.pause();     			  
					//Pic change
					document.getElementById("playpic").src="../play.png";
					onOff = 0;
				}
			}