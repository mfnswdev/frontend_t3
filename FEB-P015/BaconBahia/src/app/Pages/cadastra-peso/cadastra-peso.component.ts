import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DatabaseService } from '../../Services/database.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastra-peso',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './cadastra-peso.component.html',
  styleUrl: './cadastra-peso.component.scss'
})
export class CadastraPesoComponent implements OnInit {
  id: any;
  formPesoCreate: FormGroup;
  // constructor(private DatabaseConection: DatabaseConnectionService)
  constructor(private database : DatabaseService, private route: ActivatedRoute ) {
    this.formPesoCreate = new FormGroup({

      dataPesagem: new FormControl('', [Validators.required]),
      porcoPeso: new FormControl('', [Validators.required]),

    });
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
  }


  onSubmit() {
    this.database.postPesagem(this.formPesoCreate.value, this.id).
      subscribe(responseServe => { console.log(responseServe) });
    this.formPesoCreate.reset();

  };
  generateRandomId() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }
}

