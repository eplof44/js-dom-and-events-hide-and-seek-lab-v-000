function getFirstSelector (selector) {
  return document.querySelector(selector);
}

function nestedTarget () {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const x = document.querySelectorAll('ul.ranked-list li');

  for (let i = 0; i < x.length; i++) {
    x[i].innerHTML = parseInt(x[i].innerHTML) + n;
  }
}

function deepestChild () {
  const gn = document.querySelector('div#grand-node');
  const div = gn.querySelectorAll('div')[3];
  return div;

}
