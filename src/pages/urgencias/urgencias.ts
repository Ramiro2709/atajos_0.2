import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {CallNumber} from '@ionic-native/call-number';

@Component({
  selector: 'page-urgencias',
  templateUrl: 'urgencias.html'
})
export class UrgenciasPage {

  constructor(public navCtrl: NavController, private CallNumber:CallNumber) {
  }

  Llamar(numero){
    this.CallNumber.callNumber(numero,true)
    .then(res => console.log("Funco",res))
    .catch(err => console.log("No Funco",err))
  }
  
}
