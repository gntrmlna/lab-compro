// NAVBAR
fetch("./components/navbar.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("navbar").innerHTML = data;

    // setelah navbar masuk ke DOM
    const btn = document.getElementById('menu-btn');
    const menu = document.getElementById('mobile-menu');

    if(btn && menu){
      btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
      });
    }
  });


fetch("./components/footer.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;
  });

fetch("./components/whatsapp.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("whatsapp").innerHTML = data;
  });

