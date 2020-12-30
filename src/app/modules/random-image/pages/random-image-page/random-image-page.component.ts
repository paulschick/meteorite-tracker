import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'mt-random-image-page',
  templateUrl: './random-image-page.component.html',
  styleUrls: ['./random-image-page.component.scss']
})
export class RandomImagePageComponent implements OnInit {

  randImages = new Array<string>();
  ASTRONOMY_IMAGE = {
    "date":"2020-12-30",
    "explanation":"Yes, but have you seen a movie of Jupiter and Saturn's Great Conjunction? The featured time-lapse video was composed from a series of images taken from Thailand and shows the two giant planets as they angularly passed about a tenth of a degree from each other.  The first Great Conjunction sequence shows a relative close up over five days with moons and cloud bands easily visible, followed by a second video sequence, zoomed out, over 9 days.  Even though Jupiter and Saturn appeared to pass unusually close together on the sky on December 21, 2020, in actuality they were still nearly a billion kilometers apart.  The two gas giants are destined for similar meet ups every 19.86 years.  However, they had not come this close, angularly, for the past 397 years, and will not again for another 60 years.  If you're willing to wait until the year 7541, though, you can see Jupiter  pass directly in front of Saturn.    Gallery: Notable images of the Great Conjunction submitted to APOD",
    "media_type":"video",
    "service_version":"v1",
    "title":"Jupiter and Saturn Great Conjunction: The Movie",
    "url":"https://www.youtube.com/embed/aokGqxVdpz0?rel=0"
  }

  constructor() { }

  receiveNotification(notification: any) {
    this.randImages.push(notification);
  }


  ngOnInit(): void {

    const imageObservable = of(this.ASTRONOMY_IMAGE);
    imageObservable.subscribe(data => console.log(data));
  }

}


