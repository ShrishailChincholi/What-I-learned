
let btn = document.querySelector("button");



btn.addEventListener("click", getoutput);

function getoutput() {
    let input =  parseInt(document.querySelector(".Number").value);
    let select = document.querySelector("#select").value;
    let res = document.querySelector(".res");

    if (select === "Even-Odd") {
        evenodd(input,res);
       
    } else if (select === "Factorial") {
        let output = factorial(input);
            res.innerText = `Factorial of ${input} is ${output}`;
    } else if (select === "Fibonacies") {
        let output = fibonacci(input);
        res.innerText = `Fibonacci series (${input} terms): ${output.join(", ")}`;
    } else  if(select==="Prime"){

        let output = isPrime(input);
        res.innerText = `${input} is ${output ? "a Prime" : "not a Prime"} number`;
    }

}


function evenodd (input,res)  {
    if (input % 2 === 0) {
        res.innerHTML = `Even number: ${input}`;
        // alert("Even number");
    } else {
        // alert("Odd number");
 res.innerHTML = `odd number: ${input}`;
    }
}


function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

function fibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, n);
}

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}