 
   //------------Play Button
		var onOff = 0;
		var button = document.querySelector('.button');
		
		button.onclick = function () {
			if (onOff == 0) {
				this.style.background = "url (https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Pause-thin-rounded-button.svg/2000px-Pause-thin-rounded-button.svg.png)";
				counter = 1;
			}
			else if () {
				this.style.background = "url (https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Play-rounded-button-outline.svg/2000px-Play-rounded-button-outline.svg.png)";
				counter = 0;
			}
		};
		
		
		/*
			function playOrPauseSong() {
				
				
				
				if (onOff == 0) {
					audioElement2.src = songs[select];
				
					audioElement2.play();
				
					//Pic change
					document.getElementById("playpic").src="pause.png";
					onOff = 1;
				}
				else {
					
					audioElement2.pause();     			  
					//Pic change
					document.getElementById("playpic").src="play.png";
					onOff = 0;
				}
			}*/