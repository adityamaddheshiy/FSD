function myFunction(){
    console.log("starting a task....");
    let sum = 0;
    for(let i=0; i<1000000000; i++){
        sum += i;
    }
    console.log("task finished!");
    return sum;

}
console.log("before the function call");
let result = myFunction();
console.log("after the funtion call");
console.log("result",result);