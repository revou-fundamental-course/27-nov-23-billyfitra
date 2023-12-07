// Luas Segitiga
function luas_segitiga() {
    const alas = parseFloat(document.getElementById("alas").value);
    const tinggi = parseFloat(document.getElementById("tinggi").value);
  
    const result = 0.5 * alas * tinggi;
  
    document.getElementById("luas-segitiga").textContent = `L = ${result}`;
  
    return false;
  }
  
  function reset_LS() {
    document.getElementById("formluasSegitiga").reset();
  }
  
  // Keliling Segitiga
  function keliling_segitiga() {
    const sisi_a = parseFloat(document.getElementById("sisi_a").value);
    const sisi_b = parseFloat(document.getElementById("sisi_b").value);
    const sisi_c = parseFloat(document.getElementById("sisi_c").value);
  
    const result = sisi_a + sisi_b + sisi_c;
  
    document.getElementById("keliling-segitiga").textContent = `K = ${result}`;
  
    return false;
  }
  
  function reset_KS() {
    document.getElementById("formkelilingSegitiga").reset();
  }
  
  // Luas Jajar Genjang
  function luas_jajargenjang() {
    const alas = parseFloat(document.getElementById("alas").value);
    const tinggi = parseFloat(document.getElementById("tinggi").value);
  
    const result = alas * tinggi;
  
    document.getElementById("luas-jajargenjang").textContent = `L = ${result}`;
  
    return false;
  }
  
  function reset_LJ() {
    document.getElementById("formluasJajargenjang").reset();
  }
  
  // Keliling Jajar Genjang
  function keliling_jajargenjang() {
    const panjang = parseFloat(document.getElementById("panjang").value);
    const lebar = parseFloat(document.getElementById("lebar").value);
  
    const result = 2 * (panjang * lebar);
  
    document.getElementById("keliling-jajargenjang").textContent = `K = ${result}`;
  
    return false;
  }
  
  function reset_KJ() {
    document.getElementById("formkelilingJajargenjang").reset();
  }