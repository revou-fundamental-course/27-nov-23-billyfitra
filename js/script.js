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
