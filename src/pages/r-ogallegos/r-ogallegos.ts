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
