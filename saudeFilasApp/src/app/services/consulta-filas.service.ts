import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class ConsultaFilasService {
  
  rotaUrl = "https://listadeespera.saude.sc.gov.br:8443/listadeespera/publico/lista/findByCnsOrCpfAndTipoLista/cpfCns/";
  
  constructor(  private http: HttpClient ) { }
  

  getConfig(a: any, b: any) {  
    return this.http.get(this.rotaUrl + a + "/tipoLista/" + b + "/false");  
  }
}
