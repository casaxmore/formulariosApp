import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, Validator, FormArray } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent {

  constructor(private fb: FormBuilder){}

  miFormulario: FormGroup = this.fb.group({
    nombre: [ '', [Validators.required, Validators.minLength(3)]],
    favoritos: this.fb.array( [
      ['Metal Gear', Validators.required],
      ['Space Invaders', Validators.required]
    ], Validators.required)
  });

  nuevoFavorito: FormControl = this.fb.control('', Validators.required)

  get favoritosArr() {
    return this.miFormulario.get('favoritos') as FormArray;
  }

  campoEsValido(campo: string){
    return this.miFormulario.controls[campo].errors &&
           this.miFormulario.controls[campo].touched;
  };

  agregarFavorito(){
    if (this.nuevoFavorito.invalid){return}

    // Primera Forma
    /* this.favoritosArr.push(new FormControl(this.nuevoFavorito.value, Validators.required)); */

    // Con el FormBuilder
    this.favoritosArr.push( this.fb.control(this.nuevoFavorito.value, Validators.required));

    this.nuevoFavorito.reset();
  };

  guardar() {
    if(this.miFormulario.invalid){
      return this.miFormulario.markAllAsTouched();
    }

    console.log('Despues de guardarlo: ', this.miFormulario.value);
    this.miFormulario.reset();
  };

  borrar(index:number) {

    // Primera forma
    /* this.favoritosArr.controls.splice(index, 1); */

    // Segunda forma
    this.favoritosArr.removeAt(index);

    console.log('Despues de borrarlo: ', this.miFormulario.value);
  }

}
