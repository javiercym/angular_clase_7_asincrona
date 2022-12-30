import { Component } from '@angular/core';

@Component({
  selector: 'app-dado',
  templateUrl: './dado.component.html',
  styleUrls: ['./dado.component.css']
})
export class DadoComponent {
  fondo = document.querySelector('#fondo')
  
  numero!: number;

  ngOnInit(): void {
   
  }
  ngAfterViewInit(){
  this. lanzarDado();
  }

  lanzarDado() {

    if (this.fondo != null) {
      this.fondo.classList.toggle("fondo1")
      this.fondo.classList.toggle("fondo2")
      console.log(this.fondo)
    }else{
      console.log(this.fondo)
    }

    let nuevoNumero: number;
    // número aleatorio entero entre 1 y 6 (ambos incluidos)
    // this.numero = Math.floor(Math.random() * 6) + 1;

    //Para que no se repita el numero anterior
    do {
      nuevoNumero = Math.floor(Math.random() * 6) + 1;
    } while (nuevoNumero === this.numero);
    this.numero = nuevoNumero;
  }

}

