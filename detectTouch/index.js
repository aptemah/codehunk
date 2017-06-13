var $body = $('body');
var detectMouse = function(e){
	if (e.type === 'mousedown') {
		alert('Mouse interaction!');
	}
	else if (e.type === 'touchstart') {
		alert('Touch interaction!');
	}
	// remove event bindings, so it only runs once
	$body.off('mousedown touchstart', detectMouse);
}
// attach both events to body
$body.on('mousedown touchstart', detectMouse);