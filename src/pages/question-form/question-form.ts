import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

/**
 * Generated class for the QuestionFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-question-form',
  templateUrl: 'question-form.html',
})
export class QuestionFormPage {

  image: string = null;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionFormPage');
  }

  getPicture(){
    /* let options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      targetWidth: 1000,
      targetHeight: 1000,
      quality: 100
    }
    this.camera.getPicture( options )
    .then(imageData => {
      this.image = `data:image/jpeg;base64,${imageData}`;
    })
    .catch(error =>{
      console.error( error );
    }); */
  }

}
