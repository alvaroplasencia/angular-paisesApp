import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
    button{margin-right: 5px;}
    `
  ]
})
export class PorRegionComponent {

  regiones: string[] = ["africa", "americas", "asia", "europe", "oceania"];
  regionActiva: string = "";
  paises: Country[] = [];
  hayError: boolean = false;

  constructor(private paisService: PaisService) { }

  activarRegion(region: string) {
    if (region !== this.regionActiva){
      this.regionActiva = region;
      this.buscar(region);
    }

  }

  getClaseCSS(region: string) {
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  buscar(termino:string){
    this.hayError = false
    this.paisService.porRegion(this.regionActiva).subscribe(paises=>{
      this.paises = paises;
    }, (err)=>{
      this.hayError = true;
      this.paises = [];
    });
  }

}
