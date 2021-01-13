const express = require('express');
const router = express.Router();
//const bodyPraser=require("bodyParser");
var data = require("../app");

// let data=[{"id":1,"name":"ganesh","degree":"be"},
// {"id":2,"name":"charan","degree":"me"},
// {"id":3,"name":"raja","degree":"bsc"},
// {"id":4,"name":"mrudul","degree":"mds"}]

//read all
router.get('/',(req,res)=>{
    res.status(200).json(data);
});

//read specific to id
router.get('/:id',(req,res)=>{
    var element=data.arr.find((item)=>{
        return item.id===parseInt(req.params.id);
    })

    if(element){
        res.status(200).json(element);
    }else{
        res.sendStatus(404);
    }
})


//create
router.post("/",(req,res)=>{
    let newItem = {
        id: req.body.id,
        name: req.body.name, 
        degree: req.body.degree
    };

    // push new item object to data array of items
    //let newItem=req.body;
    data.push(newItem);
    
    // data.push(add_element);
    res.status(201).json(newItem);
})

//update
router.put("/:id",(req,res)=>{
    update_element=data.find((item)=>{
        return item.id===parseInt(req.params.id);
    })

    if(update_element){
        let update={
            id:update_element.id,
            name:req.body.name,
            degree:req.body.degree
        }

        target_index=data.indexOf(update_element.id);
        data.splice(target_index,1,update);
        res.status(200).json(data);
    }else{
        res.sendStatus(404);
    }
})


//delete
router.delete("/:id",(req,res)=>{
    element=data.find((item)=>{
        return item.id===parseInt(req.params.id);
    })
    
    

    if(element){
        target=data.indexOf(element);
        data.splice(target,1);
        res.sendStatus(200);

    }else{
        res.sendStatus(404);
    }

})

module.exports=router;