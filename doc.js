let button = document.getElementById("btn");
button.addEventListener("dblclick",()=>{
    // alert("yay");
    document.querySelector(".box").innerHTML="done";
});
function getRandomColor(){
    let val1 = Math.ceil(0 + Math.random() * 255);
    let val2 = Math.ceil(0 + Math.random() * 255);
    let val3 = Math.ceil(0 + Math.random() * 255); 
    return `rgb(${val1},${val2},${val3})`
}
setInterval(()=>{
    document.querySelector(".box").style.background = getRandomColor()
},1000)
button.addEventListener("keydown",(e)=>{

    alert("yay");
    
});