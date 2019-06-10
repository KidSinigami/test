

function Hide(){
  document.getElementsByClassName('column')[0].style.display = "none";
  document.getElementsByClassName('column')[1].style.display = "none";
  document.getElementById('show').style.display = "block";
  document.getElementsByClassName('comen')[0].style.display = "none";
}
function Show(){
  document.getElementsByClassName('column')[1].style.display = "flex";
  document.getElementsByClassName('column')[0].style.display = "flex";
  document.getElementById('show').style.display = "none";
  document.getElementsByClassName('comen')[0].style.display = "flex";
}
