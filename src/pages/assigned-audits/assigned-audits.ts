import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListAuditsService } from '../../services/listAudits.service';
import { ListAuditDTO } from '../../models/listAudits.dto';


/**
 * Generated class for the AssignedAuditsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-assigned-audits',
  templateUrl: 'assigned-audits.html',
})
export class AssignedAuditsPage {

  items: ListAuditDTO[];
  item: ListAuditDTO[];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public listAuditsService: ListAuditsService) {
  }

  ionViewDidLoad() {
    this.listAuditsService.findAll()
      .subscribe(response => {
        this.items = response;
      },
      error => {});
  }

/*   showProdutos(categoria_id : string) {
    this.navCtrl.push('ProdutosPage', {categoria_id: categoria_id});    
  } */

  action(item) {
    this.navCtrl.push("AuditPage", item);
  }
}
