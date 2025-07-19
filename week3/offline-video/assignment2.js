function wait(result) {
    return new Promise(resolve => setTimeout(resolve, result));
}

async function calculateSquare(number) {
    console.log(` Calculating square of ${number}...`);
    await wait(1000);
    const result = number * number;
    console.log(`result: ${result}`);
}

calculateSquare(17); 
