import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ConsultaFilasService } from '../../services/consulta-filas.service';

@Component({
  selector: 'app-tela-consulta',
  templateUrl: './tela-consulta.component.html',
  styleUrls: ['./tela-consulta.component.css']
})
export class TelaConsultaComponent implements OnInit {

  content: any;
  iniciaisPaciente: any;

  constructor(private router: Router, private consultaFilasService: ConsultaFilasService, private getRoute: ActivatedRoute) { }

  ngOnInit() {
    const cpfCns = this.getRoute.snapshot.queryParams['data'];
    const tipo = this.getRoute.snapshot.queryParams['tipo'];
    this.consultaFilasService.getConfig(cpfCns, tipo).subscribe((result: any) => {
      console.log(result.result[0]
      )
      this.iniciaisPaciente = result.result[0].nomePacienteIniciais
      this.content = result.result
    });

  }
}
