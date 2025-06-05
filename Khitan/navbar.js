const indicator = document.getElementById('indicator');
const list = document.querySelectorAll('.list');

function activeLink(e) {
  e.stopPropagation(); // supaya tidak meng-trigger document click

  // Hapus semua kelas 'active' dari semua list
  list.forEach(item => item.classList.remove('active'));
  this.classList.add('active');

  // Tampilkan indikator dan posisikan ke elemen aktif
  indicator.classList.add('active');
  const left = this.offsetLeft;
  const width = this.offsetWidth;

  indicator.style.transform = `translateX(${left}px)`;
  indicator.style.width = `${width}px`;
}

// Tambahkan event click untuk semua list
list.forEach(item => item.addEventListener('click', activeLink));

// Saat klik di luar list, sembunyikan indikator
document.addEventListener('click', () => {
  indicator.classList.remove('active');
  list.forEach(item => item.classList.remove('active'));
});

window.addEventListener('resize', () => {
  const activeItem = document.querySelector('.list.active');
  if (activeItem) {
    const left = activeItem.offsetLeft;
    const width = activeItem.offsetWidth;
    indicator.style.transform = `translateX(${left}px)`;
    indicator.style.width = `${width}px`;
  }
});