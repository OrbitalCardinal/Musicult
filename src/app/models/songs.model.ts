import { StringFormat } from '@angular/fire/storage/interfaces';
import { allowedNodeEnvironmentFlags } from 'process';

export class Song {
  title: String;
  album: String;
  duration: number;
  artist: String;
  exclusive: boolean;
  cover: String;

  constructor(title: String, album: String, duration: number, artist: String, exclusive: boolean, cover: String) {
    this.title = title;
    this.album = album;
    this.duration = duration;
    this.artist = artist;
    this.exclusive = exclusive;
    this.cover = cover;
  }
}
