
recibirMenus();
function recibirMenus() {
  fetch("/api/menus")
    .then(function (res) {
      return res.json();
    })
    .then(function (datos) {
      let menus = "";
      for (let i = 0; i < datos.length; i++) {
        menus += `
            <div>
                <p>Numero: ${datos[i].numero}</p>
                <p>Primer Plato: ${datos[i].primerPlato}</p>
                <p>Postre: ${datos[i].postre}</p>
                <p>segundoPlato: ${datos[i].segundoPlato}</p>
                <p>Precio: ${datos[i].precio}</p>
            </div>
        
        `;
      }
      document.getElementById("div1").innerHTML = menus;
    });
}