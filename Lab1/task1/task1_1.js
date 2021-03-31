var childlist;

function READ(index)
{
    console.log("\n\tSurname: " + childlist[index].surname + "\n\tAge: " + childlist[index].age + "\n");
    return 0;
}

function averageAge()
{
    let agesum;
    agesum = childlist.reduce(function (acc, obj) { return acc + obj.age;}, 0);
    console.log("Average age is: ", agesum / childlist.length);
    return agesum / childlist.length;
}

function Olderchild_info()
{
    let age = -1;
    let index_oldest;
    if (childlist.length === 0)
    {
        console.log("Childlist is empty!");
        return;
    }
    for (let i = 0; i < childlist.length; i++)
    {
        if (childlist[i].age > age)
        {
            age = childlist[i].age;
            index_oldest = i;
        }
    }
    console.log("Oldest child info:");
    READ(index_oldest);
    return index_oldest;
}

function childinfo_between(lend, rend)
{
    if (-1 < lend < childlist.length && -1 < rend < childlist.length && lend <= rend)
    {
        for (let i = lend; i <= rend; i++)
        {
            console.log("Child at index " + i);
            READ(i);
        }
        return 0;
    }
    else
    {
        console.log("Left or right end of interval is incorrect");
        return -1;
    }
}

function childinfo_surnameAt(letter)
{
    console.log("Child(s) wich surname starts at " + letter);
    for (let i = 0; i < childlist.length; i++)
    {
        if (childlist[i].surname.startsWith(letter) === true)
        {
            READ(i);
        }
    }
    return 0;
}

function childinfo_surnameLongerThan(cap)
{
    console.log("Child(s) wich surname longer than " + cap);
    for (let i = 0; i < childlist.length; i++)
    {
        if (childlist[i].surname.length > cap)
        {
            READ(i);
        }
    }
    return 0;
}

function childinfo_surnameStartsAtVowel(vowel)
{
    let vowels = ['A', 'E', 'O', 'U', 'I', 'Y', 'А', 'О', 'Э', 'И', 'У', 'Ы', 'Е', 'Ё', 'Ю', 'Я'];
    if (vowels.includes(vowel) === true)
    {
        console.log("Child(s) wich surname starts at vowel " + vowel);
        for (let i = 0; i < childlist.length; i++)
        {
            if (childlist[i].surname.startsWith(vowel) === true)
            {
                READ(i);
            }
        }
    }
    else
    {
        console.log("Argument is not a vowel!");
        return -1;
    }
    return 0;
}

module.exports = {
    CREATE: function()
    {
        childlist = [];
        return this;
    },

    READ: function(index)
    {
        console.log("\n\tSurname: " + childlist[index].surname + "\n\tAge: " + childlist[index].age + "\n");
        return this;
    },

    UPDATE: function(child)
    {
        if (childlist.every(obj => obj.surname !== child.surname))
        {
            childlist.push(child);
            console.log("Added child to childlist!");
        }
        else
        {
            console.log("Child with this name already exists!");
        }
        return this;
    },

    DELETE: function(index)
    {
        console.log("This child was deleted:");
        console.log("\n\tSurname: " + childlist[index].surname + "\n\tAge: " + childlist[index].age);
        childlist.splice(index, 1);
        return this;
    },

    averageAge: averageAge,
    Olderchild_info: Olderchild_info,
    childinfo_between: childinfo_between,
    childinfo_surnameAt: childinfo_surnameAt,
    childinfo_surnameLongerThan: childinfo_surnameLongerThan,
    childinfo_surnameStartsAtVowel: childinfo_surnameStartsAtVowel
}

