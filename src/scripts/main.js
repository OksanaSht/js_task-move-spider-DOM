'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');
  // Перевірка чи клік всередині стіни

  if (e.target !== wall) {
    return;
  }

  const wallRect = { left: wall.offsetLeft, top: wall.offsetTop };

  // const spiderRect = spider.getBoundingClientRect();

  // Використовуй offsetWidth/Height для врахування бордерів
  let x = e.clientX - wallRect.left - spider.offsetWidth / 2;
  let y = e.clientY - wallRect.top - spider.offsetHeight / 2;

  // Обмеження з урахуванням бордерів стіни
  const maxX = wall.offsetWidth - spider.offsetWidth;
  const maxY = wall.offsetHeight - spider.offsetHeight;

  x = Math.max(0, Math.min(x, maxX));
  y = Math.max(0, Math.min(y, maxY));
  spider.style.position = 'absolute';
  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;
});

/* document.addEventListener('click', (e) => {
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
    xc = 0;
  }

  const rightEdge = wall.clientWidth - spiderSize.width;

  if (xc > rightEdge) {
    xc = rightEdge;
  }

  if (yc < 0) {
    yc = 0;
  }

  const bottomEdge = wall.clientHeight - spiderSize.height;

  if (yc > bottomEdge) {
    yc = bottomEdge;
  }

  spider.style.position = 'absolute';
  spider.style.left = xc + 'px';
  spider.style.top = yc + 'px';
});
 */
