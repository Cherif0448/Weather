const weatherform=document.querySelector('form')
const input=document.querySelector('input')

respo=document.querySelector('#respo')
weatherform.addEventListener('submit',function(e)
{
    e.preventDefault()

    value=input.value
console.log(value)
    fetch('http://localhost:3000/weather?address='+value).then(function(response)
{

    response.json().then(function(data)
{
    console.log(data.temp)
    if(data.temp)
    {
    respo.textContent='The temperature in '+value+' is '+data.temp+' Celsius'
    }
    else{
        respo.textContent='unable to find location'
    }
})
})
})