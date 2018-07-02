// Modal for class room details

var btn = document.getElementsByClassName("trigger");
var modals = document.querySelectorAll(".modal");

for (var i = 0; i < btn.length; i++) {
  var thisBtn = btn[i];
  thisBtn.addEventListener("click", function(){
    var modal = document.getElementById(this.dataset.modal);
    // modal.style.display = "block";
    modal.classList.toggle("show-modal");
}, false);
}

function toggleModal() {
    modal.classList.add("hidden");
    modal.classList.remove("show-modal");
    console.log("test");
}

// function windowOnClick(event) {
//   if (event.target === modals) {
//       console.log("window clicked!");
//   }
// }
function windowOnClick(event) {
	if(event.target.className=="modal show-modal"){
		event.target.className="modal";
    console.log("clicked");
	}
}
console.log(modals);
window.addEventListener("click", windowOnClick);

// $(document).on('click', '.show-modal', function(){
//     $(this).removeClass("show-modal");
// });
