"use strict"
function searchAnnagram()
{
    
}

function aclean(arr)
{
    let letter, annagram;
    for(let i = 0; i<arr.length;i++)
    {
        arr[i].toLowerCase();
        for(let j = i + 1; j > i;i++)
        {
            if(arr[i].length == arr[j].length)
            {
                
            }
        }
    }
    alert(arr);
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) ); 