//Volume Slider

	var  volumeslider;
	
	
		volumeslider = document.getElementById("volumeslider");
		volumeslider.addEventListener("mousemove", setvolume);
		
		
		
	function setvolume(){
	    audioElement2.volume = volumeslider.value / 100;
		}
