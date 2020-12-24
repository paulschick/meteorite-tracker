import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';



@NgModule({
  exports: [
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    FormsModule
  ]
})
export class SharedModule { }
