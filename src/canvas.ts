//https://developer.mozilla.org/ja/docs/Web/API/Canvas_API

const canvas: any = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'green';
ctx.fillRect(10, 10, 150, 100);
