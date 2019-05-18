import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirebaseModule } from './modules/firebase.module';
import { MaterialModule } from './modules/material.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, FirebaseModule, MaterialModule],
  exports: [FirebaseModule]
})
export class SharedModule {}
