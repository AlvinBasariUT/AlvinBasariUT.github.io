
function calculateResistor() {
    var color1 = document.getElementById("color1").value.toLowerCase();
    var color2 = document.getElementById("color2").value.toLowerCase();
    var multiplier = document.getElementById("multiplier").value.toLowerCase();
    var tolerance = document.getElementById("tolerance").value.toLowerCase();

    var nilai_resistor = {
        'hitam': 0,
        'coklat': 1,
        'merah': 2,
        'orange': 3,
        'kuning': 4,
        'hijau': 5,
        'biru': 6,
        'ungu': 7,
        'abu-abu': 8,
        'putih': 9
    };

    var multiplier_values = {
        'hitam': 1,
        'coklat': 10,
        'merah': 100,
        'orange': 1000,
        'kuning': 10000,
        'hijau': 100000,
        'biru': 1000000,
        'ungu': 10000000,
        'abu-abu': 100000000,
        'putih': 1000000000,
        'emas': 0.1,
        'perak': 0.01
    };

    var toleransi = {
        'coklat': 0.01,
        'merah': 0.02,
        'emas': 0.05,
        'perak': 0.10
    };

    if (color1 in nilai_resistor && color2 in nilai_resistor && multiplier in multiplier_values && tolerance in toleransi) {
        var digit1 = nilai_resistor[color1];
        var digit2 = nilai_resistor[color2];
        var multiplier_value = multiplier_values[multiplier];
        var resistor_value = (digit1 * 10 + digit2) * multiplier_value;

        // Calculate tolerance range
        var tolerance_factor = toleransi[tolerance];
        var min_resistor = resistor_value * (1 - tolerance_factor);
        var max_resistor = resistor_value * (1 + tolerance_factor);

        var result = "Nilai resistor: " + resistor_value + " ohm<br>";
        result += "Rentang Nilai: " + min_resistor.toFixed(2) + " ohm - " + max_resistor.toFixed(2) + " ohm";

        document.getElementById("result").innerHTML = result;
    } else {
        document.getElementById("result").innerHTML = "Kode warna tidak valid";
    }
}