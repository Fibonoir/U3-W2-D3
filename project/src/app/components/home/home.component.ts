import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../services/photo.service';
import { iPhoto } from '../../interface/iphoto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  constructor(private photSr: PhotoService){}

  photoArr: iPhoto[]=[];

  ngOnInit(): void {
    this.photSr.getPhoto().subscribe(p => {
      this.photoArr = p;
      console.log(p);

    })


  }

  addLike() {
    this.photSr.addLikes();
  }
}
