var timeSpent = 0;
var gl;
var dialbox;
var dialogs;

function render() {
    timeSpent += 1.0 / 60.0;
	gl.clearColor(0, 0, 0, 1);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    // Update
    dialbox.update(1 / 60)

    // Draw
    dialbox.draw()
}

function renderLoop() {
	render();
	window.setTimeout(renderLoop, 1000 / 60);
}

function initWebGL(canvas) {
	gl = canvas.getContext("webgl");
	if (!gl) {
		alert("Unable to initialize WebGL. Your browser may not support it.");
	}
}

function initWindow() {
    var canvas = document.getElementById("level")

    console.log(canvas)
    initWebGL(canvas);
    initLevel("level_sample.json", canvas, canvas.getContext("2d"))
    fetch("dialogs.json")
    .then(response => response.json())
    .then(function(owo) {
        dialogs = owo
        dialbox = new Dialbox("dialbox", canvas.width, canvas.height / 3)
        dialbox.setText(dialogs.shards[0].dialog[0])

        if (gl) {
            gl.clearDepth(1.0);
            gl.enable(gl.DEPTH_TEST);
            gl.depthFunc(gl.LEQUAL);
            renderLoop();
        }
    })
}