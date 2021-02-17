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

})

// update the specific widget
router.put('/:id',(req,res)=>{

})
// delete the one widget
router.delete(':id',(req,res)=>{

})

module.exports=router