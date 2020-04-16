import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';

import { NYModalModule } from './shared/components/ny_modal/ny_modal.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { NewsService } from './services/news.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    CoreModule,
    HttpClientModule,
    NgbModule,
    NYModalModule,
    ModalModule.forRoot()
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})

export class AppModule { }