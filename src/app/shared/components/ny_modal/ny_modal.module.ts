import { ModalComponent } from './ny_modal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [ModalComponent],
    exports: [ModalComponent],
    imports: [CommonModule]
})
export class NYModalModule {}