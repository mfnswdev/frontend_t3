import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { DatabaseService } from '../../Services/database.service';


@Component({
  selector: 'app-editar-animal',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './editar-animal.component.html',
  styleUrl: './editar-animal.component.scss'
})
export class EditarAnimalComponent {
  formAnimalEdit!: FormGroup;
  id: string = '';
  editadoSucesso: boolean = false;

  constructor(private formConstrutor: FormBuilder, private bancoService: DatabaseService, private rotas: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.formAnimalEdit = this.formConstrutor.group({
      porcoId: ['', Validators.required],
      paiId: ['', Validators.required],
      maeId: ['', Validators.required],
      dataNasc: ['', Validators.required],
      dataSaida: ['', Validators.required],
      status: ['', Validators.required],
      genero: ['', Validators.required]
    });
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.getAnimal(this.id);
  }

  getAnimal(id: any) {
    this.bancoService.getAnimalByID(id).subscribe(responseData => {
      this.formAnimalEdit.setValue(responseData);
      console.log(id);
      console.log(responseData);
    });
  }

  onSubmit() {


    this.bancoService.editarAnimal(this.id, this.formAnimalEdit.value).subscribe(responseData => {
      if (responseData.status == 200) {
        this.editadoSucesso = true;
        this.rediracionaPrincipal();
      }
    });
  }
  rediracionaPrincipal() {
    setTimeout(() => {
      this.rotas.navigate(['listarAnimais']);
    }, 2000);

  }
}
