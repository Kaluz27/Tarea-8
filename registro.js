export default class Registro {
    constructor() {
        this._articulos = new Array(20)
        this._contadorVector = 0;
        this._lista = [];
    }
    get contadorVector() {
        return this._contadorVector
    }
    get articulos() {
        return this._articulos;
    }


    _agregarArticulo(objArticulo) {
        if (this._contadorVector < 20) {
            this._articulos[this._contadorVector] = objArticulo;
            this._contadorVector++;
            console.log(objArticulo.codigo);

            this._ordenarArticulos();
        } else {
            alert('Ya no puedes agregar mas articulos');
        }

        console.log(this._articulos);

    }

    _buscarArticulo(codigo) {
        for (let i = 0; i < this._lista.contadorVector; i++) {
            if (this._lista.articulos[i].codigo == codigo) {
                return i;
            }
        }
    }

    _eliminarArticulo(posicion) {
        for (posicion; posicion < this._contadorVector; posicion++) {
            this._articulos[posicion] = this._articulos[posicion + 1];
        }
        this._articulos[this._contadorVector - 1] = ""

        this._contadorVector--;

        console.log(this._articulos);
    }

    _ordenarArticulos() {
        for (let k = 0; k < this._contadorVector; k++) {
            for (let i = 0; i < this._contadorVector; i++) {
                for (let j = 0; j < this._contadorVector; j++) {

                    if (this._articulos[i].codigo < this._articulos[j].codigo) {
                        let a = this._articulos[i]
                        this._articulos[i] = this._articulos[j]
                        this._articulos[j] = a
                    }
                }
            }
        }
    }


}