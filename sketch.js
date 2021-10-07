const ranges = [];
const range = 50;
const offset = 10;
const w = 600;
const h = 600;
const len = (w - 2 * offset) / range;
const min = 1;
const max = 100;
const bigoffset = 100;

function setup() {
  frameRate(10);
  createCanvas(w, h);
  background(100);
  for (let i = 0; i < range; i++) {
    ranges.push(random(min, max));
  }
}
let r = 0;
let c = 0;
function draw() {
  clear();
  background(190);
  stroke(100, 20, 20);
  strokeWeight(len);
  ranges.forEach((e, i) => {
    line(
      offset + len * i,
      h - bigoffset,
      offset + len * i,
      h - bigoffset - map(e, min, max, min, h - 2 * bigoffset)
    );
  });
  let ready = false;

  for (let i = r; i < range; i++) {
    if (ready) break;
    for (let j = c; j < range - 1; j++) {
      if (ranges[j + 1] > ranges[j]) {
        const a = ranges[j + 1];
        ranges[j + 1] = ranges[j];
        ranges[j] = a;
        ready = true;
        break;
      }
      if (j == range - 2) {
        c = 0;
        r = i + 1;
      } else {
        r = i;
        c = j;
      }
    }
  }
}
