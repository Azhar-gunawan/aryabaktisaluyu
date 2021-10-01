$(document).ready(function() {
    $('.carousel').carousel({
        interval: 3500
    })
})

const fooMouseover = document.getElementById('footer')
fooMouseover.addEventListener('mousemove', function(e) {
  e.preventDefault();
  let imgLayer = document.querySelectorAll('.img_layer')
  imgLayer.forEach(function (item) {
    let dataSpeed = item.getAttribute('data-speed')
    let x = (window.innerWidth - e.pageX * parseInt(dataSpeed)) / 100;
    let y = (window.innerHeight - e.pageY * parseInt(dataSpeed)) / 100;
    item.style.transform = `translate(${x}%, ${y}%)`
  });
});