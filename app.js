let count = 0;
const value = document.getElementById('value');
const btns = document.querySelectorAll('.btn');

btns.forEach((btn)=> {
 btn.addEventListener('click', (e)=> {
   const countButton = e.currentTarget.classList;
   if (countButton.contains('minus')) {
      count--;
      value.style.color = "red";
      
   } else if (countButton.contains('plus')) {
      count ++;
      value.style.color = 'green';

   } else{
     count = 0;
     value.style.color = 'black';
   } 
   value.innerText = count;
 })

}) 

