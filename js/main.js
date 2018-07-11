function changeSlider() {
    if (window.innerWidth < 600) {
        $('.bx-wrapper:has(.slider)').hide();
        $('.bx-wrapper:has(.slider-mobile)').show();
    } else {
        $('.bx-wrapper:has(.slider)').show();
        $('.bx-wrapper:has(.slider-mobile)').hide();
    }
}

$(document).ready(function () {
    var slider = $('.hero-banner').bxSlider({
        onSliderLoad: changeSlider,
        onSliderResize: changeSlider,
        auto: true,
        controls: false,
        mode: "fade",
        pager: true
    });
});

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
  if(event.target.className=="close"){
    var show_modal = document.getElementsByClassName('modal show-modal');
  	document.getElementById(show_modal[0].id).className='modal';
    document.body.classList.remove("modal-open");
	}
}


window.addEventListener('click', windowOnClick);
window.addEventListener('touchstart', windowOnClick);

// $(document).on('click', '.show-modal', function(){
//     $(this).removeClass("show-modal");
// });


// $(document).ready(function(){
//       $('.slider').bxSlider({
//         auto: true,
//         controls: false,
//         mode: "fade",
//         pager: true
//       });
// });
