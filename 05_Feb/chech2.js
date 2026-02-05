function myFunction() {
    console.log("starting a task....");
    setTimeout(() => {
        let sum = 0;
        for (let i = 0; i < 1000000000; i++) {
            sum += i;
        }
        console.log("task finished!");
        console.log("result",sum);
    },0);



}
console.log("before the function call");
let result = myFunction();
console.log("after the funtion call");
console.log("result", result);