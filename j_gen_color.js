function randomInteger(max) {
  max=Math.floor(Math.random()*(max+1))
  return max;
}

function randomRgbColor() {
  let r = randomInteger(255);
  let g = randomInteger(255);
  let b = randomInteger(255);
  return [r,g,b];
}

function randomHexColor() {
  let [r,g,b] =randomRgbColor();

  let hr = r.toString(16).padStart(2, '0').toUpperCase();
  let hg = g.toString(16).padStart(2, '0').toUpperCase();
  let hb = b.toString(16).padStart(2, '0').toUpperCase();
   dec= ( "#"+ hr+hg+hb);
  return dec;
}

function Color() {
let color = randomHexColor();
document.getElementById('color').value = color;
document.getElementById('text').innerHTML = color;
}

function clickHandler(e) {
Color();
e.preventDefault();
}

document.addEventListener('click', clickHandler);

Color();