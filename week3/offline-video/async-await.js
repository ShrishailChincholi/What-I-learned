// creating a promise
function app(id){
    return promise = new Promise((reslove,reject)=>{
        setInterval(() => {
            console.log("the data",id)
        }, 3000);  //1s=1000 ms
    });
}

// using aync-awati
async function result() {
    await app(1);
}

console.log(result);

// we can call funcation immediately using IIFE-(Immediately Invoked Funcation)
(async function result() {
    await app(2);
}) ();


