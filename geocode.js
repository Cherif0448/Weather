const request=require('request')


function geocode(address,callback)
{

urls='https://api.opencagedata.com/geocode/v1/json?q='+address+'&key=9e7bd5138379478cacf19c079fcabd2b'

request({url:urls,json:true},function(error,response)
{
    if(error)
    {
        callback('connect to the internet',undefined)
    }
    else if(response.body.results.length===0)
    {
        callback('unable to find location',undefined)
    }
    else{


   callback(undefined,{lattitude:response.body.results[0].geometry.lat,longtitude:response.body.results[0].geometry.lng})
    }
    
}
)
}



module.exports=geocode