let linemodule = require("./task2_1.js");

class Triangle
{
    constructor(line1, line2, line3)
    {
        this.line1 = line1;
        this.line2 = line2;
        this.line3 = line3;
    }

    isValid()
    {
        let a = this.line1.Length;
        let b = this.line2.Length;
        let c = this.line3.Length;

        if (a + b > c && a + c > b && b + c > a)
        {
            console.log("Triangle exists!");
            return true;
        }
        else
            console.log("Triangle not exists!");
        return false;
    }

    get getPerimeter()
    {
        return this.line1.Length + this.line2.Length + this.line3.Length;
    }

    get getSquare()
    {
        let p = this.getPerimeter;
        let a = this.line1.Length;
        let b = this.line2.Length;
        let c = this.line3.Length;
        return Math.sqrt(p * (p - a) * (p - b) * (p - c));
    }

    __checkRight(cat1, cat2, hyp)
    {
        let eps = 1e-10;
        return (cat1 ** 2 + cat2 ** 2 - hyp ** 2) <= eps;
    }

    isRight()
    {
        let a = this.line1.Length;
        let b = this.line2.Length;
        let c = this.line3.Length;

        if (this.__checkRight(a, b, c) || this.__checkRight(a, c, b) || this.__checkRight(b, c, a))
        {
            console.log("Triangle is right!");
            return true;
        }
        else
        {
            console.log("Triangle is not right!");
            return true;
        }
    }
}

module.exports = {
    Triangle:Triangle
}