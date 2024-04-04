import { Injectable } from '@angular/core';

interface IModal {
  id: string;
  visible: boolean;
}
@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modals: IModal[] = [];

  constructor() {}

  register(id: string): void {
    if (this.modals.find((modal) => modal.id === id)) {
      return;
    }
    this.modals.push({ id, visible: false });
  }

  unregister(id: string): void {
    this.modals = this.modals.filter((modal) => modal.id !== id);
  }

  isModalOpen(id: string): boolean {
    // if find function returns undefined, return false
    return this.modals.find((modal) => modal.id === id)?.visible || false;
  }

  toggleModal(id: string): void {
    this.modals.map((modal) => {
      if (modal.id === id) {
        modal.visible = !modal.visible;
      }
    });
  }
}
