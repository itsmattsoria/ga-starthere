
var Main = (function ($) {
	return {
		myFunction: function () {

			function displayMessage() {
	      var message = "Don't freak out, but this is javascript!";

	      alert(message);
	    }

      setTimeout(displayMessage, 500);
		},
		initMain: function () {
			$(document).ready(function () {
				// Main.myFunction();
			})
		}
	};
// Pass in jQuery.
})(jQuery);

Main.initMain();