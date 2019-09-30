import Registro from "./registro.js";
import Articulo from "./Articulo.js"

export default class Main {
    constructor() {
        let registro = new Registro(
        )
        document.querySelector("#agregar").addEventListener("click", () => {
            let codigo = Number(document.querySelector("#codigo").value);
            let nombre = document.querySelector("#nombre").value;
            let precio = Number(document.querySelector("#precio").value);
            let cantidad = Number(document.querySelector("#cantidad").value)
            let descripcion = document.querySelector("#descripcion").value;
            let articuloObj = {
                codigo: codigo,
                nombre: nombre,
                precio: precio,
                cantidad: cantidad,
                descripcion: descripcion
            }
            let articulo = new Articulo(articuloObj);
            registro._agregarArticulo(articulo);
        })


        document.querySelector("#buscar").addEventListener("click", ()=>{
            let buscador = document.querySelector("#buscador").value;
            registro._buscarArticulo(buscador);
        });

        document.querySelector("#eliminar").addEventListener('click', () => {
            registro._eliminarArticulo(registro._buscarArticulo(document.querySelector('#artieliminar').value));

            alert('Se elimino tu articulo');

            console.log(registro._articulos.length);
        });
        document.querySelector('#buscar').addEventListener('click', () => {
            let pos = this._buscarArticulo(document.querySelector('#articuloABuscar').value);
            console.log(registro._articulos[pos]);

            alert('Busqueda exitosa');
        });
        

      
      }
}

var main = new Main();