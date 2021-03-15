window.onload=function() {
  var checkboxList = document.querySelectorAll("#expandable");
  var checkboxListItem = checkboxList.forEach(
    function(e) {
      e.querySelector("legend").addEventListener("click", checkboxExpand);
    }
  );

  function checkboxExpand(event) {
    const parent = event.target.parentNode;
    parent.classList.toggle("checkbox--collapsed");
  }
}

function dropdownJS() {
  document.getElementById("dropdownJS").classList.toggle("expanded");
}
