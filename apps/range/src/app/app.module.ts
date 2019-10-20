import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { MainContainerComponent } from './main-container/main-container.component';
import { CoreUiModule } from '@arrow-head/core-ui';

@NgModule({
  declarations: [AppComponent, MainContainerComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    HttpClientModule,
    CoreUiModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
