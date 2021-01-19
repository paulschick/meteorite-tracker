import { NgModule } from '@angular/core';
import { GridColumnObserverComponent } from './grid-column-observer.component';
import { GridColumnObserverDirective } from './grid-column-observer.directive';



@NgModule({
  declarations: [GridColumnObserverComponent, GridColumnObserverDirective],
  imports: [
  ],
  exports: [GridColumnObserverComponent, GridColumnObserverDirective]
})
export class GridColumnObserverModule { }
