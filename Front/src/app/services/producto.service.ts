/*SERVICIO DE PRODUCTO */

import { Injectable } from '@angular/core';
import { Producto } from '../models/Producto';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './Global';

@Injectable()
export class ProductoService {

  public url : string
  constructor(private _http: HttpClient) {

    this.url = Global.url;

  }

  // metodo que sacamos los productos haciendo una peticion a la api

  getProducts(): Observable<any> {
    return this._http.get(this.url+'all');
  }





}
