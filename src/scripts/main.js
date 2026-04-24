'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  spider.style.boxSizing = 'border-box';

  // Получаем параметры элемента (его позицию на экране)
  const coord = wall.getBoundingClientRect();
  const spiderSize = spider.getBoundingClientRect();

  // eslint-disable-next-line no-console
  // console.log(wall.style.borderWidth);

  // Вычитаем позицию элемента из координат клика в окне
  let xc = e.clientX - coord.left - spiderSize.width / 2;
  let yc = e.clientY - coord.top - spiderSize.height / 2;

  // eslint-disable-next-line no-console
  // console.log(xc, yc);

  if (xc <= 0) {
    spiderSize.left = 0;
  }

  const rightEdge = wall.clientWidth - spiderSize.width;

  if (xc > rightEdge) {
    xc = rightEdge;
  }

  if (yc < 0) {
    spiderSize.top = 0;
  }

  const bottomEdge = wall.clientHeight - spiderSize.height;

  if (yc > bottomEdge) {
    yc = bottomEdge;
  }

  spider.style.position = 'absolute';
  spider.style.left = xc + 'px';
  spider.style.top = yc + 'px';
});
