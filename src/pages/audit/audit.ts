import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListAuditDTO } from '../../models/listAudits.dto';

/**
 * Generated class for the AuditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-audit',
  templateUrl: 'audit.html',
})
export class AuditPage {

  item: ListAuditDTO;
  itemCust: ListAuditDTO;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AuditPage');
  }

  viewCustomerData(itemCust){
    this.navCtrl.push("CustomerDataPage", itemCust);
  }

  startAudit(){
    this.navCtrl.push("QuestionFormPage");
  }

}
