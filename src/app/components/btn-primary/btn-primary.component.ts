import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router, RouterModule } from '@angular/router';


type BtnVariants = "primary" | "secondary"

@Component({
  selector: 'btn-primary',
  standalone: true,
  imports: [
    CommonModule, RouterModule
  ],
  templateUrl: './btn-primary.component.html',
  styleUrl: './btn-primary.component.scss'
})
export class BtnPrimaryComponent {
  @Input("btn-text") btnText: string="";
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() variant: BtnVariants = "primary";
  @Input("routerPath") routerPath: string = "";
  @Output("submit") onSubmit = new EventEmitter();
  
  constructor(private router: Router) {

  }
  submit(){
    this.router.navigate([this.routerPath]);
    this.onSubmit.emit();
    
  }
}
