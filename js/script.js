// Toggle Menu Mobile
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', function () {
    navMenu.classList.toggle('active');
});

// Smooth Scroll
const navLinks = document.querySelectorAll('a[href^="#"]');
navLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        navMenu.classList.remove('active');
    });
});

// Data Menu
const dataMenu = {
    kantin1: { nama: 'Kantin 1', menu: [
        { nama: 'Nasi Goreng Spesial', harga: 'Rp 15.000', foto: 'img/menu-1.jpg' },
        { nama: 'Nasi Uduk', harga: 'Rp 14.000', foto: 'img/menu-2.jpg' },
        { nama: 'Nasi Padang', harga: 'Rp 20.000', foto: 'img/menu-3.jpg' },
        { nama: 'Es Teh Manis', harga: 'Rp 5.000', foto: 'img/menu-4.jpg' }
    ]},
    kantin2: { nama: 'Kantin 2', menu: [
        { nama: 'Mie Ayam Bakso', harga: 'Rp 12.000', foto: 'img/menu-2.jpg' },
        { nama: 'Mie Goreng', harga: 'Rp 12.000', foto: 'img/menu-3.jpg' },
        { nama: 'Pangsit Goreng', harga: 'Rp 8.000', foto: 'img/menu-5.jpg' },
        { nama: 'Es Jeruk', harga: 'Rp 6.000', foto: 'img/menu-6.jpg' }
    ]},
    kantin3: { nama: 'Kantin 3', menu: [
        { nama: 'Ayam Geprek', harga: 'Rp 13.000', foto: 'img/menu-3.jpg' },
        { nama: 'Ayam Geprek Keju', harga: 'Rp 16.000', foto: 'img/menu-1.jpg' },
        { nama: 'Tahu Tempe Geprek', harga: 'Rp 8.000', foto: 'img/menu-5.jpg' },
        { nama: 'Es Teh Manis', harga: 'Rp 5.000', foto: 'img/menu-4.jpg' }
    ]},
    kantin4: { nama: 'Kantin 4', menu: [
        { nama: 'Sate Ayam', harga: 'Rp 18.000', foto: 'img/menu-4.jpg' },
        { nama: 'Soto Ayam', harga: 'Rp 11.000', foto: 'img/menu-2.jpg' },
        { nama: 'Rawon', harga: 'Rp 17.000', foto: 'img/menu-1.jpg' },
        { nama: 'Es Jeruk', harga: 'Rp 6.000', foto: 'img/menu-6.jpg' }
    ]},
    kantin5: { nama: 'Kantin 5', menu: [
        { nama: 'Nasi Padang', harga: 'Rp 20.000', foto: 'img/menu-3.jpg' },
        { nama: 'Nasi Rames', harga: 'Rp 15.000', foto: 'img/menu-1.jpg' },
        { nama: 'Gulai Ayam', harga: 'Rp 18.000', foto: 'img/menu-2.jpg' },
        { nama: 'Es Teh Manis', harga: 'Rp 5.000', foto: 'img/menu-4.jpg' }
    ]},
    kantin6: { nama: 'Kantin 6', menu: [
        { nama: 'Kwetiau', harga: 'Rp 13.000', foto: 'img/menu-2.jpg' },
        { nama: 'Bihun Goreng', harga: 'Rp 12.000', foto: 'img/menu-3.jpg' },
        { nama: 'Capcay', harga: 'Rp 14.000', foto: 'img/menu-5.jpg' },
        { nama: 'Es Jeruk', harga: 'Rp 6.000', foto: 'img/menu-6.jpg' }
    ]},
    kantin7: { nama: 'Kantin 7', menu: [
        { nama: 'Pecel Lele', harga: 'Rp 12.000', foto: 'img/menu-1.jpg' },
        { nama: 'Ayam Bakar', harga: 'Rp 16.000', foto: 'img/menu-3.jpg' },
        { nama: 'Ikan Nila Bakar', harga: 'Rp 18.000', foto: 'img/menu-4.jpg' },
        { nama: 'Es Teh Manis', harga: 'Rp 5.000', foto: 'img/menu-6.jpg' }
    ]},
    kantin8: { nama: 'Kantin 8', menu: [
        { nama: 'Es Campur', harga: 'Rp 10.000', foto: 'img/menu-6.jpg' },
        { nama: 'Es Buah', harga: 'Rp 12.000', foto: 'img/menu-4.jpg' },
        { nama: 'Jus Alpukat', harga: 'Rp 15.000', foto: 'img/menu-5.jpg' },
        { nama: 'Es Jeruk', harga: 'Rp 6.000', foto: 'img/menu-2.jpg' }
    ]},
    kantin9: { nama: 'Kantin 9', menu: [
        { nama: 'Gorengan (5 pcs)', harga: 'Rp 5.000', foto: 'img/menu-5.jpg' },
        { nama: 'Roti Bakar', harga: 'Rp 10.000', foto: 'img/menu-1.jpg' },
        { nama: 'Pisang Goreng', harga: 'Rp 8.000', foto: 'img/menu-3.jpg' },
        { nama: 'Es Teh Manis', harga: 'Rp 5.000', foto: 'img/menu-4.jpg' }
    ]},
    kantin10: { nama: 'Kantin 10', menu: [
        { nama: 'Nasi Sayur Sehat', harga: 'Rp 15.000', foto: 'img/menu-2.jpg' },
        { nama: 'Salad Buah', harga: 'Rp 12.000', foto: 'img/menu-6.jpg' },
        { nama: 'Tumis Brokoli', harga: 'Rp 14.000', foto: 'img/menu-5.jpg' },
        { nama: 'Jus Wortel', harga: 'Rp 10.000', foto: 'img/menu-4.jpg' }
    ]}
};

// Modal Menu
const modal = document.getElementById('menuModal');
const modalClose = document.getElementById('modalClose');
const modalTitle = document.getElementById('modalTitle');
const modalMenuList = document.getElementById('modalMenuList');
const kantinCards = document.querySelectorAll('.kantin-card');

if (kantinCards.length > 0) {
    kantinCards.forEach(function (card) {
        card.addEventListener('click', function () {
            const idKantin = this.getAttribute('data-kantin');
            const data = dataMenu[idKantin];

            if (data) {
                modalTitle.textContent = 'Menu ' + data.nama;
                modalMenuList.innerHTML = '';

                data.menu.forEach(function (item) {
                    const div = document.createElement('div');
                    div.className = 'modal-menu-item';
                    div.innerHTML =
                        '<img src="' + item.foto + '" alt="' + item.nama + '">' +
                        '<div class="item-info">' +
                            '<span class="nama">' + item.nama + '</span>' +
                            '<span class="harga">' + item.harga + '</span>' +
                        '</div>';
                    modalMenuList.appendChild(div);
                });

                modal.classList.add('show');
            }
        });
    });
}

if (modalClose) {
    modalClose.addEventListener('click', function () {
        modal.classList.remove('show');
    });
}

if (modal) {
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.classList.remove('show');
        }
    });
}

// ========== LOGIKA FOTO BERTUMPUK (TENTANG) ==========
// Ambil elemen foto depan dan belakang
const fotoDepan = document.getElementById('fotoDepan');
const fotoBelakang = document.getElementById('fotoBelakang');

// Jika elemen ada di halaman, jalankan fungsinya
if (fotoDepan && fotoBelakang) {
    
    // Saat foto depan diklik -> foto depan pindah ke belakang (tukar)
    fotoDepan.addEventListener('click', function() {
        // Toggle class 'tukar' pada kedua foto
        fotoDepan.classList.toggle('tukar');
        fotoBelakang.classList.toggle('tukar');
    });

    // Saat foto belakang diklik -> foto belakang pindah ke depan (tukar)
    fotoBelakang.addEventListener('click', function() {
        // Sama, toggle class 'tukar' pada kedua foto
        fotoDepan.classList.toggle('tukar');
        fotoBelakang.classList.toggle('tukar');
    });
}

