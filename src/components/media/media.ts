import { Component } from '@angular/core';
import { MediaProvider } from '../../providers/media/media';

/**
 * Generated class for the MediaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'media',
  templateUrl: 'media.html'
})
export class MediaComponent {  
  constructor(
      public file: File,
      public title: string,
      public description: string,
  ){};
}
