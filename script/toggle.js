document.getElementById('salami').style.display="none";
document.getElementById('add-money-btn').addEventListener('click',function(){
    document.getElementById('salami').style.display="block";
    document.getElementById('complete').style.display="none";
})
document.getElementById('add-money-btn').addEventListener('click',function(event){
    
    document.getElementById('scroll').scrollIntoView({behavior:"smooth"});
})