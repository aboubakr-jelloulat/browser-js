
function conditions()
{
    const name = process.argv[2];
    const age = Number(process.argv[3]);

    if (age <= 18)
    {
        console.log(name, " is accepted!!");
    }
    else
    {
            console.log(name, "refused!!!");
    }

    console.log(name === "sbos" ? "this is a sbos run his own fucking language" : "this is ajelloul");

}


conditions();
