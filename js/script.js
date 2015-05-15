$(document).ready(function() {

	// NOTE: Javascript executes each line of code one by one.
	//       This means that an audio clip will not play until
	//       a previous sound is finished playing. So make sure
	//       your sound files are properly trimmed with no
	//       unnecessary silences at the end.

	// creates a variable that is linked to a sound file
	var audio1 = document.createElement('audio');
        audio1.setAttribute('src', 'sounds/home.wav');

    // the variable "audio1" will play its assigned sound when div is clicked
	$('#sound').click(function() {
		audio1.play();
	});

});