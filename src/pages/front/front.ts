import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MediaProvider } from '../../providers/media/media';
import { SingleFilePage } from '../single-file/single-file';

/**
 * Generated class for the FrontPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-front',
  templateUrl: 'front.html',
})
export class FrontPage {
  printThis: string;
  mediaArray: any;
  stopArray: any;
  stopName: any;

  

  constructor(public navCtrl: NavController, public navParams: NavParams, private mediaProvider: MediaProvider) {
    this.navParams.get('userParams');
    
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad FrontPage');
  }

  onClick(id, userId) {
    console.log(id, userId);
    this.navCtrl.push(SingleFilePage,{
      fileId: id,
      userId: userId,
    })
  }

}
