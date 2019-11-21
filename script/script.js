var rad = document.getElementById('one'); //choosing radio button



//adding event in case of change  for radio button
rad.addEventListener('change', function() {
//adding if statement to check value of radiobutton
  if (rad.value === 'oneway')  {
     document.getElementById('return').setAttribute('disabled',' ');
  } else{
    document.getElementById('return').setAttribute('selected', ' ')
  }
})








