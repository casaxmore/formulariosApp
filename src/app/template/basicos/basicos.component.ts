import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  initForm = {
    producto: 'RTX 3060',
    precio: 10,
    existencias: 10
  }

  guardar() {
    /* console.log(this.miFormulario); */
    console.log('Posteo correcto');
    this.miFormulario.resetForm({
      producto: '???',
      precio: 0,
      existencias: 0
    });
  }

  nombreValido(): boolean {
    return this.miFormulario?.controls['producto']?.invalid &&
           this.miFormulario?.controls['producto']?.touched
  }

  precioValido(): boolean {
    return this.miFormulario?.controls['precio']?.touched &&
           this.miFormulario?.controls['precio']?.invalid

  }

}
