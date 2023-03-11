const express = require('express');
const app = express();

const weatherRoute = require("./routes/weather")

// app.get('/', (req, res) => {
//     res.send("hola perros")
// })

//Middleware
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}));

//add route
app.use('/',weatherRoute);


//use engine

app.set("view engine", "ejs");

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>{
    console.log("server starting at port http://localhost:" + PORT);	
});