function cekJawaban() {
    const debitIdeal = 500;
    const debit = parseInt(document.getElementById("debitInput").value);

    const video = document.getElementById("videoBendungan");
    const status = document.getElementById("statusText");
    const hasil = document.getElementById("hasil");

    if (isNaN(debit)) {
        hasil.innerHTML = "⚠️ ERROR: Input debit belum valid.";
        return;
    }

    if (debit === debitIdeal) {
        video.src = "Awal.mp4";
        status.innerHTML = "STATUS: STABIL";
        status.style.color = "#22c55e";
        hasil.innerHTML = "✔ Sistem optimal. Bendungan dalam kondisi aman.";
    }
    else if (debit < debitIdeal) {
        video.src = "Hancur.mp4";
        status.innerHTML = "STATUS: KRITIS";
        status.style.color = "#f97316";
        hasil.innerHTML = "⚠ Tekanan air rendah. Struktur bendungan mengalami kerusakan.";
    }
    else {
        video.src = "Stabil.mp4";
        status.innerHTML = "STATUS: DARURAT";
        status.style.color = "#ef4444";
        hasil.innerHTML = "🚨 Debit berlebih! Banjir terjadi di wilayah hilir.";
    }

    video.load();
    video.play();
}
