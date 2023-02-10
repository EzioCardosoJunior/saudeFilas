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
  municipioCentral: any;
  descricao: any;
  municipio: any;
  tipoBusca: any;

  constructor(private router: Router, private consultaDescricao: ConsultaFilasService,
    private procedimentos: Procedimentos) { }

  ngOnInit() {
    this.municipioCentral = [
      {
        "codigo": "0",
        "nome": "Município Central",
      },
      {
        "codigo": "262",
        "nome": "Siderópolis",
      },
      {
        "codigo": "273",
        "nome": "Treviso",
      },
      {
        "codigo": "75",
        "nome": "Criciúma",
      }      
    ]

    this.municipio = [{
      "codigo": "0",
      "nome": "Central Reguladora",
    }];

    this.tipoBusca = [
      {
        "codigo": "0",
        "nome": "* Serviços",
      },
      {
        "codigo": "1",
        "nome": "Consultas",
      },
      {
        "codigo": "2",
        "nome": "Exames",
      },
      {
        "codigo": "3",
        "nome": "Cirurgias Eletivas",
      },
      {
        "codigo": "4",
        "nome": "Outros",
      },
    ];


    this.tiposServico = new FormGroup({
      TipoServico: new FormControl(0),
      MunicipioCentral: new FormControl(0),
      CentralRegulacaoResp: new FormControl(0),
      DescricaoProcedimento: new FormControl('0009001')
    })
  };

  buscaDadosPacienteListas() {    
    alert(this.tiposServico.value.MunicipioCentral)
  }

  buscaDescricao() {
    if (this.tiposServico.value.TipoServico == 1) {
      this.descricao = this.procedimentos.DadosConsulta.result
      console.log(this.descricao);
    } else if (this.tiposServico.value.TipoServico == 2) {
      this.descricao = this.procedimentos.DadosExame.result
      console.log(this.descricao);
    } else if (this.tiposServico.value.TipoServico == 3) {
      this.descricao = this.procedimentos.DadosCirurgia.result
      console.log(this.descricao);
    } else if (this.tiposServico.value.TipoServico == 4) {
      this.descricao = this.procedimentos.DadosOutros.result
      console.log(this.descricao);
    }

  };

  buscaMunicipio() {
    if (this.tiposServico.value.MunicipioCentral == 262) {
      this.municipio = [
        {
          "codigo": 106,
          "nome": "Central Reguladora Siderópolis"
        }
      ];
      this.buscaDescricao()
    } else if (this.tiposServico.value.MunicipioCentral == 75) {
      this.municipio = [
        {
          "codigo": 111,
          "nome": "Central Reguladora Criciuma"
        }
      ];
    } else if (this.tiposServico.value.MunicipioCentral == 273) {
      this.municipio = [

        {
          "codigo": 1488,
          "nome": "Central Reguladora Treviso"
        }
      ];
    } else {
      this.municipio = [
        {
          "codigo": 0,
          "nome": "Selecione um Município válido"
        }
      ];
    }

  };

}

