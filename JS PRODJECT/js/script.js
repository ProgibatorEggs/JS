"use strict"
function searchAnnagram(mapLetter,arr)
{
    let setLetter = new Set(mapLetter);
    let rememberSizeSetLetter = setLetter.size;
    for(let i = 0;i < arr.length;i++)
    {
        setLetter.add(arr[i]);
        if(setLetter.size > rememberSizeSetLetter)
        {
            setLetter.clear();
            return false;
        } 
        else return true;
    }
}

function aclean(arr)
{
    let setLetter = new Map();
    for(let i = 0;i < arr.length;i++)
    {
        for(let j = 0;j < arr[i].length;j++)
        {
            setLetter.add(arr[i][j].toLowerCase());
          
        }
        if(searchAnnagram(setLetter,arr[i + 1])) 
        {
            arr.splice(j,1);
            j--;
        }  
    }
    return arr;
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) ); 