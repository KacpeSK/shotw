import { NgModule } from '@angular/core';
import { AuthModalComponent } from './auth-modal/auth-modal.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [],
  imports: [AuthModalComponent],
  exports: [AuthModalComponent],
})
export class UserModule {}
