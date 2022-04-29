const body = document.querySelector('body');

function createCircle(evnet) {
  let x = event.x;
  let y = event.y;
  console.log(x)
  let circle = document.createElement('div');
  circle.className = 'circle';
  circle.style = `
    left: ${x - 50}px;
    top: ${y - 50}px;
  `
  document.body.append(circle);

}

body.addEventListener('click', createCircle);
