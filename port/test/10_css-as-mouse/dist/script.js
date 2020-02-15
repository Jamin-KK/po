const w = window.innerWidth;
const p = document.querySelector('p');

const getPercentX = x => Math.round(x / w * 360);
const styleEl = document.documentElement.style;
const setStyle = styleEl.setProperty.bind(styleEl);

document.addEventListener('mousemove', e => {
  const percentX = getPercentX(e.clientX);

  console.log(percentX);

  const gradStart = `hsl(${percentX}, 100%, 41%)`;
  const gradEnd = `hsl(${(percentX + 120) % 360}, 100%, 85%)`;

  setStyle('--grad-start', gradStart);
  setStyle('--grad-end', gradEnd);
  p.setAttribute('data-gradStart', gradStart);
  p.setAttribute('data-gradEnd', gradEnd);
}); 