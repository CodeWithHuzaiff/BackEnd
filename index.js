const exp=require("express");
const app=exp();

const port=3000;

app.listen(port,()=>{
    console.log(`Port is listining at ${3000}`);
    
});


// app.use((req,res)=>{
//     console.log("request received..");
//     // console.log(res);
//     // res.send("This is basic Response")
//     const data={
//         name:"Huzaif",
//         age:19,
//         cgpa:9.8
//     }
//     res.send(data)
// });

app.get('/',(req,res)=>{
    res.send({name:"cat",
        age:2
    })
})
app.get('/bl',(req,res)=>{
    res.send({name:"cat",
        age:2,
        color:"black"
    })
})
app.get('/wh',(req,res)=>{
    res.send({name:"cat",
        age:2,
        color:"white"
    })
})
app.post('/gl',(req,res)=>{
    res.send({name:"cat",
        age:2,
        color:"gold"
    })
})

app.get("/:username/:id",(req,res)=>{
    let {username,id}=req.params
    res.send(`Responce sended to ${username} at ${id}`)
})