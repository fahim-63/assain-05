const fahim = document.querySelectorAll('.fahim');
for(let i = 0; i < fahim.length; i++){
 const btnFahim = fahim[i];
 btnFahim.addEventListener('click',function(event)
 {

    for(let a = 0; a < fahim.length; a++){
       fahim[a].classList.remove('btn-primary')
       fahim[a].classList.add('btn-primary')
       
    }
  event.target.classList.add('bg-gray-300',"border-none",'text-black',alert('Board submission is successful'));
 })

  
}
