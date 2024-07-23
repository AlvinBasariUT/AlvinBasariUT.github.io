function hitungNilaiAkhir() {
    const jumlahSoal = parseFloat(document.getElementById('jumlahSoal').value);
    const jawabanBenar = parseFloat(document.getElementById('jawabanBenar').value);
    const nilaiTugas = parseFloat(document.getElementById('nilaiTugas').value);
    const tipeTugas = document.getElementById('tipeTugas').value;

    // Hitung nilai ujian
    const nilaiUjian = (jawabanBenar / jumlahSoal) * 100;

    // Jika nilai ujian kurang dari 30, tampilkan pesan "SELAMAT MENGULANG"
    if (nilaiUjian < 30) {
        document.getElementById('hasilNilaiAkhir').textContent = 'SELAMAT MENGULANG';
    } else {
        // Tentukan kontribusi berdasarkan tipe tugas
        let kontribusiUjian;
        let kontribusiTugas;

        if (tipeTugas === 'tuton') {
            kontribusiUjian = 0.7;
            kontribusiTugas = 0.3;
        } else if (tipeTugas === 'tmk') {
            kontribusiUjian = 0.8;
            kontribusiTugas = 0.2;
        } else if (tipeTugas === 'tuweb') {
            kontribusiUjian = 0.5;
            kontribusiTugas = 0.5;
        }

        // Hitung nilai akhir
        let nilaiAkhir;

        if (!isNaN(nilaiTugas) && nilaiTugas > nilaiUjian) {
            // Gunakan nilai tugas jika lebih tinggi daripada nilai ujian
            nilaiAkhir = (kontribusiTugas * nilaiTugas) + (kontribusiUjian * nilaiUjian);
        } else {
            // Gunakan nilai ujian
            nilaiAkhir = nilaiUjian;
        }

        // Pastikan nilai akhir tidak melebihi 100
        nilaiAkhir = Math.min(nilaiAkhir, 100);

        document.getElementById('hasilNilaiAkhir').textContent = `Nilai Akhir: ${nilaiAkhir.toFixed(2)}`;
    }
}
