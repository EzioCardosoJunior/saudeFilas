import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class ConsultaFilasService {
  
  rotaUrl = "https://listadeespera.saude.sc.gov.br:8443/listadeespera/publico/lista/findByCnsOrCpfAndTipoLista/cpfCns/00405186983/tipoLista/2/false"
  
  constructor(  private http: HttpClient ) { }
  

  getConfig() {  
    return this.http.get(this.rotaUrl);  
  }
}
