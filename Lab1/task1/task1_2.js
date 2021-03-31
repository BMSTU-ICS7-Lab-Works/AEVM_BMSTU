var studentlist;

function READ(index)
{
    console.log("\n\tGroup: " + studentlist[index].group + "\n\tStudent card: "
        + studentlist[index].studcard + "\n\tMarks: " + studentlist[index].marks.join(', ') + "\n");
    return 0;
}

function averageMarks()
{
    let marksum;
    for (let i = 0; i < studentlist.length; i++)
    {
        marksum = studentlist[i].marks.reduce(function(sum, current) {return sum + current}, 0);
        console.log("Average mark of student at index " + i + " is: ", marksum / studentlist.length);
    }
    return 0;
}

function groupInfo(group)
{
    if (studentlist.length === 0)
    {
        console.log("StudentList is empty!");
        return -1;
    }
    let count = 1;
    for (let i = 0; i < studentlist.length; i++)
    {
        if (studentlist[i].group === group)
        {
            console.log("Student " + count + " at group " + group + " is");
            count++;
            READ(i);
        }
    }
    return 0;
}

function mostMarksAtGroup(group)
{
    if (studentlist.length === 0)
    {
        console.log("StudentList is empty!");
        return -1;
    }
    let marknum = -1;
    let studind;
    for (let i = 0; i < studentlist.length; i++)
    {
        if (studentlist[i].group === group)
        {
            if (marknum < studentlist[i].marks.length)
            {
                marknum = studentlist[i].marks.length;
                studind = i;
            }
        }
    }
    console.log("Student that has most marks in group " + group + " is");
    READ(studind);
    return studind;
}

function noMarks_student()
{
    console.log("Student(s) that does not have marks");
    for (let i = 0; i < studentlist.length; i++)
    {
        if (studentlist[i].marks.length === 0)
        {
            READ(i);
        }
    }
    return 0;
}


module.exports = {
    CREATE: function()
    {
        studentlist = [];
        return this;
    },

    READ: function(index)
    {
        console.log("\n\tGroup: " + studentlist[index].group + "\n\tStudent card: "
            + studentlist[index].studcard + "\n\tMarks: " + studentlist[index].marks.join(', ') + "\n");
        return this;
    },

    UPDATE: function(student)
    {
        if (studentlist.every(obj => obj.studcard !== student.studcard))
        {
            studentlist.push(student);
            console.log("Added student to studentlist!");
        }
        else
        {
            console.log("Student with this student card already exists!");
        }
        return this;
    },

    DELETE: function(index)
    {
        console.log("This student was deleted:");
        READ(index);
        studentlist.splice(index, 1);
        return this;
    },

    averageMarks: averageMarks,
    groupInfo: groupInfo,
    mostMarksAtGroup: mostMarksAtGroup,
    noMarks_student: noMarks_student
}

