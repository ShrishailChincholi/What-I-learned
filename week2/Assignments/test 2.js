//  Fibonacci series

const  Fibonacciseries=(n) =>{
    let a =0;
    let b =1;

    for(i=2; i<=n; i++){
        let next= a+b;
        a = b;
        b = next;
        
    }
}

console.log(Fibonacciseries(10));  // first 10  Fibonacci series
