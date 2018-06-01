// var somePromise = new Promise((resolve, reject)=>{
	
// 	setTimeout(()=>{
// 		resolve("Hey this promise worked and is being returned  in a way similar to a callback")
// 		reject("unable to fufill promise");
// 	},2500);
// });


// 2 functions for promises opposed to 1 for callbacks
//formt promise.then((resolvemsg)=>{},(rejectmsg)=.{})



// somePromise.then((message)=>{
// 		console.log("success:" , message);}
// ,(errorMessage)=>{
// 	console.log("Error:", errorMessage);
// });


// almost all promises take arguements 
var asyncAdd = (a,b) => {
	return new Promise((resolve,reject) => {
		setTimeout(()=>{
			if (typeof a === 'number' && typeof b === 'number'){
				resolve(a+b);
			}
			else{
				reject('Arguments must both be numbers');
			}
		},1500);
	});
};
// promise chainign that will fail with double error messages 

// asyncAdd(5,7).then( (completion_message) =>{
// 		console.log('Things worked out great', completion_message);
// 		return asyncAdd(completion_message,33)
// 	},
// 	(errormessage) =>{
// 		console.log(errormessage);
// 	}). then ((res)=>{
// 		console.log('should be 45',res); // this then call will run regardless ofthe callback  as long as its given something 
// 	},
// 	(errmsg)=>{
// 		console.log(errmsg);
// 	})
	// promise chainign  with a catch
	asyncAdd(5,7).then( (completion_message) =>{
		console.log('Things worked out great', completion_message);
		return asyncAdd(completion_message,33)
	}). then ((res)=>{
		console.log('should be 45',res); // this then call will run regardless ofthe callback  as long as its given something 
	}).catch((errora)=>{
		console.log(errora); // catch will catch any eerros
	})