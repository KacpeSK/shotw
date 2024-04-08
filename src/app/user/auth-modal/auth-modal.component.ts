import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalComponent } from '../../shared/modal/modal.component';
import { ModalService } from '../../services/modal.service';
import { SharedModule } from '../../shared/shared.module';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-auth-modal',
  standalone: true,
  templateUrl: './auth-modal.component.html',
  styleUrl: './auth-modal.component.scss',
  imports: [ModalComponent, SharedModule, LoginComponent, RegisterComponent],
})
export class AuthModalComponent implements OnInit, OnDestroy {
  constructor(public modalService: ModalService) {}

  ngOnInit(): void {
    this.modalService.register('auth-modal');
  }

  ngOnDestroy(): void {
    this.modalService.unregister('auth-modal');
  }
}
