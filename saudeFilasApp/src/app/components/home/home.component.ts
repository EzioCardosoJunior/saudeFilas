import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ConsultaFilasService } from 'src/app/services/consulta-filas.service';
import { Procedimentos } from 'src/app/services/procedimento';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  public tiposServico!: FormGroup;
  descricao: any;
  municipio: any;

  constructor(private router: Router, private consultaDescricao: ConsultaFilasService,
    private procedimentos: Procedimentos) { }

  ngOnInit() {   

    console.log(this.municipio)

    this.tiposServico = new FormGroup({
      TipoServico: new FormControl(0),
      MunicipioCentral: new FormControl(0),
      CentralRegulacaoResp: new FormControl(0),
      DescricaoProcedimento: new FormControl(0)
    })


  };

  buscaDadosPacienteListas() {
   // alert(this.tiposServico.value.TipoServico)
  }

  buscaDescricao() {
    this.descricao = this.procedimentos.DadosConsulta.result
    console.log(this.descricao.result);

  };

  buscaMunicipio() {
    this.municipio = this.procedimentos.MunicipioCentral.result
   console.log(this.municipio)

  };

}

