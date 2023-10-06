const jenisGender = ["laki-laki", "perempuan"];
const hari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];

let n = 0;
let umur = Math.floor(Math.random() * 30);
let gender = jenisGender[Math.floor(Math.random() * jenisGender.length)];
let bekerja = !Math.round(Math.random());
let hariIni = hari[Math.floor(Math.random() * hari.length)];
let jumlahHari = Math.floor(Math.random() * 30);

// if
if ( umur >= 18 ) {
  console.log("Umur Anda " + umur + " tahun, Anda sudah bisa mendaftar eKTP");
}

// if else
if ( umur >= 18 ) {
  console.log("Umur Anda " + umur + " tahun, Anda sudah bisa mendaftar eKTP");
} else {
  console.log("Umur Anda " + umur + " tahun, Anda belum bisa mendaftar eKTP");
}

// nested if
if (umur >= 23 && gender === "laki-laki"){
  if(bekerja){
    console.log("Anda adalah laki-laki dewasa pekerja keras");
  } else {
    console.log("Anda adalah laki-laki dewasa, silahkan mencari pekerjaan")
  }
} else if (umur >= 23 && gender === "perempuan") {
  if(bekerja){
    console.log("Anda adalah perempuan dewasa yang luar biasa");
  } else {
    console.log("Anda adalah perempuan dewasa yang belum beruntung")
  }
} else {
  console.log("Anda belum dewasa")
}

// switch case
switch (hariIni) {
  case "Senin":
    console.log("Hari ini Senin, selamat bekerja");
    break;
  case "Selasa":
    console.log("Hari ini Selasa, selamat bekerja");
    break;
  case "Rabu":
    console.log("Hari ini Rabu, selamat bekerja");
    break;
  case "Kamis":
    console.log("Hari ini Kamis, selamat bekerja");
    break;
  case "Jumat":
    console.log("Hari ini Jumat, selamat bekerja");
    break;
  case "Sabtu":
    console.log("Hari ini Sabtu, selamat berlibur");
    break;
  case "Minggu":
    console.log("Hari ini Minggu, selamat berlibur");
    break;
  default:
    console.log("Hari "+ hariIni +" tidak dikenal");
}

// for statement
for (i = 0; i < hari.length; i++) {
  console.log(hari[i]);
}

// while
while (n < hari.length) {
  console.log(hari[n]);
  n++;
}

// do while
do {
  n--
  console.log(hari[n]);
} while (n > 0);

// function

function cariNamaHari(jumlahHari) {
  try {
    const hariIni = new Date();
    const tanggalSetelahNHari = new Date(hariIni);
    
    tanggalSetelahNHari.setDate(tanggalSetelahNHari.getDate() + jumlahHari);
    
    const indeksHari = tanggalSetelahNHari.getDay();
    return hari[indeksHari];
  } catch (error) {
    return "Terjadi kesalahan dalam menghitung tanggal.";
  }
}

const namaHari = cariNamaHari(jumlahHari);

console.log(`${jumlahHari} hari setelah hari ini adalah ${namaHari}.`);