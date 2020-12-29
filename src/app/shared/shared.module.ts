import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormatMassPipe } from './pipes/format-mass.pipe';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [FormatMassPipe],
  exports: [
    FormatMassPipe,
    FormsModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatIconModule
  ]
})
export class SharedModule { }
