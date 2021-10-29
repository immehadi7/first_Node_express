const express = require('express')
const cors = require('cors');
const { json } = require('express');
const app = express()
const port = 5000;

app.use(cors())
// express bodyparser use koreo kaj kora jaay 
app.use(express.json())

app.get('/', (req, res)=>{
    res.send('node js pera dayokkk')
})

const users = [
    {"id":0, "name":"Mehedi", "profession":"baper Hotel"},
    {"id":1, "name":"Hasan", "profession":"baper Hotel"},
    {"id":2, "name":"Hridoy", "profession":"baper Hotel"},
    {"id":3, "name":"Jhonny", "profession":"baper Hotel"},
    {"id":4, "name":"Abid", "profession":"baper Hotel"},
    {"id":5, "name":"Imad Hasan", "profession":"baper Hotel"},
]

// get data from user app method 
app.post("/users", (req, res)=>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log("post come", req.body);
    res.send("inside post")
    // ekhon jeta pabo seta abar stringify kora lagbe
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
} )

// query peramiter search result
app.get("/users", (req,res)=>{
    const search = req.query.search
    if(search){
        const searchResult = users.filter(user=> user.name.toLowerCase().includes(search));
            res.send(searchResult);
    }
    else{
        res.send(users)
    }

})


// dynamic api 
app.get("/users/:id",(req,res)=>{
    const id = req.params.id;
        const user = users[id];
            res.send(user);

})
app.get("/fruits",(req,res)=>{
    res.send(["mangoes", "Banana", "jam"])
})
app.get("/fruits/mangoes",(req,res)=>{
    res.send("tok aam")
})

app.listen(port, ()=>{
    console.log("hello from node", port)
})