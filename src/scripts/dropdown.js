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

var dropdown = document.querySelectorAll(".dropdown");
dropdown.forEach(
  function(e) {
    e.addEventListener("click", expand);
  }
);

function expand() {
  dropdown.forEach(
    function(e) {
      e.querySelector(".default").classList.toggle("expanded");
    }
  );
}
