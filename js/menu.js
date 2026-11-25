// ========== DATA SIMULASI PROFIL & MENU STAN ==========
// Kamu bisa edit data ini untuk setiap kantin
const dataKantin = {
    1: {
        nama: "Kantin 1",
        desc: "Menyediakan masakan rumahan dengan cita rasa khas Jawa yang lezat dan murah.",
        gambar: "img/kantin-1.jpg",
        makanan: [
            { nama: "Nasi Goreng Spesial", harga: "Rp 15.000", foto: "img/menu-1.jpg" },
            { nama: "Nasi Uduk", harga: "Rp 14.000", foto: "img/menu-2.jpg" },
            { nama: "Nasi Padang", harga: "Rp 20.000", foto: "img/menu-3.jpg" }
        ],
        minuman: [
            { nama: "Es Teh Manis", harga: "Rp 5.000", foto: "img/menu-4.jpg" },
            { nama: "Es Jeruk", harga: "Rp 6.000", foto: "img/menu-5.jpg" }
        ]
    },
    2: {
        nama: "Kantin 2",
        desc: "Pusatnya mie ayam dan bakso urat. Kuah gurih, porsi mantap!",
        gambar: "img/kantin-2.jpg",
        makanan: [
            { nama: "Mie Ayam Bakso", harga: "Rp 12.000", foto: "img/menu-2.jpg" },
            { nama: "Mie Goreng", harga: "Rp 12.000", foto: "img/menu-3.jpg" },
            { nama: "Pangsit Goreng", harga: "Rp 8.000", foto: "img/menu-5.jpg" }
        ],
        minuman: [
            { nama: "Es Jeruk", harga: "Rp 6.000", foto: "img/menu-6.jpg" },
            { nama: "Air Mineral", harga: "Rp 4.000", foto: "img/menu-4.jpg" }
        ]
    },
    3: {
        nama: "Kantin 3",
        desc: "Buat pencinta pedas, ayam geprek di sini juara! Sambalnya nampol.",
        gambar: "img/kantin-3.jpg",
        makanan: [
            { nama: "Ayam Geprek", harga: "Rp 13.000", foto: "img/menu-3.jpg" },
            { nama: "Ayam Geprek Keju", harga: "Rp 16.000", foto: "img/menu-1.jpg" },
            { nama: "Tahu Tempe Geprek", harga: "Rp 8.000", foto: "img/menu-5.jpg" }
        ],
        minuman: [
            { nama: "Es Teh Manis", harga: "Rp 5.000", foto: "img/menu-4.jpg" },
            { nama: "Es Coklat", harga: "Rp 8.000", foto: "img/menu-6.jpg" }
        ]
    },
    4: {
        nama: "Kantin 4",
        desc: "Menyediakan aneka macam makanan dan minuman dengan cita rasa rumahan yang lezat dan harga yang bersahabat.",
        gambar: "img/kantin-4.jpg", // Pastikan siapkan gambar stan (lebar)
        makanan: [
            { nama: "Nasi Lalapan Ayam", harga: "Rp 10.000", foto: "img/menu-1.jpg" },
            { nama: "Nasi Orek Telur", harga: "Rp 9.000", foto: "img/menu-2.jpg" },
            { nama: "Nasi Telur Balado", harga: "Rp 10.000", foto: "img/menu-3.jpg" },
            { nama: "Lontong Tahu Tek", harga: "Rp 10.000", foto: "img/menu-4.jpg" },
            { nama: "Nasi Orek Bakar", harga: "Rp 9.000", foto: "img/menu-5.jpg" }
        ],
        minuman: [
            { nama: "Es Jeruk", harga: "Rp 5.000", foto: "img/menu-6.jpg" },
            { nama: "Kopi Hitam", harga: "Rp 4.000", foto: "img/menu-1.jpg" },
            { nama: "Es Teh", harga: "Rp 5.000", foto: "img/menu-2.jpg" },
            { nama: "Jeruk Hangat", harga: "Rp 4.000", foto: "img/menu-3.jpg" },
            { nama: "Wedang Uwuh", harga: "Rp 5.000", foto: "img/menu-4.jpg" }
        ]
    }
    // Kamu bisa tambah data Kantin 5 - 10 di sini dengan format yang sama
};

// ========== LOGIKA JS UNTUK PINDAH VIEW ==========
const viewDaftar = document.getElementById('daftar-kantin-view');
const viewDetail = document.getElementById('detail-stan-view');

function bukaKantin(id) {
    // 1. Ambil data kantin
    const data = dataKantin[id];
    if (!data) {
        alert("Data kantin belum tersedia.");
        return;
    }

    // 2. Sembunyikan daftar, tampilkan detail
    viewDaftar.style.display = 'none';
    viewDetail.style.display = 'block';
    
    // 3. Scroll ke atas biar user lihat judulnya
    window.scrollTo(0, 0);

    // 4. Isi data profil
    document.getElementById('judul-stan').innerText = data.nama;
    document.getElementById('nama-stan').innerText = data.nama;
    document.getElementById('desc-stan').innerText = data.desc;
    document.getElementById('img-stan').src = data.gambar;

    // 5. Kosongkan list menu
    const listMakanan = document.getElementById('list-makanan');
    const listMinuman = document.getElementById('list-minuman');
    listMakanan.innerHTML = '';
    listMinuman.innerHTML = '';

    // 6. Masukkan data Makanan
    data.makanan.forEach(item => {
        listMakanan.innerHTML += `
            <div class="m-card">
                <img src="${item.foto}" alt="${item.nama}">
                <div class="m-card-info">
                    <h4>${item.nama}</h4>
                    <p class="price">${item.harga}</p>
                </div>
            </div>
        `;
    });

    // 7. Masukkan data Minuman
    data.minuman.forEach(item => {
        listMinuman.innerHTML += `
            <div class="m-card">
                <img src="${item.foto}" alt="${item.nama}">
                <div class="m-card-info">
                    <h4>${item.nama}</h4>
                    <p class="price">${item.harga}</p>
                </div>
            </div>
        `;
    });
}

function kembaliKeDaftar() {
    // Sembunyikan detail, munculkan daftar
    viewDetail.style.display = 'none';
    viewDaftar.style.display = 'block';
    window.scrollTo(0, 0);
}