const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const { User } = require("./models/User")


// application/x-www-form-urlenconded 분석할 수 있도록
app.use(bodyParser.urlencoded({extended : true}))


//json 파일을 해석할 수 있도록 해준다
app.use(bodyParser.json())


const mongoose = require('mongoose')
const config = require('./config/key')

mongoose.connect(
  config.mongoURI,
  {
    useNewUrlParser: true,

    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Connected to MongoDB!!!");
  }
);

app.get('/', (req,res) => res.send("Hello world"))


app.post("/register", (req,res)=>{
  // 회원가입할 때 필요한 정보들을 client에서 가져오면
  // 그것들을 데이터 ㅂ세이스에 넣어준다

  const user = new User(req.body)

  user.save((err, doc)=>{
    
    // 몽고DB에 저장되는 메서드
    
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  }) 
})

app.listen(port, () => console.log(`Example app listening on port ${port}`))
