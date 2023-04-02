const express = require('express');
const jwt = require('jsonwebtoken');
let books = require("./booksdb.js");
const regd_users = express.Router();

let users = [];

const isValid = (username)=>{ //returns boolean
//write code to check is the username is valid
}

const authenticatedUser = (username,password)=>{ //returns boolean
//write code to check if username and password match the one we have in records.
}

//only registered users can login
regd_users.post("/login", (req,res) => {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

// Add a book review
regd_users.get("/:isbn", (req, res) => {
  //Write your code here
    const extra = req.params.isbn;
    return res.send(books[extra])
//   const isbn = req.params.isbn;
//   let book = books[isbn]
//   if (book) { //Check is friend exists
//       let review = req.body.review;
//       //Add similarly for firstName
//       //let fName = req.body.firstName
//       //Add similarly for lastName
//       //let lName = req.body.lastName


//       //if DOB the DOB has been changed, update the DOB 
//       if(review) {
//           book["review"] = review
//       }
//       //Add similarly for firstName
//       //if(fName){
//         //  friend["firstName"] = fName
//       //}
//       //Add similarly for lastName
//       //if(lName){
//         //  friend["lastName"] = lName
//       //}
//       books[isbn]=book;
//       res.send(`Review to the book with isbn ${isbn} updated.`);
//   }
//   else{
//       res.send("Unable to find book!");
//   }

  //return res.status(300).json({message: "Yet to be implemented"});
});

module.exports.authenticated = regd_users;
module.exports.isValid = isValid;
module.exports.users = users;
