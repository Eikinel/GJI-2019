var gridSize = 64

function initLevel(name, canvas, gl)
{
    console.log("On initLevel")
    fetch(name)
    .then(response => response.json())
    .then(function(level) {
        canvas.width = level.width * gridSize
        canvas.height = level.height * gridSize

        /*for (i = 0; i < level.tiles.length; i++) {
            let tile = level.tiles[i]

            gl.translate(tile.x * gridSize, tile.y * gridSize)
            gl.rotate(tile.angle * Math.PI / 180)
            //gl.fillStyle = "white"
        }*/
    })
}