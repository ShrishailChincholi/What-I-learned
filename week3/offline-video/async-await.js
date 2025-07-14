// creating a promise
function app(id){
    return promise = new Promise((reslove,reject)=>{
        setInterval(() => {
            console.log("the data",id)
        }, 3000);  //1s=1000 ms
        reslove("Done")
    });
}

// using aync-awati
async function result() {
    console.log("Geting Data 1....")
    await app(1);
    console.log("Geting Data 2....")
    await app(2);
    console.log("Geting Data 3....")
    await app(3);
}

console.log(result);

// we can call funcation immediately using IIFE-(Immediately Invoked Funcation)
(async function result() {
    console.log("Geting Data 1....")
    await app(1);
    console.log("Geting Data 2....")
    await app(2);
    console.log("Geting Data 3....")
    await app(3);
}) ();


