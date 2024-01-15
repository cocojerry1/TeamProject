const express = require('express')
const ejs = require('ejs') 
const app = express()
const port = 3000
var bodyParser = require('body-parser')
var session = require('express-session')


require('dotenv').config()



const mysql = require('mysql2')
const connection = mysql.createConnection(process.env.DATABASE_URL)
console.log('Connected to PlanetScale!')

connection.query("SET time_zone='Asia/Seoul'"); 


app.set('view engine','ejs') 
app.set('views','./views')
 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(__dirname+'/public')) 
 
app.use(session({ secret: 'unidago', cookie: { maxAge: 60000 }, resave:true, saveUninitialized:true, }))

app.use((req, res, next) => {    


   res.locals.user_id = "";
   res.locals.name = "";

   if(req.session.member){ 
      res.locals.user_id = req.session.member.user_id 
      res.locals.name = req.session.member.name 
   }
   next()
 })



app.get('/', (req, res) => {
   console.log(req.session.member); 

   res.render('index')   // ./views/index.ejs  
})

app.get('/profile', (req, res) => {
   res.render('profile')  
})

app.get('/map', (req, res) => {
   res.render('map')  
})

app.get('/contact', (req, res) => {
   res.render('contact')  
})

app.get('/signup', (req, res) => {
   res.render('signup') 
 })

 app.post('/signupProc', (req, res) => {
   const name = req.body.name ? req.body.name.trim() : ""; // trim 함수 추가
   const user_id = req.body.user_id ? req.body.user_id.trim() : ""; 
   const pw = req.body.pw ? req.body.pw.trim() : ""; 
   const age = req.body.age ? req.body.age.trim() : ""; 
   const gander = req.body.gander ? req.body.gander.trim() : ""; 
   const Genre = req.body.Genre ? req.body.Genre.trim() : ""; 
 
   var sql = `insert into member(name,user_id,pw,age,gander,Genre) 
   values('${name}','${user_id}','${pw}','${age}','${gander}','${Genre}')`
 
   connection.query(sql, function (err, result) {
     if (err) throw err;
     console.log(12);
     res.send("<script> alert('회원가입이 완료되었습니다.'); location.href='/';</script>");
   })
 })

 app.get('/logout', (req, res) => {

   req.session.member = null;
   res.send("<script> alert('로그아웃 되었습니다.'); location.href='/';</script>")
 });
 
 app.get('/login', (req, res) => {
   res.render('login')
 })
 
 app.post('/loginProc', (req, res) => {
   const user_id = req.body.user_id;
   const pw = req.body.pw;
 
   connection.query('select * from member where user_id=? and pw=?', [user_id, pw], function (err, result) {
     if (err) throw err;
 
     if (result.length == 0) {
       res.send("<script> alert('존재하지 않는 아이디, 비밀번호 입니다.'); location.href='/login';</script>")
     } else {
       console.log(result[0]);
 
       req.session.member = result[0];
 
       res.send("<script> alert('로그인 되었습니다.'); location.href='/';</script>")
     }
   });
 });
 
 app.listen(port, () => {
   console.log(`서버실행 접속주소: http://localhost: ${port}`)
 })