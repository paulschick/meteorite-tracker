import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'mt-detail',
  templateUrl: './meteorite-detail.component.html',
  styles: [`
    .bold { font-weight: bold; }
  `]
})
export class MeteoriteDetailComponent implements OnChanges {
  @Input() meteorite:any;
  @Input() filterBy: string;
  @Input() sortBy: string;
  visibleMeteorites: string[] = [];

  ngOnChanges() {
    if(this.meteorite) {
      this.filterMeteorites(this.filterBy);
    }

    // this.sortBy === 'name'
    //   ? this.visibleMeteorites.sort(sortByNameAsc)
    //   : this.visibleMeteorites.sort(sortByMassDesc);
  }

  filterMeteorites(filter) {
    if(filter === 'all') {
      this.visibleMeteorites = this.meteorite.slice(0);
    } else {
      this.visibleMeteorites = this.meteorite.filter(meteor => {
        return meteor.name.toLocaleLowerCase() === 'filter';
      })
    }
  }
}

// function sortByNameAsc(s1, s2) {
//   if (s1.name > s2.name) return 1
//   else if (s1.name === s2.name) return 0
//   else return -1
// }

// function sortByMassDesc(s1, s2) {
//   // this is not the right logic
//   // just a placeholder to get connections right
//   // probably need to convert to number and do > comparison
//   return s2.mass.length - s1.mass.lenth
// }
