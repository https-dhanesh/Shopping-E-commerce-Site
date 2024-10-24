const switchers = [...document.querySelectorAll('.switcher')]

switchers.forEach(item => {
	item.addEventListener('click', function() {
		switchers.forEach(item => item.parentElement.classList.remove('is-active'))
		this.parentElement.classList.add('is-active')
	})
})

function funindex() {
    window.location.href = 'index.html';
  }
  function funshop() {
    window.location.href = 'shop.html';
  }
  function funabout() {
    window.location.href = 'about.html';
  }
  function funcontact() {
    window.location.href = 'contact.html';
  }
  function funsignin() {
    window.location.href = 'signin.html';
  }