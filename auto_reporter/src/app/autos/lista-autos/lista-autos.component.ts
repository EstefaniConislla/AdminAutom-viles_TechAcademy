import { Component, OnInit } from "@angular/core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Auto } from 'src/app/datos/auto';
import { AutosService } from "src/app/shared/autos.service";

@Component({
    selector: "lista-autos",
    templateUrl: "./lista-autos.component.html"
})
export class ListaAutosComponent implements OnInit {
    faStar = faStar;
    starsList = [];
    tituloListaAutos: string = "Lista de Autos";
    listaAutos: Auto[] = [];
    listaAutosFiltrados: Auto[] = [];
    imageWidth = 200;
    imageMargin = 2;
    muestraImagen: boolean = false;

    private _filtro: string = "";
    get filtro(): string {
        return this._filtro;
    }

    set filtro(filtrarPor: string) {
        filtrarPor = filtrarPor.toLocaleLowerCase();
        this.listaAutosFiltrados = this.listaAutos.filter(
            (auto: Auto) => auto.marca.toLocaleLowerCase().includes(filtrarPor)
        )
        console.log(filtrarPor);
    }

    constructor(private autosService: AutosService) { }

    ngOnInit(): void {
        this.listaAutos = this.autosService.obtenListaAutos();
        this.listaAutosFiltrados = this.listaAutos;[
            {
                id: 1,
                marca: "Audi",
                modelo: "A4",
                anio: 2020,
                color: "Amarillo",
                kilometros: 5000,
                calificacion: 2,
                precio: 5500000,
                imagenUrl: "assets/imagenAutos/autoUno.jpg"
            },
            {
                id: 2,
                marca: "Jaguar",
                modelo: "BX",
                anio: 2020,
                color: "Rojo",
                kilometros: 10500,
                calificacion: 4,
                precio: 2900000,
                imagenUrl: "assets/imagenAutos/autoDos.jpg"
            },
            {
                id: 3,
                marca: "Mercedez Benz",
                modelo: "e-A1",
                anio: 2018,
                color: "Gris",
                kilometros: 18000,
                calificacion: 3,
                precio: 2000000,
                imagenUrl: "assets/imagenAutos/autoTres.png"
            },
            {
                id: 4,
                marca: "Chevrolet",
                modelo: "bX-26",
                anio: 2020,
                color: "Naranja",
                kilometros: 40000,
                calificacion: 1,
                precio: 3500000,
                imagenUrl: "assets/imagenAutos/autoCuatro.jpg"
            },
            {
                id: 5,
                marca: "Audi",
                modelo: "bX-44",
                anio: 2020,
                color: "Azul",
                kilometros: 0,
                calificacion: 3,
                precio: 3500000,
                imagenUrl: "assets/imagenAutos/autoCinco.jpg"
            }
        ];

    }

    muestraImagenes(): void {
        this.muestraImagen = !this.muestraImagen;
    }

    onClickCalificacion(mensaje: string): void {
        alert("Dieron click en la calificacion: " + mensaje);
    }
}