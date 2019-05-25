import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AssignedAuditsPage } from './assigned-audits';

@NgModule({
  declarations: [
    AssignedAuditsPage,
  ],
  imports: [
    IonicPageModule.forChild(AssignedAuditsPage),
  ],
})
export class AssignedAuditsPageModule {}
