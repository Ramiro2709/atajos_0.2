import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AbstractItemsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AbstractItemsProvider {

  Localidad_id:number;
  Localidad_Nombre:string;
  Tipo_localidad:number;
  Categoria_id:number;
  lastName: string;
  ip_carpeta = 'https://atajossantacruz.000webhostapp.com/Atajos/';
  //ip_carpeta = 'http://localhost/Atajos/';
  items: any;
  //ip_wamp = 'http://192.168.1.37/Atajos/get_telefonos.php';

  constructor(public http: HttpClient) {
    //console.log('Hello AbstractItemsProvider Provider');
    //this.firstName = 'Blank';
    //this.lastName = 'Name';
  }

  setLocalidad(Localidad_id) {
    //this.firstName = firstName;
    //this.lastName = lastName; 
    this.Localidad_id = Localidad_id;      
  }

  getLocalidad() {
    //return this.firstName + ' ' + this.lastName;
    return this.Localidad_id;
  }  

  setCategoria(Categoria_id) {
    //this.firstName = firstName;
    //this.lastName = lastName; 
    this.Categoria_id = Categoria_id;      
  }

  getCategoria() {
    //return this.firstName + ' ' + this.lastName;
    return this.Categoria_id;
  }  

  probar_conexion(){
    var prueba_conexion =  this.ip_carpeta + "conexion.php";
    this.http.get(prueba_conexion)
    .subscribe((data : any) =>
      {
        console.log(prueba_conexion);
        console.log("Encontro IP");

      },
      (error : any) =>
      {
        console.log(prueba_conexion);
        console.log("No encontro");
        this.ip_carpeta = prompt("No se encontro el servidor", "http://192.168.0.36/Atajos/");
        this.probar_conexion();
        // "http://xxx.xxx.x.xxx/pruebas/Ionic/prueba.php"
      });
  }


}
