var dotList;

function READ(index)
{
    console.log("\n\tName: " + dotList[index].name + "\n\tX: "
        + dotList[index].x + "\n\tY: " + dotList[index].y + "\n");
    return 0;
}

function getDistance(dot1, dot2)
{
    return Math.pow(dot1.x - dot2.x, 2) + Math.pow(dot1.y - dot2.y, 2);
}

function LargestDistance()
{

    if (dotList.length < 2)
    {
        console.log("There are less than 2 dots in dotList");
        return -1;
    }

    let largestlen = 0;
    let ind1 = 0, ind2 = 1;

    for (let i = 0; i < dotList.length; i++)
    {
        for (let j = i + 1; j < dotList.length; j++)
        {
            let curlen = getDistance(dotList[i], dotList[j]);
            if (curlen > largestlen)
            {
                largestlen = curlen;
                ind1 = i;
                ind2 = j;
            }
        }
    }
    largestlen = Math.sqrt(largestlen);
    console.log('Largest len is between these dots and equals ', largestlen);
    READ(ind1);
    READ(ind2);
    return largestlen;
}

function dots_inrange(dot, rad)
{
    console.log("Dot(s) located from a given point at a distance not exceeding a given constant");
    for (let i = 0; i < dotList.length; i++)
    {
        if (getDistance(dotList[i], dot) <= rad)
            READ(i);
    }

    return 0;
}

function fieldDots(dot, part)
{
    switch (part) {
        case 'right':
            console.log("Dot(s) that are right then a given dot");
            for (let i = 0; i < dotList.length; i ++)
            {
                if (dotList[i].x > dot.x)
                    READ(i);
            }
            break;
        case 'left':
            console.log("Dot(s) that are left then a given dot");
            for (let i = 0; i < dotList.length; i ++)
            {
                if (dotList[i].x < dot.x)
                    READ(i);
            }
            break;
        case 'higher':
            console.log("Dot(s) that are higher then a given dot");
            for (let i = 0; i < dotList.length; i ++)
            {
                if (dotList[i].y > dot.y)
                    READ(i);
            }
            break;
        case 'below':
            console.log("Dot(s) that are below then a given dot");
            for (let i = 0; i < dotList.length; i ++)
            {
                if (dotList[i].y < dot.y)
                    READ(i);
            }
            break;
    }
}

function Areadots(dot1, dot2)
{
    console.log("Dot(s) that are situated in a given rectangle");
    for (let i = 0; i < dotList.length; i++)
    {
        if (Math.min(dot1.x, dot2.x) < dotList[i].x < Math.max(dot1.x, dot2.x)
            && Math.min(dot1.y, dot2.y) < dotList[i].y < Math.max(dot1.y, dot2.y))
        {
            READ(i);
        }
    }
    return 0;
}


module.exports = {
    CREATE: function()
    {
        dotList = [];
        return this;
    },

    READ: function(index)
    {
        console.log("\n\tName: " + dotList[index].name + "\n\tX: "
            + dotList[index].x + "\n\tY: " + dotList[index].y + "\n");
        return this;
    },

    UPDATE: function(dot)
    {
        if (dotList.every(obj => obj.name !== dot.name))
        {
            dotList.push(dot);
            console.log("Added dot to dotList!");
        }
        else
        {
            console.log("Dot with this name already exists!");
        }
        return this;
    },

    DELETE: function(index)
    {
        console.log("This dot was deleted:");
        READ(index);
        dotList.splice(index, 1);
        return this;
    },

    LargestDistance: LargestDistance,
    dots_inrange: dots_inrange,
    fieldDots: fieldDots,
    Areadots: Areadots
}

