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

var dropdown = document.querySelectorAll("div.dropdown");

dropdown.forEach(
  function(e) {
    e.addEventListener("click", function() {
      this.querySelector(".dropdown--default").removeEventListener("click", this);
      this.querySelector(".dropdown--default").classList.toggle("dropdown--expanded");
    });
  }
);
