var delimchar = ['.', ';', ',', '?', '!']

class Dialbox
{
    constructor(canvasId, width, height, speed = 42)
    {
        this.canvas = document.getElementById(canvasId)
        this.canvas.width = width
        this.canvas.height = height
        this.context = this.canvas.getContext("2d")
        this.font = {
            title: "bold 24px Courier New",
            default: "normal 16px Courier New"
        }
        this.speed = speed
        this.name = ""
        this.text = ""
        this.n = 1
    }

    reset()
    {
        this.name = ""
        this.text = ""
        this.n = 1
    }

    setText(dialog)
    {
        this.name = dialog.name
        this.text = dialog.text
    }

    isDelimChar(char)
    {
        for (let i = 0; i < delimchar.length; i++) {
            if (char == delimchar[i])
                return true
        }

        return false
    }

    update(dt)
    {
        if (this.n <= this.text.length) {
            if (this.isDelimChar(this.text[Math.floor(this.n)]))
                this.n += dt * this.speed * (1 / 30)
            else
                this.n += dt * this.speed
        }
    }

    draw()
    {
        // Background
        this.context.fillStyle = "#424242"
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height)

        // Inner stroke
        this.context.lineWidth = 10
        this.context.strokeStyle = "#6E8E99";
        this.context.strokeRect(
            this.context.lineWidth / 2, this.context.lineWidth / 2,
            this.canvas.width - this.context.lineWidth, this.canvas.height - this.context.lineWidth)
        
        // Text
        this.context.fillStyle = "white"
        this.context.font = this.font.title
        this.context.fillText(this.name, this.canvas.width * 0.02, this.canvas.height * 0.2, this.canvas.width - 2 * 20)
        this.context.font = this.font.default
        this.context.fillText(this.text.slice(0, Math.ceil(this.n)), this.canvas.width * 0.02, this.canvas.height * 0.4, this.canvas.width - 2 * 20)
    }
}