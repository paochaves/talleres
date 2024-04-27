"use strict";
console.log("hola");
const $empleados = document.getElementById("empleados");
const $boton = document.getElementById("boton");

$boton.addEventListener("click", () => {
  console.log("hizo click");
});
async function obtenerEmpleados() {
  try {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
    const empleados = await respuesta.json();
    let html = "";
    for (const empleado of empleados) {
      html += `
<tr>
<th scope="row">${empleado.id}</th>
<td>${empleado.name}</td>
<td>${empleado.phone}</td>
<td>${empleado.email}</td>
<td>${empleado.address.city}</td>
<td>${empleado.company.name}</td>
</tr>
`;
    }
    $empleados.innerHTML = html;
  } catch (error) {
    console.log(error);
  }
}
obtenerEmpleados();
