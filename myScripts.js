// JavaScript Document
var clickCount = 0;
var clickCountC = 0;
var clickCountA = 0;
var clickCountE = 0;

		function playG(){
			//var gAudio = new Audio("audio/cNote.wav");
			var gAudio = document.getElementById("gnote");
			var gBackground = document.getElementById("g");
			
			console.log("entering the function, clickCount is " + clickCount);
			
			if (clickCount == 0){
				gBackground.style.backgroundColor = "#F44336";
				gAudio.play();
				clickCount++;
				console.log("audio playing, clickCount is " + clickCount);
			}
			else if (clickCount == 1){
				gAudio.pause();
				gBackground.style.backgroundColor = "#2196F3";
				console.log("should be stopping it now " + clickCount);
				clickCount = 0;		
				console.log("Audio should be stopped " + clickCount);	
			}
			
		}
		function playC(){
			var cAudio = document.getElementById("cnote");
			var cBackground = document.getElementById("c");
	
			if (clickCountC == 0){
				cBackground.style.backgroundColor = "#F44336";
				cAudio.play();
				clickCountC++;
			}
			else if (clickCountC == 1){
				cAudio.pause();
				cBackground.style.backgroundColor = "#2196F3";
				clickCountC = 0;		
			}
		}
	
		function playA(){
			var aAudio = document.getElementById("anote");
			var aBackground = document.getElementById("a");
			
			if (clickCountA == 0){
				aBackground.style.backgroundColor = "#F44336";
				aAudio.play();
				clickCountA++;
			}
			else if (clickCountA == 1){
				aAudio.pause();
				aBackground.style.backgroundColor = "#2196F3";
				clickCountA = 0;		
			}
		}
		function playE(){
			var eAudio = document.getElementById("enote");
			var eBackground = document.getElementById("e");
			
			if (clickCountE == 0){
				eBackground.style.backgroundColor = "#F44336";
				eAudio.play();
				clickCountE++;
			}
			else if (clickCountE == 1){
				eAudio.pause();
				eBackground.style.backgroundColor = "#2196F3";
				clickCountE = 0;		
			}
		}