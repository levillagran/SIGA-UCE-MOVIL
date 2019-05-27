import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { MenuController } from 'ionic-angular/components/app/menu-controller';
import { CredencialesDTO } from '../../models/credenciales.dto';
import { AutenticationService } from '../../services/autentication.service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  creds: CredencialesDTO = {
    username: "",
    password: ""
  };
  respuesta: boolean = false;

  constructor(public navCtrl: NavController, 
    public menu: MenuController,
    public auth: AutenticationService) {

  }

  ionViewWillEnter() {
    this.menu.swipeEnable(false);
  }
    
  ionViewDidLeave() {
    this.menu.swipeEnable(true);
  }
  
  login1() {
    this.navCtrl.setRoot('DashboardPage');
  }

  login() {
    this.auth.loginIn(this.creds)
      .subscribe(response => {
        response === true ? this.navCtrl.setRoot('DashboardPage') : this.navCtrl.setRoot('HomePage');       
      },
      error => {});    
  }
 
  signup() {
    this.navCtrl.push('SignupPage');
  }

}

