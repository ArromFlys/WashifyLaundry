document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    window.scrollTo({
      top: target.offsetTop - 100, // sesuaikan offset agar tidak terlalu bawah
      behavior: "smooth"
    });
  });
});

  document.getElementById("orderForm").addEventListener("submit", function(e) {
    e.preventDefault(); // mencegah pengiriman form secara default

    const nama = document.querySelector('input[name="nama"]').value;
    const hp = document.querySelector('input[name="hp"]').value;
    const alamat = document.querySelector('textarea[name="alamat"]').value;
    const layanan = document.querySelector('select[name="layanan"]').value;

    const pesan = `Halo Washify Laundry!%0ASaya ingin melakukan pemesanan dengan detail berikut:%0A%0A🧍 Nama: ${nama}%0A📞 No. HP: ${hp}%0A🏠 Alamat Jemput: ${alamat}%0A🧺 Layanan: ${layanan}%0A%0ATerima kasih!`;

    const nomorTujuan = "628998023803"; // Ganti dengan nomor WA kamu (format internasional tanpa +)

    const waURL = `https://wa.me/${nomorTujuan}?text=${pesan}`;

    window.open(waURL, "_blank"); // buka WA di tab baru
  });