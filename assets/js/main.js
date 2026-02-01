document.getElementById("leadForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = e.target.nombre.value;
  const telefono = e.target.telefono.value;

  // Aquí luego conectamos Make + Supabase
  console.log("Lead:", nombre, telefono);

  window.location.href = "https://wa.me/526622681111";
});
