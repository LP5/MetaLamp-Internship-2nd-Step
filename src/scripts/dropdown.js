window.onload=function(){
  const checkboxList = document.querySelector("fieldset.checkbox legend");
  checkboxList.addEventListener("click", checkboxExpand);
}

function dropdownJS() {
  document.getElementById("dropdownJS").classList.toggle("expanded");
}

function checkboxExpand() {
  document.getElementById("checkboxExpandable").classList.toggle("checkbox--collapsed");
}


