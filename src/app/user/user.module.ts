import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModalComponent } from './auth-modal/auth-modal.component';

/*This is not needed SharedModule as import - importing in standalone components*/
//import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, AuthModalComponent],
  exports: [AuthModalComponent],
})
export class UserModule {}
