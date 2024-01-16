const express = require('express')
const ejs = require('ejs') 
const app = express()
const port = 3000
var bodyParser = require('body-parser')
var session = require('express-session')


require('dotenv').config()

app.use(session({
  secret: 'unidago',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));


const mysql = require('mysql2')
const connection = mysql.createConnection(process.env.DATABASE_URL)
console.log('Connected to PlanetScale!')

connection.query("SET time_zone='Asia/Seoul'"); 


app.set('view engine','ejs') 
app.set('views','./views')
 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(__dirname+'/public')) //이전 경로가 퍼블릭
 
app.use(session({ secret: 'unidago', cookie: { maxAge: 60000 }, resave:true, saveUninitialized:true, }))
app.use(checkLoginStatus);
app.use((req, res, next) => {    


   res.locals.user_id = "";
   res.locals.name = "";

   if(req.session.member){ 
      res.locals.user_id = req.session.member.user_id 
      res.locals.name = req.session.member.name 
   }
   next()
 })

 function checkLoginStatus(req, res, next) {
  if (req.session && req.session.member) {
    res.locals.loggedIn = true;
  } else {
    res.locals.loggedIn = false;
  }
  next();
}

app.get('/', (req, res) => {
  if (res.locals.loggedIn) {
  
    res.render('index');
  } else {
    
    res.render('firstpage');
  }
});

app.get('/index', (req, res) => {
  res.render('index')  
})

app.get('/profile', (req, res) => {
   res.render('profile')  
})

app.get('/fruits', (req, res) => {
   res.render('fruits')  
})

app.get('/populars', (req, res) => {
  res.render('populars')  
})


app.get('/latestmovies', (req, res) => {
  res.render('latestmovies')  
})


app.get('/favourite', (req, res) => {
  res.render('favourite')  
})


app.get('/bookmarks', (req, res) => {
   // 데이터베이스에서 즐겨찾기한 과일 정보 가져오기
   const selectQuery = `
     SELECT * FROM bookmarks WHERE category = '과일'
   `;
   connection.query(selectQuery, (err, results) => {
     if (err) {
       console.error('과일 정보를 가져오는 중 오류가 발생했습니다:', err);
       res.status(500).send('과일 정보를 가져오는 중 오류가 발생했습니다.');
       return;
     }
     console.log('과일 정보를 가져왔습니다.');
     res.send(results);
   });
 });

app.get('/signup', (req, res) => {
   res.render('signup') 
 })

 app.post('/signupProc', (req, res) => {
   const name = req.body.name ? req.body.name.trim() : "";
   const user_id = req.body.user_id ? req.body.user_id.trim() : ""; 
   const pw = req.body.pw ? req.body.pw.trim() : ""; 
   const age = req.body.age ? req.body.age.trim() : ""; 
   const gender = req.body.gender ? req.body.gender.trim() : ""; 
   const Genre = req.body.Genre ? req.body.Genre.trim() : ""; 
 
   var sql = `insert into member(name,user_id,pw,age,gender,Genre) 
   values('${name}','${user_id}','${pw}','${age}','${gender}','${Genre}')`
 
   connection.query(sql, function (err, result) {
     if (err) throw err;
     console.log(12);
     res.send("<script> alert('회원가입이 완료되었습니다.'); location.href='/';</script>");
   })
 })

app.get('/login', (req, res) => {
   res.render('login')  
})

app.post('/fruitsProc', (req, res) => {
   const title = req.body.title; // 즐겨찾기 제목
   const url = req.body.url; // 즐겨찾기 URL
   const category = req.body.category; // 즐겨찾기 카테고리
 
   var sql = `INSERT INTO bookmarks (title, url, category)
    VALUES ('${title}','${url}','${category}')`;

   connection.query(sql, [title, url, category], (err, result) => {
     if (err) throw err;
     console.log('즐겨찾기가 추가되었습니다!');
     res.send("<script> alert('즐겨찾기가 완료되었습니다.');location.href='/fruits';</script>");
   });
 });
 

app.post('/loginProc', (req, res) => {
   const user_id = req.body.user_id; 
   const pw = req.body.pw; 
 
   var sql = `select * from member  where user_id=? and pw=? `

   var values = [user_id, pw]; 

   connection.query(sql, values, function (err, result){
       if(err) throw err;      
       
       if(result.length==0){
         res.send("<script> alert('존재하지 않는 아이디입니다..'); location.href='/login';</script>");          
       }else{  
         console.log(result[0]); 

         req.session.member = result[0]  
         res.send("<script> alert('로그인 되었습니다.'); location.href='/';</script>");          
       }
   })

})

app.get('/comment', (req, res) => {
  
   const loggedIn = req.session.member ? true : false;
   const userName = loggedIn ? req.session.member.name : '';

   
   res.render('comment', {
     loggedIn: loggedIn, 
     userName: userName 
   });
});

 

app.get('/logout', (req, res) => {
   
   req.session.member = null; 
   res.send("<script> alert('로그아웃 되었습니다.'); location.href='/';</script>");          
        
    
})

 app.listen(3000, () => {
   console.log('서버가 시작되었습니다!');
 });

 