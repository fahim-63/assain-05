const fahim = document.querySelectorAll('.fahim');
for(let i = 0; i < fahim.length; i++){
 const btnFahim = fahim[i];
 btnFahim.addEventListener('click',function(event)
 {
  event.target.classList.add('bg-gray-300')
  event.target.classList.add('border-none')
 })
}
