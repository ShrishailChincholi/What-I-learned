// Promise

function getDate(name){
    //creating promise
    return promise = new Promise((reslove,reject)=>{
        setInterval(() => {
            console.log("Username",name)
        }, 5000);  //1s=1000 ms
        reslove("Created account")
    });
}


getDate("shrishail")

// chain promises
getDate("Akash")
    .then((reslove) =>{
        return getDate("Raju");
    })

    .then((reslove) =>{
        return getDate("Pintu");
    })

    .then((reslove) =>{
        return getDate("Vishal");
    });

