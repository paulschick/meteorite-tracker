import { Component, OnInit } from '@angular/core';
import { AstroPicsService } from '../../services/astro-pics.service';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'mt-astronomy-pics-list',
  templateUrl: './astronomy-pics-list.component.html',
  styleUrls: ['./astronomy-pics-list.component.scss']
})
export class AstronomyPicsListComponent implements OnInit {

  astroPics:any[];

  constructor(private astroPicsService: AstroPicsService) { }

  ngOnInit(): void {
    // this.astroPicsService.getAstroPic().subscribe(
    //   data => {
    //     this.astroPics = data;
    //     of(this.astroPics).subscribe(console.log) // rxjs function for observables
    //     of(this.astroPics).subscribe(pic => console.log(pic.url)) // map, console log specific property
    //   }, error => {
    //     console.log('Failed to fetch images');
    //   }
    // );

    this.astroPicsService.astroPics.subscribe(console.log)
    console.log(this.astroPicsService.astroPicArray)
  }


  public ASTRONOMY_PICS:any[] = [
    {
      "copyright":"Miguel Claro",
      "date":"2020-12-26",
      "explanation":"Clouds of glowing hydrogen gas fill this colorful skyscape in the faint but fanciful constellation Monoceros, the Unicorn. A star forming region cataloged as NGC 2264, the complex jumble of cosmic gas and dust is about 2,700 light-years distant and mixes reddish emission nebulae excited by energetic light from newborn stars with dark interstellar dust clouds. Where the otherwise obscuring dust clouds lie close to the hot, young stars they also reflect starlight, forming blue reflection nebulae. The telescopic image spans about 1.5 degrees or 3 full moons, covering nearly 80 light-years at the distance of NGC 2264. Its cast of cosmic characters includes the the Fox Fur Nebula, whose dusty, convoluted pelt lies left of center, bright variable star S Monocerotis immersed in the blue-tinted haze near center, and the Cone Nebula pointing in from the right side of the frame. Of course, the stars of NGC 2264 are also known as the Christmas Tree star cluster. The triangular tree shape is seen on its side here. Traced by brighter stars it has its apex at the Cone Nebula. The tree's broader base is centered near S Monocerotis.",
      "hdurl":"https://apod.nasa.gov/apod/image/2012/ChristmasTree-ConeNebula-CumeadaObservatoryDSA-net.jpg",
      "media_type":"image",
      "service_version":"v1",
      "title":"Fox Fur, Unicorn, and Christmas Tree",
      "url":"https://apod.nasa.gov/apod/image/2012/ChristmasTree-ConeNebula-CumeadaObservatoryDSA-net1100.jpg"
    },
    {
      "copyright":"Adam Block",
      "date":"2020-12-25",
      "explanation":"Orion always seems to come up sideways on northern winter evenings. Those familiar stars of the constellation of the Hunter are caught above the trees in this colorful night skyscape. Not a star at all but still visible to eye, the Great Nebula of Orion shines below the Hunter's belt stars. The camera's exposure reveals the stellar nursery's faint pinkish glow. Betelgeuse, giant star at Orion's shoulder, has the color of warm and cozy terrestrial lighting, but so does another familiar stellar giant, Aldebaran. Alpha star of the constellation Taurus the Bull, Aldebaran anchors the recognizable V-shape traced by the Hyades Cluster toward the top of the starry frame.","hdurl":"https://apod.nasa.gov/apod/image/2012/WinterSceneBlock.jpg",
      "media_type":"image",
      "service_version":"v1",
      "title":"Northern Winter Night",
      "url":"https://apod.nasa.gov/apod/image/2012/WinterSceneBlock.jpg"
    },
    {
      "copyright":"Martin Pugh",
      "date":"2020-12-24",
      "explanation":"Big, beautiful spiral galaxy NGC 1055 is a dominant member of a small galaxy group a mere 60 million light-years away toward the aquatically intimidating constellation Cetus. Seen edge-on, the island universe spans over 100,000 light-years, a little larger than our own Milky Way galaxy. The colorful, spiky stars decorating this cosmic portrait of NGC 1055 are in the foreground, well within the Milky Way. But the telltale pinkish star forming regions are scattered through winding dust lanes along the distant galaxy's thin disk. With a smattering of even more distant background galaxies, the deep image also reveals a boxy halo that extends far above and below the central bluge and disk of NGC 1055. The halo itself is laced with faint, narrow structures, and could represent the mixed and spread out debris from a satellite galaxy disrupted by the larger spiral some 10 billion years ago.",
      "hdurl":"https://apod.nasa.gov/apod/image/2012/NGC1055_MP.jpg",
      "media_type":"image",
      "service_version":"v1",
      "title":"Portrait of NGC 1055",
      "url":"https://apod.nasa.gov/apod/image/2012/NGC1055_MP_1024c.jpg"
    },
    {
      "copyright":"Miguel Claro",
      "date":"2020-12-26",
      "explanation":"Clouds of glowing hydrogen gas fill this colorful skyscape in the faint but fanciful constellation Monoceros, the Unicorn. A star forming region cataloged as NGC 2264, the complex jumble of cosmic gas and dust is about 2,700 light-years distant and mixes reddish emission nebulae excited by energetic light from newborn stars with dark interstellar dust clouds. Where the otherwise obscuring dust clouds lie close to the hot, young stars they also reflect starlight, forming blue reflection nebulae. The telescopic image spans about 1.5 degrees or 3 full moons, covering nearly 80 light-years at the distance of NGC 2264. Its cast of cosmic characters includes the the Fox Fur Nebula, whose dusty, convoluted pelt lies left of center, bright variable star S Monocerotis immersed in the blue-tinted haze near center, and the Cone Nebula pointing in from the right side of the frame. Of course, the stars of NGC 2264 are also known as the Christmas Tree star cluster. The triangular tree shape is seen on its side here. Traced by brighter stars it has its apex at the Cone Nebula. The tree's broader base is centered near S Monocerotis.",
      "hdurl":"https://apod.nasa.gov/apod/image/2012/ChristmasTree-ConeNebula-CumeadaObservatoryDSA-net.jpg",
      "media_type":"image",
      "service_version":"v1",
      "title":"Fox Fur, Unicorn, and Christmas Tree",
      "url":"https://apod.nasa.gov/apod/image/2012/ChristmasTree-ConeNebula-CumeadaObservatoryDSA-net1100.jpg"
    },
    {
      "copyright":"Adam Block",
      "date":"2020-12-25",
      "explanation":"Orion always seems to come up sideways on northern winter evenings. Those familiar stars of the constellation of the Hunter are caught above the trees in this colorful night skyscape. Not a star at all but still visible to eye, the Great Nebula of Orion shines below the Hunter's belt stars. The camera's exposure reveals the stellar nursery's faint pinkish glow. Betelgeuse, giant star at Orion's shoulder, has the color of warm and cozy terrestrial lighting, but so does another familiar stellar giant, Aldebaran. Alpha star of the constellation Taurus the Bull, Aldebaran anchors the recognizable V-shape traced by the Hyades Cluster toward the top of the starry frame.","hdurl":"https://apod.nasa.gov/apod/image/2012/WinterSceneBlock.jpg",
      "media_type":"image",
      "service_version":"v1",
      "title":"Northern Winter Night",
      "url":"https://apod.nasa.gov/apod/image/2012/WinterSceneBlock.jpg"
    },
    {
      "copyright":"Martin Pugh",
      "date":"2020-12-24",
      "explanation":"Big, beautiful spiral galaxy NGC 1055 is a dominant member of a small galaxy group a mere 60 million light-years away toward the aquatically intimidating constellation Cetus. Seen edge-on, the island universe spans over 100,000 light-years, a little larger than our own Milky Way galaxy. The colorful, spiky stars decorating this cosmic portrait of NGC 1055 are in the foreground, well within the Milky Way. But the telltale pinkish star forming regions are scattered through winding dust lanes along the distant galaxy's thin disk. With a smattering of even more distant background galaxies, the deep image also reveals a boxy halo that extends far above and below the central bluge and disk of NGC 1055. The halo itself is laced with faint, narrow structures, and could represent the mixed and spread out debris from a satellite galaxy disrupted by the larger spiral some 10 billion years ago.",
      "hdurl":"https://apod.nasa.gov/apod/image/2012/NGC1055_MP.jpg",
      "media_type":"image",
      "service_version":"v1",
      "title":"Portrait of NGC 1055",
      "url":"https://apod.nasa.gov/apod/image/2012/NGC1055_MP_1024c.jpg"
    },
    {
      "copyright":"Miguel Claro",
      "date":"2020-12-26",
      "explanation":"Clouds of glowing hydrogen gas fill this colorful skyscape in the faint but fanciful constellation Monoceros, the Unicorn. A star forming region cataloged as NGC 2264, the complex jumble of cosmic gas and dust is about 2,700 light-years distant and mixes reddish emission nebulae excited by energetic light from newborn stars with dark interstellar dust clouds. Where the otherwise obscuring dust clouds lie close to the hot, young stars they also reflect starlight, forming blue reflection nebulae. The telescopic image spans about 1.5 degrees or 3 full moons, covering nearly 80 light-years at the distance of NGC 2264. Its cast of cosmic characters includes the the Fox Fur Nebula, whose dusty, convoluted pelt lies left of center, bright variable star S Monocerotis immersed in the blue-tinted haze near center, and the Cone Nebula pointing in from the right side of the frame. Of course, the stars of NGC 2264 are also known as the Christmas Tree star cluster. The triangular tree shape is seen on its side here. Traced by brighter stars it has its apex at the Cone Nebula. The tree's broader base is centered near S Monocerotis.",
      "hdurl":"https://apod.nasa.gov/apod/image/2012/ChristmasTree-ConeNebula-CumeadaObservatoryDSA-net.jpg",
      "media_type":"image",
      "service_version":"v1",
      "title":"Fox Fur, Unicorn, and Christmas Tree",
      "url":"https://apod.nasa.gov/apod/image/2012/ChristmasTree-ConeNebula-CumeadaObservatoryDSA-net1100.jpg"
    },
    {
      "copyright":"Adam Block",
      "date":"2020-12-25",
      "explanation":"Orion always seems to come up sideways on northern winter evenings. Those familiar stars of the constellation of the Hunter are caught above the trees in this colorful night skyscape. Not a star at all but still visible to eye, the Great Nebula of Orion shines below the Hunter's belt stars. The camera's exposure reveals the stellar nursery's faint pinkish glow. Betelgeuse, giant star at Orion's shoulder, has the color of warm and cozy terrestrial lighting, but so does another familiar stellar giant, Aldebaran. Alpha star of the constellation Taurus the Bull, Aldebaran anchors the recognizable V-shape traced by the Hyades Cluster toward the top of the starry frame.","hdurl":"https://apod.nasa.gov/apod/image/2012/WinterSceneBlock.jpg",
      "media_type":"image",
      "service_version":"v1",
      "title":"Northern Winter Night",
      "url":"https://apod.nasa.gov/apod/image/2012/WinterSceneBlock.jpg"
    },
    {
      "copyright":"Martin Pugh",
      "date":"2020-12-24",
      "explanation":"Big, beautiful spiral galaxy NGC 1055 is a dominant member of a small galaxy group a mere 60 million light-years away toward the aquatically intimidating constellation Cetus. Seen edge-on, the island universe spans over 100,000 light-years, a little larger than our own Milky Way galaxy. The colorful, spiky stars decorating this cosmic portrait of NGC 1055 are in the foreground, well within the Milky Way. But the telltale pinkish star forming regions are scattered through winding dust lanes along the distant galaxy's thin disk. With a smattering of even more distant background galaxies, the deep image also reveals a boxy halo that extends far above and below the central bluge and disk of NGC 1055. The halo itself is laced with faint, narrow structures, and could represent the mixed and spread out debris from a satellite galaxy disrupted by the larger spiral some 10 billion years ago.",
      "hdurl":"https://apod.nasa.gov/apod/image/2012/NGC1055_MP.jpg",
      "media_type":"image",
      "service_version":"v1",
      "title":"Portrait of NGC 1055",
      "url":"https://apod.nasa.gov/apod/image/2012/NGC1055_MP_1024c.jpg"
    },
    {
      "copyright":"Adam Block",
      "date":"2020-12-25",
      "explanation":"Orion always seems to come up sideways on northern winter evenings. Those familiar stars of the constellation of the Hunter are caught above the trees in this colorful night skyscape. Not a star at all but still visible to eye, the Great Nebula of Orion shines below the Hunter's belt stars. The camera's exposure reveals the stellar nursery's faint pinkish glow. Betelgeuse, giant star at Orion's shoulder, has the color of warm and cozy terrestrial lighting, but so does another familiar stellar giant, Aldebaran. Alpha star of the constellation Taurus the Bull, Aldebaran anchors the recognizable V-shape traced by the Hyades Cluster toward the top of the starry frame.","hdurl":"https://apod.nasa.gov/apod/image/2012/WinterSceneBlock.jpg",
      "media_type":"image",
      "service_version":"v1",
      "title":"Northern Winter Night",
      "url":"https://apod.nasa.gov/apod/image/2012/WinterSceneBlock.jpg"
    }
  ]

}
