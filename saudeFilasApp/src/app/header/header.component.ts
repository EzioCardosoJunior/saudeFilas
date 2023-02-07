import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public dadosPaciente!: FormGroup;


  constructor(private router: Router) { }

  ngOnInit() {
    this.dadosPaciente = new FormGroup({
      CpfCns: new FormControl(null),
      TipoLista: new FormControl(null)
    })

  };

  buscaDadosPaciente() {
    this.router.navigate(['/app-tela-consulta'], { queryParams: {data: this.dadosPaciente.value.CpfCns} });
    alert(this.dadosPaciente.value.TipoLista)
  }


}
