import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StreamingMedia,  StreamingAudioOptions } from '@ionic-native/streaming-media';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private streamingMedia: StreamingMedia) { }



  startAudio() {
    let options: StreamingAudioOptions = {
      successCallback: () => { console.log('Finished Audio') },
      errorCallback: (e) => { console.log('Error: ', e) },
      initFullscreen: false // iOS only!
    };


    this.streamingMedia.playAudio('http://www.wemakedev.com/A001.mp3', options);
  }

  stopAudio() {
    this.streamingMedia.stopAudio();
  }

}
