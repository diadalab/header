'use strict'

function showDropdown() {
  var mobileMenu = document.querySelector('#js-dropdownMobile');
  mobileMenu.classList.toggle('active');
}

var btnMenuMobile = document.querySelector('#js-btn_menu');
btnMenuMobile.addEventListener('click', showDropdown);
