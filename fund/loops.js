const prompt = require("prompt-sync")();

function fill_array_and_print_it() 
{
    let n = Number(prompt("Enter the number of elements: "));
    let arr = [];

    for (let i = 0; i < n; i++) 
        arr[i] = Number(prompt(`arr[${i}] = `));
    

    console.log("\nArray Elements:");
    for (let i = 0; i < n; i++) 
    {
        if (arr[i] === 42)
            continue ;
        console.log(arr[i]);
    }

    
}

fill_array_and_print_it();
