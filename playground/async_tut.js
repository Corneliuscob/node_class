console.log("Strating app");

setTimeout(() => { console.log("inside of callback")},2000);

console.log("this is the first statement");

setTimeout(() => {console.log("Second time out "),0 })

console.log("Finishing up");
