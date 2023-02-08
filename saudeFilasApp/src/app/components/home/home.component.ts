import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  public tiposServico!: FormGroup;


  constructor(private router: Router) { }

  ngOnInit() {
    //this.tiposServico.value.TipoLista=1
    
    this.tiposServico = new FormGroup({
      TipoServico: new FormControl(0)
    })


  };

  buscaDadosPacienteListas() {
    alert(this.tiposServico.value.TipoServico)
  }


}