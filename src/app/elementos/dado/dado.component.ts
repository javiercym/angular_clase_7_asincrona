import { Component,ViewChild,ElementRef  } from '@angular/core';

@Component({
  selector: 'app-dado',
  templateUrl: './dado.component.html',
  styleUrls: ['./dado.component.css']
})
export class DadoComponent {
  
  numero!: number;

  @ViewChild('dado') dado: ElementRef = null;

  constructor() { }

  ngOnInit(): void {
    this.dado = this.dado.nativeElement;
  }

  lanzarDado() {
    //Animacion
    this.dado.nativeElement.style.animation = 'lanzarDado 1s ease-in-out';
    setTimeout(() => {
      this.dado.nativeElement.style.animation = 'none';
    }, 1000);
    
    let nuevoNumero: number;
    // número aleatorio entero entre 1 y 6 (ambos incluidos)
    // this.numero = Math.floor(Math.random() * 6) + 1;

    //Para que no se repita el numero anterior
    do {
      // número aleatorio entero entre 1 y 6 (ambos incluidos)
      nuevoNumero = Math.floor(Math.random() * 6) + 1;
    } while (nuevoNumero === this.numero);
    this.numero = nuevoNumero;
  }

}
