import { Component } from '@angular/core';
import { ModalComponent } from '../shared/modal/modal.component';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [ModalComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  constructor(public modalService: ModalService) {}

  openModal($event: Event): void {
    $event.preventDefault();
    this.modalService.toggleModal('auth-modal');
  }

  openTestModal($event: Event): void {
    $event.preventDefault();
    this.modalService.toggleModal('test-modal');
  }
}
