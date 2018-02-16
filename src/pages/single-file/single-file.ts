import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MediaProvider } from '../../providers/media/media';
import { Subscriber } from 'rxjs/Subscriber';

/**
 * Generated class for the SingleFilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-single-file',
  templateUrl: 'single-file.html',
})
export class SingleFilePage {
  public id;
         userId;

  constructor(public navCtrl: NavController, public navParams: NavParams, private mediaProvider: MediaProvider) {
    this.id = navParams.get('fileId');
    this.userId = navParams.get('userId');
    console.log(this.id)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SingleFilePage');
  }

  printThis: string;
  mediaArray1: any;
  commentArray: any = [];
  likeArray: any = [];
  userArray: any;
  picInfo: any;
  title: any;
  comment: any;
  like: any;
  username: any;
  descrpt: any;
 

  ngOnInit() {

      this.mediaProvider.getMediaById(this.id).subscribe(data => {
      console.log(data);
      this.mediaArray1 = data;
      this.picInfo = this.mediaArray1.filename;
      this.title = this.mediaArray1.title;
      this.descrpt = this.mediaArray1.description;
      console.log(this.picInfo, this.title, this.descrpt);
     });

     this.mediaProvider.getComment(this.id).subscribe(data => {
      console.log(data);
      this.commentArray = data;
      this.comment = this.commentArray.length;
      console.log(this.comment);
     });

     this.mediaProvider.getLike(this.id).subscribe(data => {
      console.log(data);
      this.likeArray = data;
      this.like = this.likeArray.length;
      console.log(this.like);
   });

    this.mediaProvider.getUserData(this.userId).subscribe(data => {
      console.log(data);
      this.userArray = data;
      this.username = this.userArray.username;
    });
    

  }

  

}
