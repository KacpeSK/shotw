import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalComponent } from '../../shared/modal/modal.component';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-auth-modal',
  standalone: true,
  templateUrl: './auth-modal.component.html',
  styleUrl: './auth-modal.component.scss',
  imports: [ModalComponent],
})
export class AuthModalComponent implements OnInit, OnDestroy {
  constructor(public modalService: ModalService) {}

  ngOnInit(): void {
    this.modalService.register('auth-modal');
    this.modalService.register('test-modal');
  }

  ngOnDestroy(): void {
    this.modalService.unregister('auth-modal');
    this.modalService.unregister('test-modal');
  }
}
