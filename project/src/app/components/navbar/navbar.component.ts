import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../services/photo.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  constructor(private photoSr: PhotoService){}
  count!:number

  ngOnInit(): void {
    this.photoSr.likes$.subscribe(likes => this.count = likes);
  }

}
