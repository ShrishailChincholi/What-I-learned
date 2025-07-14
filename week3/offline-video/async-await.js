// creating a promise
function app(){
    return promise = new Promise((reslove,reject)=>{
        setInterval(() => {
            console.log("the data")
        }, 3000);  //1s=1000 ms
    });
}

// using aync-awati
async function result() {
    await app();
}