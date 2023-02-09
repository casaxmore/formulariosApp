import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit{

  /* miFormulario: FormGroup = new FormGroup({
    'nombre': new FormControl('RTX 4080TI'),
    'precio': new FormControl(1500),
    'existencias': new FormControl(5),
  }) */

  constructor(private fb: FormBuilder) {}

  miFormulario: FormGroup = this.fb.group({
    nombre: [ , [Validators.required, Validators.minLength(3)]],
    precio: [ , [Validators.min(0), Validators.required]],
    existencias: [ , [Validators.min(0), Validators.required]]
  })

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'RTX 4080ti',
      precio: 1600
    })
  }

  campoEsValido(campo: string) {
    return this.miFormulario.controls[campo].errors &&
           this.miFormulario.controls[campo].touched;
  }

  guardar() {

    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }

}
