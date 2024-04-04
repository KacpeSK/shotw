import {
  Component,
  Input,
  ElementRef,
  AfterViewInit,
  Renderer2,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent implements AfterViewInit {
  @Input() modalID: string = '';

  constructor(
    public modalService: ModalService,
    public el: ElementRef,
    private renderer: Renderer2
  ) {}

  closeModal(): void {
    this.modalService.toggleModal(this.modalID);
  }

  ngAfterViewInit(): void {
    this.renderer.appendChild(document.body, this.el.nativeElement);
  }
}
