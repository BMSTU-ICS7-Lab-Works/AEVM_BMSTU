function checkError(deepness, myObj)
{
    try{
        console.log(JSON.stringify(myObj));
    }catch(err){
        console.log("Error");
        console.log("Max deepness is", deepness);
    }
}

let o1 = {deep: 0, child: null}

for(let i = 0;;i++)
{
    try{
        const obj = {deep: i, child: o1}
        JSON.stringify(obj)
        o1 = obj
    } catch (e) {
        console.log("Max level of deepness");
        console.log(i);
        break;
    }
}