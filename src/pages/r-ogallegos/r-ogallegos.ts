import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { ROGallegosPage } from '../r-ogallegos/r-ogallegos';
import { MostrarTelefonosPage } from '../mostrar-telefonos/mostrar-telefonos';

import {AbstractItemsProvider} from '../../providers/abstract-items/abstract-items';

import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'page-r-ogallegos',
  templateUrl: 'r-ogallegos.html'
})
export class ROGallegosPage {
  nombre : string;
  constructor(public navCtrl: NavController, private provider:AbstractItemsProvider,public http: HttpClient) {
    console.log("ROGallegosPage");
    console.log(provider.getLocalidad());
    this.nombre = provider.Localidad_Nombre;
    //Para que ande el post
    const httpOptions = { 
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': ''
      })
    };

    var datos_consulta_cat = JSON.stringify({
      "localidad": this.provider.Localidad_id,
      "tipo_localidad": this.provider.Tipo_localidad,
    });

    var ip_categoria = this.provider.ip_carpeta+"consulta_categoria.php";
    console.log(ip_categoria);
    var array_cantidad = [];
    this.http
    .post<string>(ip_categoria,datos_consulta_cat) // (direccion php,JSON)
    .subscribe((data : any) => //data: informacion de recibe de los echos del php
    {
      for(let i = 0; i < 7; i++){ ///+++ Recibe cada uno de los telefonos y sus datos
        //console.log(data[i]);
        array_cantidad.push({ 
            cant: data[i],
          });
        }
        console.log(array_cantidad);
    },
    (error : any) =>
    {

    });

  }// Fin constructor

  asign_cat(id_cat){
    /*
    this.provider.setCategoria(id_cat);
    console.log(this.provider.getCategoria())
    */
    this.provider.Categoria_id = id_cat;
    console.log(this.provider.Categoria_id);
    this.navCtrl.push(MostrarTelefonosPage);

  }
  /*
  goToROGallegos(params){
    if (!params) params = {};
    this.navCtrl.push(ROGallegosPage);
  }
  */
}
