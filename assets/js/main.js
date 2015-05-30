
var Main = (function ($) {
	return {
		myFunction: function () {
      console.log('Testing, testing...is this thing on?');
		},
		initMain: function () {
			$(document).ready(function () {
				Main.myFunction();
			})
		}
	};
// Pass in jQuery.
})(jQuery);

Main.initMain();