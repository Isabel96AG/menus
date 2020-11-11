
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
function anyadir() {
  const numero = document.getElementById("numero").value;
  const  primerPlato= document.getElementById("primerPlato").value;
  const postre = document.getElementById("postre").value;
  const segundoPlato = document.getElementById("segundoPlato").value;
  const precio = document.getElementById("precio").value;
 

  const menu = {
    numero,
    primerPlato,
    postre,
    segundoPlato,
    precio
  
  };

  fetch("/api/nuevoMenu", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(menu),
  })
    .then(function (res) {
      return res.json();
    })
    .then(function (datos) {
      console.log(datos);
    
    });
}
function modificar() {
  const numero = document.getElementById("cambiaMenu").value;
    fetch("/api/editarMenu", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({numero:numero}),
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (datos) {
        console.log(datos);
  
      });
  }

function Borrar() {
  const numero = document.getElementById("numero").value;
  const primerPlato= document.getElementById("primerPlato").value;
  const postre = document.getElementById("postre").value;
  const segundoPlato = document.getElementById("segundoPlato").value;
  const precio = document.getElementById("precio").value;
 

  const menu = {
    numero,
    primerPlato,
    postre,
    segundoPlato,
    precio
  
  };

  fetch("/api/borrarMenu", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(menu),
  })
    .then(function (res) {
      return res.json();
    })
    .then(function (datos) {
      console.log(datos);
    
    });
}