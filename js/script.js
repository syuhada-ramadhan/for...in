const hewan = {
  nama: "Kambing Etawa",
  warna: "Putih",
  makan() {
    return "Alhamdulillah";
  },
};

for (let key in hewan) {
  console.log(key, hewan[key]);
}
