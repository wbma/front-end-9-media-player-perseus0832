import { Component } from '@angular/core';
import { MediaProvider } from '../../providers/media/media';

/**
 * Generated class for the SingleFileComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'single-file',
  templateUrl: 'single-file.html'
})
export class SingleFileComponent {

  printThis: string;
  mediaArray: any;
  stopArray: any;
  stopName: any;

  constructor(private mediaProvider: MediaProvider) {
    console.log('Hello SingleFileComponent Component');
  }

  ngOnInit() {
    this.printThis = this.mediaProvider.test;
    this.mediaProvider.getAllMedia().subscribe(data =>{
      console.log(data);
      this.mediaArray = data;

      this.mediaArray.map(media => {
        const temp = media.filename.split('.');
        const thumbName = temp[0] + '-tn320.png';
        media.thumbnail = thumbName;        
      });

      console.log(this.mediaArray);

     
    });
  }

  

}
