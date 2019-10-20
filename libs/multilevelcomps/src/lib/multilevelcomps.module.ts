import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompLvl0Component } from './comp-lvl0/comp-lvl0.component';
import { CompLvl1aComponent } from './comp-lvl1a/comp-lvl1a.component';
import { CompLvl1bComponent } from './comp-lvl1b/comp-lvl1b.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CompLvl0Component, CompLvl1aComponent, CompLvl1bComponent],
  exports: [CompLvl0Component, CompLvl1aComponent, CompLvl1bComponent]
})
export class MultilevelcompsModule {}
