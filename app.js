const express=require('express')
const hbs=require('hbs')
const geocode=require('D:/node course practical/weather_site_me/geocode.js')
const forecast=require('../weather_site_me/forecast.js')
const app=express()
app.use(express.static('D:/node course practical/weather_site_me/public'))
app.set('view engine','hbs')
app.set('views','D:/node course practical/weather_site_me/views')

hbs.registerPartials('D:/node course practical/weather_site_me/partials')


app.get('',function(req,res)
{
    res.render('main')
})
app.get('/about',function(req,res)
{
    res.render('about')
})
app.get('/help',function(req,res)
{
    res.render('help')
})

app.get("/weather",function(req,res)
{
if(!req.query.address)
{
    return res.send('enter an address please man')
}
else
{
    geocode(req.query.address,function(error,data)
{
    
    
    
    if(error)
    {
        
        return res.send({temp:undefined})
    }
    else{

   
    forecast(data.lattitude,data.longtitude,function(error,data)
{
    if(error)
    {
        return res.send({temp:undefined})
    }
else{
    return res.send({temp:data.temperature})
}
})}
    }

)

  
}
})


app.get('*',function(req,res)
{
    res.render('error')
})

app.listen(3000,function()
{
    console.log('server is up')
})


