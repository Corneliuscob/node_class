 console.log("Starting notes.js");
// console.log("In every js file we have access to a file called modules");
// console.log(module);


// module.exports.age = 22;

// module.exports.addNote  = function(conventional){
 
// }

//we will be using an arrow function instead of the conventional function
//doesnt bind the 'this' keyword 
// module.exports.addNote = ()=> {
//  console.log('addNote');
//  return 'New Note';
// };

// module.exports.addtwo = (x,y) =>{
//     console.log("add function started");
//     return x+y;
// };
const fs = require('fs');

//helper functions to addnote
var fetchNotes = ()=>{
    try {
        var notes_string = fs.readFileSync('notesdata.json');
        return JSON.parse(notes_string); 
        console.log(notes_string);
    } 
    catch (error) {
        return [];
    }
};
var saveNotes = (notes) => {
    fs.writeFileSync('notesdata.json',JSON.stringify(notes));
};

//function addnote:
var addnote = (title,body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
        //we are calling note to be equal as note. By es6 we are allowed to say title: title === title 
    };
    var duplicateNotes = notes.filter((note)=>{
        return note.title === title   });
// if we  have only one ine in the return arrow function we can write the function like this: 
    // var duplicateNotes = notes.filter((note)=> return note.title === title   );     
    console.log(duplicateNotes);
    if (duplicateNotes.length  === 0 ){
        notes.push(note);
        saveNotes(notes);
        return note;
    }
    else {
     console.log("the title has already been chosen");  
     return 0; 
    }
    
};

var getAll = () => {
    console.log("getting all");
};
var readNote = (title)=>{
    notes = fetchNotes();
    var noteExist = notes.filter((note)=> note.title === title );
    if (noteExist){    
        return noteExist[0];
    }
    else return 0;
};
var removeNote = (title)=>{
   //fetch notes
   var notes = fetchNotes();
   //filter notes  removing one with title of arguemnt  filter returns elements meeting function criteria
   var removedNotes = notes.filter((note)=>    note.title !== title );
   // save new notes arra y 
   saveNotes(removedNotes);
   return notes.length !== removedNotes.length
};

//log note function returns the note title and body 
var logNote = (note) => {
    console.log("-----------------");
        console.log(note.title); 
        console.log("your body is:");
        console.log(note.body);
};

module.exports = {
//  old JS to add functions
    //  addNote = addNote
//ES6 
    addnote,
    getAll,
    readNote,
    removeNote,
    logNote
};

