var photo1 = document.getElementById('photo1');//getting first photo
var photo2 = document.getElementById('photo2');//getting second photo
var photo3 = document.getElementById('photo3');//getting third photo

//adding event on hover that will trigger funtion popup
photo1.onmouseover = function popup(){
    document.getElementById('span1').setAttribute('class', ' visible');
}

photo2.onmouseover = function popup2(){
  document.getElementById('span2').setAttribute('class', ' visible2');
}

photo3.onmouseover = function popup3(){
  document.getElementById('span3').setAttribute('class', ' visible3');
}

photo1.onmouseout = function popup(){
  document.getElementById('span1').setAttribute('class', 'span1');
}

photo2.onmouseout = function popup2(){
document.getElementById('span2').setAttribute('class', 'span2');
}

photo3.onmouseout = function popup3(){
document.getElementById('span3').setAttribute('class', 'span3');
}