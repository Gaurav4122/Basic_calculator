// first take the button because all action should peform on the clicking

const button = document.querySelector('button')
button.addEventListener('click',()=>{
    const first = document.getElementById('first');
    const first_number = Number(first.value);
    
    const second  = document.getElementById('second');
    const second_number = Number(second.value);
    let result =0;

    //checking the condition value is number or not
    if((first_number>=0 || first_number<=0) || (first_number>=0 || first_number<=0)){
      
    result = first_number * second_number;
     
    }
     //output result
    const showing = document.querySelector('.show')
      showing.innerHTML = "Result: "+result;

})