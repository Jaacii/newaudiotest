//---------- Resonance Audio

		if (window.AudioPlayer !== undefined) {
		audioPlayer = new AudioPlayer()
		}
//


        var x = 0.0;
        var y = 0.0;
        var z = 0.0;

       
        let audioContext = new AudioContext();

        // first-order Ambisonic Resonance Audio scene 
        let resonanceAudioScene = new ResonanceAudio(audioContext);

        // Connect the scene’s binaural output to stereo out.
        resonanceAudioScene.output.connect(audioContext.destination);

		//Raum Größe und Material
        let roomDimensions = {
            width: 3.1,
            height: 2.5,
            depth: 3.4,
        };

       
			let roomMaterials = {
            
            left: 'metal',
            right: 'curtain-heavy',
            front: 'curtain-heavy',
            back: 'curtain-heavy',
            // Room floor
            down: 'grass',
            // Room ceiling
            up: 'grass',
        };

        
        resonanceAudioScene.setRoomProperties(roomDimensions, roomMaterials);
		
		
		//
		var songs = ["Cat.wav","bird.wav","wind.wav"];
 
        let audioElement2 = document.createElement('audio');
		
        audioElement2.loop = true;
        let audioElementSource2 = audioContext.createMediaElementSource(audioElement2);
        let source2 = resonanceAudioScene.createSource();
        audioElementSource2.connect(source2.input);
        source2.setPosition(x,y,z);
        
		//
		
		
		var m_gain = audioContext.createGain();
		m_gain.connect(audioContext.destination);
		audioContext.listener.setOrientation(0,0, -1,0,1,0);
		
		audioPlayer.load("Cat.wav");
		audioPlayer.load("bird.wav");
		audioPlayer.load("wind.wav");
		
		var sound1 = audioPlayer.create("Cat.wav");
		var sound2 = audioPlayer.create("bird.wav");
		var sound3 = audioPlayer.create("wind.wav");
		

