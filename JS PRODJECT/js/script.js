"use strict"
function searchAnnagram(letter, annagram)
{
    let coinsidence;
    if(letter.length != annagram.length) return false;
    else
    {
        for(let i = 0; i<arr.length;i++)
        {
            for(let j = 0; j < annagram.length;i++)
            { 
               if(letter.substr(i,1) == annagram.substr(j,1)) coinsidence++;
            }
        }
        if(coinsidence == letter.length) return true;
    }
}

function aclean(arr)
{
    for(let i = 0; i < arr.length;i++)
    {
        arr[i].toLowerCase();
        for(let j = i + 1; j < arr.length;i++)
        {
            arr[j].toLowerCase();
            if(searchAnnagram(arr[i],arr[j])) arr.splice(j,1); 
        }
    } 
    alert(arr);
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) ); 