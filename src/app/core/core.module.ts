import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NewsComponent } from './news/news.component';
import { HeaderComponent } from './header/header.component';
import { NYModalModule } from './../shared/components/ny_modal/ny_modal.module';

@NgModule({
    declarations: [
        HeaderComponent,
        NewsComponent
    ],
    exports: [
        HeaderComponent,
        NewsComponent
    ],
    imports: [
        CommonModule,
        NYModalModule
    ]
})
export class CoreModule {}