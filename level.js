var gridSize = 64

function updateLevel()
{

}

function initLevel(name)
{
    fetch(name)
    .then(response => response.json())
    .then(function(level) {
        var canvas = document.getElementById("level")
        var context = canvas.getContext("2d")
        
        console.log(level)
        canvas.width = level.width * gridSize
        canvas.height = level.height * gridSize
        context.fillStyle = "black"
        context.fillRect(0, 0, canvas.width, canvas.height)

        for (i = 0; i < level.tiles.length; i++) {
            var tile = level.tiles[i]

            context.setTransform(1, 0, 0, 1, 0, 0);
            context.translate(tile.x * gridSize, tile.y * gridSize)
            context.rotate(tile.angle * Math.PI / 180)
            context.fillStyle = "white"
            context.fillRect(0, 0, tile.width * gridSize, tile.height * gridSize)
        }
    })
    .catch(() => console.log("Can't access " + name + " response"))
}