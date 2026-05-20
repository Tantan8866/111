const cursor = document.getElementById('custom-cursor');
const follower = document.getElementById('cursor-follower');
document.addEventListener('mousemove', (e) => {
  cursor.style.transform = `translate(${e.clientX-10}px, ${e.clientY-10}px)`;
  follower.style.transform = `translate(${e.clientX-30}px, ${e.clientY-30}px)`;
});

const magnets = document.querySelectorAll('.magnetic-item');
magnets.forEach(el => {
  el.addEventListener('mousemove', (e) => {
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left - r.width/2;
    const y = e.clientY - r.top - r.height/2;
    el.style.transform = `translate(${x*0.3}px, ${y*0.3}px)`;
  });
  el.addEventListener('mouseleave', () => {
    el.style.transform = 'translate(0,0)';
  });
});

let cart = [];
function addToCart(name, price) {
  const item = cart.find(i => i.name === name);
  if (item) item.quantity++;
  else cart.push({ name, price, quantity: 1 });
  alert(name + " 已加入购物车");
}