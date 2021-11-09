
class Pasiente {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad   = parseInt(edad);
    }
}

const pasientes = [];
pasientes.push(new Pasiente("Juan", "45"));
pasientes.push(new Pasiente("Ana", "37"));
pasientes.push(new Pasiente("Pablo", "49"));
pasientes.push(new Pasiente("Franco", "23"));
pasientes.push(new Pasiente("Estebam", "31"));
pasientes.push(new Pasiente("Carlos", "56"));

pasientes.sort(function (a,b){
    if (a.edad > b.edad) {
        return 1;
    }
    if (a.edad < b.edad) {
        return -1;
    }
    return 0;
});

console.log(pasientes);
