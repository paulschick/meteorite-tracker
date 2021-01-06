import { Component, OnInit, OnDestroy } from '@angular/core';
import { IApd } from '../../models/apd.model';
import { NasaError } from '../../models/nasaErrors.model';
import { ActivatedRoute } from '@angular/router';
import { LoaderService } from '../../services/loader.service';
import { Subscription } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-apd',
  templateUrl: './apd.component.html',
  styleUrls: ['./apd.component.scss']
})
export class ApdComponent implements OnInit, OnDestroy {
  apd:IApd;
  apdUrl:string;
  // loaderSubscription:Subscription;
  // loading:boolean = true;
  isImageLoading:boolean;

  constructor(private route: ActivatedRoute,
              private loaderService: LoaderService) {  }

  ngOnInit() {

    this.isImageLoading = true;

    // this.loaderSubscription = this.loaderService.isLoading
    //   .pipe(distinctUntilChanged())
    //   .subscribe((isLoading) => {
    //     console.log(`APD Component Loading: ${isLoading}`);
    //     this.loading = isLoading;
    //   });

    let resolvedApd: IApd | NasaError = this.route.snapshot.data['resolvedApd'];

    if (resolvedApd instanceof NasaError) {
      console.log(`Apd Component error: ${resolvedApd.additionalMessage}`);
    } else {
      this.apd = resolvedApd[0];
      this.apdUrl = this.apd.url;
    }
  }

  hideImageLoader() {
    this.isImageLoading = false;
  }

  ngOnDestroy() {
    // this.loaderSubscription.unsubscribe;
  }
}
