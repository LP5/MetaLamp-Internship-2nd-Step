window.onload=function() {
  var checkboxList = document.querySelectorAll("fieldset.checkbox--collapsed");
  var checkboxListItem = checkboxList.forEach(
    function(e) {
      e.querySelector("legend").addEventListener("click", checkboxExpand);
    }
  );
  function checkboxExpand() {
  checkboxList.forEach(
    function(i) {
      i.classList.toggle("checkbox--collapsed");
    }
  );
}
}

function dropdownJS() {
  document.getElementById("dropdownJS").classList.toggle("expanded");
}




