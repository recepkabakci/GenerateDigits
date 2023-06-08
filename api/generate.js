import express from "express"
import cors from "cors"

const app = express();

const port = 4000;

app.use(function (req, res, next) {

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  
  });

  app.use(express.json())

  app.use(cors())

  app.get("/",(req,res)=>{
    res.json("This is backend!")
  })


  //Create random number between 4-6 lenght

  function generateRandomNumber(lenght){
  
    let code="";
    for(let i=0;i<lenght;i++){
      code+=Math.floor(Math.random()*10)
    }
    //padStart:It pads the string with another string (multiple times) until it reaches a given length.
    return code.padStart(4,"0");
  }

  app.get("/randomnumber", (req, res) => {
    const length = parseInt(req.query.length);
  
    //is it a number?
    if (isNaN(length) || length < 4 || length > 6) {
      return res.status(400).send("Invalid length");
    }
  
    const randomNumber = generateRandomNumber(length);
  
    if (randomNumber == null) {
      return res.status(500).send("Internal server error");
    }
  
    res.send(randomNumber);
  });

  app.listen(port, () => {

    console.log('Test_randomcode app is listening at http:\\localhost: ', port);
  
  });


