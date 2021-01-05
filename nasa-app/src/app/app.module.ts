import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormatMassPipe } from './pipes/format-mass.pipe';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AstronomyPicDetailComponent } from './components/astronomy-pic-detail/astronomy-pic-detail.component';
import { AstronomyPicsListComponent } from './components/astronomy-pics-list/astronomy-pics-list.component';
import { AstronomyPicsThumbnailComponent } from './components/astronomy-pics-thumbnail/astronomy-pics-thumbnail.component';
import { AstronomyPicsPageComponent } from './components/astronomy-pics-page/astronomy-pics-page.component';
import { AstronomyPicDetailPageComponent } from './components/astronomy-pic-detail-page/astronomy-pic-detail-page.component';
import { ApdComponent } from './components/apd/apd.component';
import { MeteoriteDisplayComponent } from './components/meteorite-display/meteorite-display.component';
import { MeteoriteDetailComponent } from './components/meteorite-detail/meteorite-detail.component';
import { MeteoriteListComponent } from './components/meteorite-list/meteorite-list.component';
import { HomePageComponent } from './components/home-page/home-page.component';
// import { RandomImageComponent } from './components/random-image/random-image.component';
import { RandomImagePageComponent } from './components/random-image-page/random-image-page.component';

// Material
import { OverlayModule } from '@angular/cdk/overlay';
import { CdkTreeModule } from '@angular/cdk/tree';
import { PortalModule } from '@angular/cdk/portal';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTreeModule } from '@angular/material/tree';

// Additional
import { NasaErrorHandlerService } from './services/nasa-error-handler.service';
import { ObserveBreakpointsDirective } from './directives/observe-breakpoints.directive';
import { CacheInterceptorService } from './interceptors/cache-interceptor.service';
import { ClickHandlerDirective } from './directives/click-handler.directive';

const materialModules = [
  CdkTreeModule,
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatPaginatorModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatButtonToggleModule,
  MatTreeModule,
  OverlayModule,
  PortalModule
];

@NgModule({
  declarations: [
    AppComponent,
    FormatMassPipe,
    SidenavComponent,
    ToolbarComponent,
    AstronomyPicDetailComponent,
    AstronomyPicsListComponent,
    AstronomyPicsThumbnailComponent,
    AstronomyPicsPageComponent,
    AstronomyPicDetailPageComponent,
    ApdComponent,
    MeteoriteDisplayComponent,
    MeteoriteDetailComponent,
    MeteoriteListComponent,
    HomePageComponent,
    // RandomImageComponent,
    RandomImagePageComponent,
    ObserveBreakpointsDirective,
    ClickHandlerDirective
  ],
  imports: [
    HttpClientModule,
    materialModules,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: ErrorHandler, useClass: NasaErrorHandlerService },
    { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptorService, multi: true }
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
