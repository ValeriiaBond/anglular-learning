import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-training',
  templateUrl: './post-training.component.html',
  styleUrls: ['./post-training.component.scss']
})
export class PostTrainingComponent implements OnInit {

  linkToImg = 'https://w7.pngwing.com/pngs/104/669/png-transparent-jake-the-dog-sticker-telegram-%D0%9D%D0%B0%D0%BA%D0%BB%D0%B5%D0%B9%D0%BA%D0%B0-others-poster-smiley-sticker.png'
  message = ''

  constructor() {
    setTimeout(() => {
      this.linkToImg = 'https://w7.pngwing.com/pngs/233/602/png-transparent-jake-the-dog-telegram-sticker-vkontakte-adventure-time-heart-smiley-emoticon.png'
    }, 5000)
  }

  ngOnInit(): void {
  }

  onClick(){
    this.message = 'Who is such a good boy? My lovely-lovely husband'
  }

}
