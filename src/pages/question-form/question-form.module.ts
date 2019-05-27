import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuestionFormPage } from './question-form';
import { Camera } from '@ionic-native/camera';

@NgModule({
  declarations: [
    QuestionFormPage,
  ],
  imports: [
    IonicPageModule.forChild(QuestionFormPage),
  ],
  providers: [

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class QuestionFormPageModule {}
