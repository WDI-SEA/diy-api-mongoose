const express=require('express')
const router=express.Router()
const db=require('../../models')
// show alll widgets
router.get('/',(req,res)=>{
    db.Widget.find()
    .then(widgets=>{
        res.status(200).send(widgets)
    })
})
// add a widget
router.post('/',(req,res)=>{
    db.widget.create(req.body)
    .then(newWidget=>{
        res.status(201).send(newWidget)
    })
    .catch(err=>{
        console.log(err)
    })
})
// show one widget
router.get('/:id',(req,res)=>{
    db.widget.findById(req.params.id)
    .then(widget=>{
        if(widget){
            res.status(200).send(widget)
        }else{
            res.status(404).send({message: 'Resource Not FOund'})
        }
    })
})

// update the specific widget
router.put('/:id',(req,res)=>{
    db.Widget.findOneAndUpdate({
        _id:req.params.id
    },req.body,{
        new:true
    })
    .then(updatedWidget=>{
        res.status(200).send(updatedWidget)
    })
})
// delete the one widget
router.delete(':id',(req,res)=>{
    db.Widget.findByIdAndDelete(req.params.id)
    .then(()=>{
        res.status(200).send({message: 'Delete Successfully'})
    })
})

module.exports=router