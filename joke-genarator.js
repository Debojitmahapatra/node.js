
import https from "https";
import chalk from "chalk";


const getJoke=()=>{
    
    const api="https://official-joke-api.appspot.com/random_joke";
    
    https.get(api,(res)=>{
       let data=""
       res.on("data",(chunk)=>{
          data=data+chunk
       })
       res.on("end",()=>{
        let joke=JSON.parse(data)
        console.log(`Here is a random ${joke.type} joke`)
        console.log(chalk.bgBlue(joke.setup));
        console.log(chalk.bgRed.bold(joke.punchline))
        // console.log(joke)
        
       })
       res.on("error",(err)=>{
        console.log(`Error fetching the joke, ${err.message}`);
        
       })
    })
}

getJoke()