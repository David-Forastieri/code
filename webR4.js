window.addEventListener('load', function () {

  //llamado api de provincias argentinas
  fetch('https://apis.datos.gob.ar/georef/api/provincias?campos=id,nombre&max=20')
    .then(Response => Response.json())
    .then(data => {
      data.provincias.map((e) => {
        let th = document.createElement('th');
        let nombreProvincia = document.createTextNode(e.nombre);
        th.appendChild(nombreProvincia);
        document.getElementById('provincias').appendChild(th);

        //llamado api de municipios argentinos 
        fetch("https://apis.datos.gob.ar/georef/api/municipios?provincia=" + e.nombre + "&campos=id,nombre&max=20")
          .then(Response => Response.json())
          .then(data => {
            let municipios = data.municipios;

            for (let i = 0; i < 21; i++) {

              var td = document.createElement('td');
              var nombreMunicipio = document.createTextNode(municipios[i].nombre);
              console.log(i)
            }
            td.appendChild(nombreMunicipio);

            let tr = document.createElement('tr');
            tr.appendChild(td);
            document.getElementById('municipios').appendChild(tr);
          })

      });

    })
    .catch(function (error) {
      console.log('Hubo un problema con la petición Fetch:' + error.message);
    });

})


