 
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const BookSchema = new mongoose.Schema({
    name:String,
},{timestamps: true})


const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required"]
      },
      lastName: {
        type: String,
        required: [true, "Last name is required"]
      },
      email: {
        type: String,
        required: [true, "Email is required"],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email"
          }
      },
      password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [8, "Password must be 8 characters or longer"],
      },
      favBooks:[BookSchema]

        
}, {timestamps: true})

UserSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10)
      .then(hash => {
        console.log("*-*-*-*-*-*-*-*-*-*-*-**-**-*=> your hashed password is "+ hash);
        this.password = hash;
        next();
      });
  });

module.exports.User = mongoose.model("User", UserSchema);
module.exports.Book = mongoose.model("Book", BookSchema);