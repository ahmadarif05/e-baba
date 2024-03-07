
{/* login session maintain krne keliye */}
{/* npm install jsonwebtoken */}

// files upload krne keliye
// npm install multer

let User =  require('./models/user');

require('./db')

let jsontoken = require('jsonwebtoken');

let myExpress =  require('express');
const multer  = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      
        cb(null, './newapp/server/mera-upload')

    },
    filename: function (req, file, cb) {      
      cb(null, file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })

let app = myExpress();

app.use(myExpress.json())

// npm install appkiLibraryKName -g(global, har folder m library available cahhiye)


// npm install appkiLibraryKName appkiLibraryKName2 appkiLibraryKName3
// npm uninstall appkiLibraryKName

// npm
// node packge manager
// library/plugins manager

// REST AO

app.get('/test', (req, res)=>{

    res.end("asdasd")

})


app.post('/token-check', (req, res)=>{

    try{

        
        jsontoken.verify(req.body.token, "cat says", (err, data)=>{
    

    if(err){
        return res.json(null)
    }

    let user = users.find(function(user){
        if(user.id == data.meriABC){
            return true;
        }
    })
    
    // let user = users.find(user=>user.id == data.meriABC);
    
    res.json(user);
})
}catch(e){
    console.log(e)
}
    
})

    // console.log(req.body.token)


// req m hamesha incoming data hota h
// like browser, android app, iOS App
app.post('/login', (req, res)=>{

    let user = users.find(function(meraUser){

        if(meraUser.name == req.body.name && req.body.password == meraUser.password ){
            return true;
        }

    });


    if(user){

        jsontoken.sign(
                    {                        
                        meriABC:user.id
                    },
                    "cat says",
                    {
                        expiresIn:"5d"
                    }, function(err, meraToken){
                        console.log(meraToken)
                        res.json(
                            {
                                nishani:meraToken,
                                user:user
                            }
                        );
                    }
            );

    }



    // res.end("yeh login tha")
})

let users = [
    {
        id:100,
        name:'farhan',
        password:'3232',
        city:'Faisalabad'
    }
];

app.get('/get-user-by-id', async (req, res)=>{

    let user = await User.findById(req.query.some);

    // let user  = users.find(user=>user.id == req.query.some);

    res.json(user);

});

app.put('/update-user', async (req, res)=>{

    await User.findByIdAndUpdate(req.body._id, req.body);
    
    res.json({success:true})

    // let index = users.findIndex(user=>user.id == req.body.id);
    // users[index] = req.body;
    // console.log(req.body)
})

app.get('/users-lao', async (req, res)=>{

    // res.end()
    // yeh string send karta
    // res.sendFile()
    // yeh file send karta h 
    // res.json()
    //  yeh js wali koi bhi cheez like array ya object wagera

    let users = await User.find();

    res.json(users);


} )

app.delete('/delete-user', async (req, res)=>{

    await User.findByIdAndDelete(req.query.abc)

    // let index = users.findIndex(function(user){

    //     if(user.name ==  req.query.abc){
    //         return true;
    //     }

    // })

    // if(index != -1){
    // users.splice(index, 1)
    // }

    res.json({
        success:true
    })

    console.log(req.query.abc)
})

app.post('/create-user'),  async (req, res)=>{
    
    let nyaUser =  new User(req.body);
    await nyaUser.save();
    res.json({success:true})


    // let userParaHua = users.find(function(user){

    //     if(user.name.toLowerCase() == req.body.name.toLowerCase()){
    //         return true
    //     }

    // })

    // if(userParaHua){

    // res.status(409).json({});

    // }else{


    //     req.body.img = req.files[0].originalname;

    //     users.push(req.body);

    //     res.json({success:true});
    // }
   
    // console.log(req.body)
    // console.log('data awat');
});

app.get('/', (incoming, outgoing)=>{

    console.log(incoming.ip);
    
    outgoing.end('ok hogya')

})

// myExpress.static()
// yeh express ko btata h kay kis folder m aapne files ko dekhna ha

let fileServer = myExpress.static('/build');

app.use(fileServer);
app.use(myExpress.static('/mera-upload'));

app.listen(8080, ()=>{
    console.log('server chaling')
})




// console.log('server is chaling')


// same language as JS
// much faster as compared to PHP wagera
// needs much cheaper hardware

//  deliver website ki files
// website ko backend se data communicate krwana
