const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name : {
    type:String,
    maxlength:50
  },
  email : {
    type : String,
    trim : true, // space를 제거해주는 역할
    unique:1
  },
  password : {
    type:String,
    minlength:5
  },
  lastname:{
    type:String,
    maxlength:50
  },
  role:{
    type:Number,
    default:0
  },
  image: String,
  token : {
    type:String
  },
  tokenExp:{
    type:Number // 토큰이 사용될 기간
  }
})

const User = mongoose.model('User', userSchema)

module.exports = {User}