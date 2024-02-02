
document.addEventListener('click', function (event) {
  const target = event.target

  if (target.type === 'checkbox') {
    const valSwitch = parseInt(target.getAttribute('data-switch'))
    const valElem = document.querySelectorAll("[data-elem]")

    if (!valElem.length) return

    valElem.forEach(elem => {
      if (parseInt(elem.getAttribute('data-elem')) === valSwitch) {
        if (target.checked) elem.classList.add('active')
        else elem.classList.remove('active')
      }
    });
  }
})





