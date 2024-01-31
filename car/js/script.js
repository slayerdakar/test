// const icon = document.querySelector('.icon-menu');
// icon.addEventListener('click', function () {
//   document.documentElement.classList.toggle('menu-open');
// });

// document.addEventListener('change', cheked)

// function cheked(e) {
//   const chk = e.target
//   if (chk.tagName === 'input' && chk.type === 'checkbox') {
//     console.log('1')
//   }

// }


document.addEventListener('click', function () {
  var chk = event.target

  if (chk.tagName === 'INPUT' && chk.type === 'checkbox') {
    const valSwitch = parseInt(chk.getAttribute('data-switch'))
    const valElem = document.querySelectorAll("[data-elem]")
    if (chk.checked) {
      valElem.forEach(elem => {
        if (parseInt(elem.getAttribute('data-elem')) === valSwitch) {
          elem.classList.add('active')
        }
      });
    }
    else {
      valElem.forEach(elem => {
        if (parseInt(elem.getAttribute('data-elem')) === valSwitch) {
          elem.classList.remove('active')
        }
      });
    }
  }
})





