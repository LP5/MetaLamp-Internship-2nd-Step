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

var dropdown = document.querySelectorAll("fieldset.dropdown");

dropdown.forEach(
  function(e) {
    e.querySelector("div.dropdown").addEventListener("click", function() {
      dropdown.forEach(
        function(i) {
          i.querySelector(".dropdown--default").classList.toggle("dropdown--expanded");
        });
    });
  }
);
