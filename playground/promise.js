var somePromise = new Promise((resolve, reject)=>{
	
	setTimeout(()=>{
		resolve("Hey this promise worked and is being returned  in a way similar to a callback")
		reject("unable to fufill promise");
	},2500);
});


// 2 functions for promises opposed to 1 for callbacks
//formt promise.then((resolvemsg)=>{},(rejectmsg)=.{})
somePromise.then((message)=>{
		console.log("success:" , message);}
,(errorMessage)=>{
	console.log("Error:", errorMessage);
});


