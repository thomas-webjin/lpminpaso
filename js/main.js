// Modal for class room details

var btn = document.getElementsByClassName("trigger");
var modals = document.querySelectorAll(".modal");

for (var i = 0; i < btn.length; i++) {
  var thisBtn = btn[i];
  thisBtn.addEventListener("click", function(){
    var modal = document.getElementById(this.dataset.modal);
    // modal.style.display = "block";
    modal.classList.toggle("show-modal");
    document.body.classList.add("modal-open");
}, false);
}

function toggleModal() {
    modal.classList.add("hidden");
    modal.classList.remove("show-modal");
    console.log("test");
}

function windowOnClick(event) {
	if(event.target.className=="modal show-modal"){
		event.target.className="modal";
    document.body.classList.remove("modal-open");
	}
}
window.addEventListener('click', windowOnClick);
window.addEventListener('touchstart', windowOnClick);

// $(document).on('click', '.show-modal', function(){
//     $(this).removeClass("show-modal");
// });
