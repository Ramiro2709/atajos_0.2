import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {AbstractItemsProvider} from '../../providers/abstract-items/abstract-items';

import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { DetallesPage } from '../detalles/detalles';

/**
 * Generated class for the MostrarTelefonosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mostrar-telefonos',
  templateUrl: 'mostrar-telefonos.html',
})
export class MostrarTelefonosPage {

  items: any[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, private provider:AbstractItemsProvider) {
    console.log("Pagina: Mostrar-telefonos");
    //Para que ande el post
    const httpOptions = { 
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': ''
      })
    };
    var busqueda = navParams.get('busqueda');
    if (busqueda != true)
    {
      this.cargar_telefonos();
    } else {
      this.items = this.provider.items;
      //this.provider.Categoria_id = this.items
    }
  }

  ionViewDidLoad() {
  }

  cargar_telefonos(){
    //console.log("Cargar Telefonos:");
    var longitud : any;
    
    this.items = [];

    ///+++ Convierte a JSON los datos que se le quiere enviar al php
    var datos_consulta = JSON.stringify({
      localidad: this.provider.Localidad_id,
      categoria: this.provider.Categoria_id,
      tipo_localidad: this.provider.Tipo_localidad
    });
    var ip_gettelefonos = this.provider.ip_carpeta+"get_telefonos.php"; //Direccion del php
    ///+++ post subscribe que manda y recibe del php, 
    this.http
    .post<string>(ip_gettelefonos,datos_consulta) // (direccion php,JSON)
    .subscribe((data : any) => //data: informacion de recibe de los echos del php
    {
      longitud = data['lenght'];
      console.log("lengh consulta: "+longitud);
      for(let i = 0; i < longitud; i++){ ///+++ Recibe cada uno de los telefonos y sus datos
        //console.log(data[i]);
        this.items.push({ 
            nombre: data[i][0],
            direccion: data[i][1],
            telefono: data[i][2],
            pagina: data[i][3],
            id: i
          });
      } //Fin For
    },
    (error : any) =>
    {

    });
  } //Fin

  ver_detalles(item){
    //alert(item.text);
    console.log(item);
    this.navCtrl.push(DetallesPage, { //Que vaya a pagina detalles
      item:item
    });
  }
}
