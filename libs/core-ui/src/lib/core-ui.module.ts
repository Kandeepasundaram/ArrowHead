import { MultilevelcompsModule } from '@arrow-head/multilevelcomps';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NrwlcontainerComponent } from './nrwlcontainer/nrwlcontainer.component';

@NgModule({
  imports: [BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),CommonModule, MultilevelcompsModule],
  declarations: [DashboardComponent, NrwlcontainerComponent],
  exports: [DashboardComponent, NrwlcontainerComponent]
})
export class CoreUiModule {}
