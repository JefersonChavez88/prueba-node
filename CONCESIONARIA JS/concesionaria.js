
let autos = require('./autos');

let concesionaria = {

    autos: autos,
    buscarAuto: function (patente) {
        let autoFil = autos.filter(function (auto) {
            return auto.patente == patente;
        });
        if (autoFil.length > 0 ) {
            return autoFil[0];
        }else {
            return null;
        }
    }
};
console.log(concesionaria.buscarAuto("JJK11"));
