import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Auto } from 'src/app/datos/auto';
import { AutosService } from 'src/app/shared/autos.service';

@Component({
  selector: 'app-detalle-autos',
  templateUrl: './detalle-autos.component.html',
  styleUrls: ['./detalle-autos.component.css']
})
export class DetalleAutosComponent implements OnInit {

  tituloPagina = "Detalle del auto";
  auto: Auto | undefined;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private autosService: AutosService) { }

  ngOnInit(): void {
    let id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.auto = this.autosService.obtenAuto(id);
    this.tituloPagina += ": " + id;
  }
  onBack(): void {
    this.router.navigate(['/autos']);
  }
}