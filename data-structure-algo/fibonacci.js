
// Find nth fibonacci number
const printFibonacciNumber = (n) => {
    if (n <= 1) return n;
    return printFibonacciNumber(n - 1) + printFibonacciNumber(n - 2);
}


//Print n fibonacci numbers
const printFibonacciSeries = (n) => {
    let count = n-2;
    let t1 = 0, t2 = 1, temp = 0;
    const data = [t1, t2];
    while (count != 0){
        data.push(t1 + t2);
        temp = t1;
        t1 = t2;
        t2 = temp + t2;
        count--;
    }

    return data;
}

const dt1 = printFibonacciNumber(5);
const dt2 = printFibonacciSeries(5);
console.log(dt2)
