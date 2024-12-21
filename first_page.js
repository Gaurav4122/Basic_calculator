const colors = ['red', 'blue', 'yellow', 'orange', 'purple', 'pink', 'white'];


function showing_colors(){
  
    let result = Math.floor(Math.random()*colors.length)
    document.body.style.backgroundColor = colors[result]
    
    document.body.style.transitionProperty = 'all'
    document.body.style.transitionDuration = '5s'
    
    }

setInterval(showing_colors,2000)   

console.log("hello wolrd")

    