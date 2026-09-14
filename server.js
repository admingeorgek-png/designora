const express=require('express');const path=require('path');const app=express();const PORT=process.env.PORT||3000;
app.use(express.json());app.use(express.static(path.join(__dirname,'../frontend')));
app.get('/health',(req,res)=>res.json({status:'ok',app:'Designora'}));
app.listen(PORT,()=>console.log(`Designora running on port ${PORT}`));
