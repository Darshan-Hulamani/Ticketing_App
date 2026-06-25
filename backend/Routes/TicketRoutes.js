const express=require('express');
const router=express.Router();
const Ticket=require('../Model/Ticket');

router.post('/',async(req,res)=>{
    try{
        const newTicket=new Ticket({
            title: req.body.title,
            description: req.body.description,
            priority: req.body.priority,
            createdby: req.body.createdby
        });
        const savedTicket=await newTicket.save();
        res.status(201).json(savedTicket);
    }
    catch(error){
        res.status(400).json({message:"Failed to Save Ticket",error:error.message})
    }
});

router.get('/',async(req,res)=>{
    try{
    const data = await Ticket.find();

    res.json(data);
    }
    catch(error){
        res.status(500).json({message:"Failed to Retrieve Data",error:error.message});
    }
});

router.patch('/:id', async(req,res)=>{
    try{
        const updatedTicket=await Ticket.findByIdAndUpdate(req.params.id, req.body, {new:true});
        res.json(updatedTicket);
    }
    catch(error){
        res.status(400).json({message:error.message});
    }
});

// router.path()

router.delete('/:id', async(req, res) => {
    try{
        await Ticket.findByIdAndDelete(req.params.id);
        res.json({message: 'Deleted'});
    }
    catch(err){
        res.json(400).json({error:err.message});
    }
});

module.exports=router;