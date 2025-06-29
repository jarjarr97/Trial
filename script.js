document.getElementById("orderForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const menu = document.getElementById("menu").value;
  const qty = document.getElementById("qty").value;

  const message = `Hello! Saya ${name}, ingin memesan:
☕ Menu: ${menu}
📦 Jumlah: ${qty}

Terima kasih!`;

  const phone = "6281296372239"; // Ganti dengan nomor WA Coffee Shop kamu (pakai format internasional)
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
});
