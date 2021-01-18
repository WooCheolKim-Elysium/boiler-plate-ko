const express = require('express') // express 모듈 가져오기
const app = express() // express 앱 생성
const port = 5000 // 포트 번호


const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://wckim:<password>@boilerplate.6zmt2.mongodb.net/<dbname>?retryWrites=true&w=majority', 
{useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true, useFindAndModify:false})
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello World!~~안녕하세요~~'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))