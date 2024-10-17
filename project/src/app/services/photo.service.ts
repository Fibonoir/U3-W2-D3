import { iPhoto } from './../interface/iphoto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, pipe, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  constructor(private http: HttpClient) { }
  apiUrl:string = "https://jsonplaceholder.typicode.com/photos";

  photoArr: iPhoto[] = [];
  photos$ = new Subject<iPhoto>();
  likes$ = new ReplaySubject<number>();
  currentValue:number = 0;

  photoObs$ = this.photos$.asObservable()
    .pipe(
      map(photos => {
        this.photoArr.push(photos);
      })
    )


  getPhoto() {
    return this.http.get<iPhoto[]>(this.apiUrl)
    .pipe(
      map(photos => photos.slice(0, 100))
    )
  }

  addLikes() {
    this.likes$.next(this.currentValue += 1)
    };

  }

