request=require('request')
geocode=require('./geocode.js')

function forecast(lat,lon,callback)
{
request({url:'https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid=81e2e668520e8c371caacc9be6c0bbac&units=metric',json:true},function(error,response)
{
    if(error)
    {
        callback('please connect to the internet man...',undefined)
    }
    else if(response.body.error)
    {
        callback('cant find these coordinates location :(')
    }
    else{
     callback(undefined,{temperature:response.body.main.temp})
}
}
)
}

module.exports=forecast