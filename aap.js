const express = require('express')
const bodyParser=require('body-parser')
const dates = require(__dirname +'/date.js')
const app=express()
let items=['Buy food','Cook food','Eat food']
app.set('view engine','ejs')
app.use(bodyParser.urlencoded({extended:true}))
app.get('/',function(req,res){
    let day=dates.getData()
    res.render('list',{kindOfDay:day,newListItem : items})
})
app.post('/',function(req,res){
    let item=req.body.newItem
    items.push(item)
    res.redirect('/')
})

app.listen(3000,function()
{
    console.log('server running at port : 3000')
})