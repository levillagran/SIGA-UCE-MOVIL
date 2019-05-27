import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListAuditDTO } from '../../models/listAudits.dto';

/**
 * Generated class for the CustomerDataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-customer-data',
  templateUrl: 'customer-data.html',
})
export class CustomerDataPage {

  itemCust: ListAuditDTO;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.itemCust = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerDataPage');
  }

}
