console.log("starting app.js");

const fs = require('fs');
const _ = require("lodash");
// const os = require('os');
const yargs = require('yargs');
const notes = require ("./notes.js");





const argv  = yargs.argv;
var command = argv._[0]
console.log("command:" + command);
//console.log(process.argv);
// console.log('yargs returns arguements like this ! :',argv)

if (command === "add"){
   var note =  notes.addnote(argv.title, argv.body);
   if (note){
    console.log("command added:");
    notes.logNote(note);
   }   
   else{
       console.log("there was an error in adding the note");
   }
}
else if (command === "list"){
    notes.getAll();
}
else if (command === "read"){
    var note = notes.readNote(argv.title);
    if (note){
        console.log("Your note is:");
        notes.logNote(note);
    }
    else {
        console.log("note with title: " + argv.title + " not found. Check spelling.");
    }
}
else if (command === "remove"){
   var note = notes.removeNote(argv.title);
    if (note){
        console.log("note "+argv.title + " deleted")
    }
    else{
        console.log("the note was note deleted. Check the spelling of the note ")
    }
}
else console.log("command not recognized");

//log note function returns the note title and body 
var logNote = (note) => {
    console.log("-----------------");
        console.log(note.title); 
        console.log("your body is:");
        console.log(note.body);
};



// var user = os.userInfo();
// console.log("this is the user");
// // console.log(user);

// fs.appendFile('greetings.txt', `Hello ${user.username}! you are  ${notes.age}. `,function(err){
//     if(err){
//         console.log("Unable to write to file");
//     }
// });
// var results = notes.addNote();
// console.log(results);

// var summation = notes.addtwo(3,4);
// console.log(summation);

// console.log(_.isString(true));
// console.log(_.isString("no"));

// var filteredArray = _.uniq(['toto','toto',1,2,1,2,3,4]);
// console.log(filteredArray);
