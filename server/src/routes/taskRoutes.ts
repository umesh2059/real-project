import {Router}from "express";

const router=Router();


// let make a temporary memory task list 

let task:{id:number;title:string}[]=[];


router.get('/',(req,res)=>{
    res.json(task)
});

router.post('/',(req,res)=>{
    const {title}=req.body;

    if(!title){
        return res.status(400).json({message:"title is required"});
    }
    const newTask={
        id:Date.now(),
        title,
    };

    task.push(newTask);
    res.status(201).json(newTask);
});

router.delete('/:id',(req,res)=>{
    const id =Number(req.params.id);
    task=task.filter(task=>task.id !==id);
    res.json({message:"task completed"})
});

export default router;
