import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-album-page',
  templateUrl: './album-page.component.html',
  styleUrls: ['./album-page.component.css']
})
export class AlbumPageComponent implements OnInit {

  constructor() { }

  public artista = 'Justin H. Min';

  ngOnInit(): void {
  }

}
