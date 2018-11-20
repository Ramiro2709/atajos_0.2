import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CallNumber} from '@ionic-native/call-number';

import {AbstractItemsProvider} from '../../providers/abstract-items/abstract-items';

/**
 * Generated class for the DetallesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalles',
  templateUrl: 'detalles.html',
})
export class DetallesPage {
  item: any;
  imagen: any;
  constructor(public navCtrl: NavController, private provider:AbstractItemsProvider, public navParams: NavParams, private CallNumber:CallNumber) {
    this.item = navParams.get('item');
    console.log(this.item);
    console.log(this.provider.Categoria_id);


    var categoria = this.provider.Categoria_id;

    if(categoria == 1 ){
      this.imagen = '../../assets/imgs/categ1.png';
    }
    else if(categoria ==2){
      this.imagen = '../../assets/imgs/categ2.png';
    }
    else if(categoria ==3){
      this.imagen = '../../assets/imgs/categ3.png';
    }
    else if(categoria ==4){
      this.imagen = '../../assets/imgs/categ4.png';
    }
    else if(categoria ==5){
      this.imagen = '../../assets/imgs/categ5.png';
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallesPage');
  }

  Llamar(numero){
    console.log(numero);
    this.CallNumber.callNumber(numero,true)
    .then(res => console.log("Funco",res))
    .catch(err => console.log("No Funco",err))
  }
 
}
