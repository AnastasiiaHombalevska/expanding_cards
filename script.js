const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
  panel.addEventListener('click', () => {
    remomeActiveClasses();
    panel.classList.add('active');
  })
})

function remomeActiveClasses() {
  panels.forEach(panel => {
    panel.classList.remove('active');
  })
};