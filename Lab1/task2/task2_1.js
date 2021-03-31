class Dot
{
    constructor(x, y)
    {
        this.x = x;
        this.y = y;
    }

    showDotFields()
    {
        console.log("Field X: " + this.x);
        console.log("Field Y: " + this.y);
    }
}

class Section
{
    constructor(dot1, dot2)
    {
        this.dot1 = dot1;
        this.dot2 = dot2;
    }

    showSectFields()
    {
        console.log("First dot fields are:")
        this.dot1.showDotFields()
        console.log("Second dot fields are:")
        this.dot2.showDotFields()
    }

    get Length()
    {
        return Math.sqrt((this.dot1.x - this.dot2.x) ** 2 + (this.dot1.y - this.dot2.y) ** 2)
    }
}

module.exports = {
    Dot:Dot,
    Section:Section
}