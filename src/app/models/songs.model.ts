import { StringFormat } from '@angular/fire/storage/interfaces';
import { allowedNodeEnvironmentFlags } from 'process';

export class Song {
  id: String;
  title: String;
  album: String;
  duration: number;
  artist: String;
  exclusive: boolean;
  cover: String;
  audioPath: String;

  constructor(id:String, title: String, album: String, duration: number, artist: String, exclusive: boolean, cover: String, audioPath: String) {
    this.id = id;
    this.title = title;
    this.album = album;
    this.duration = duration;
    this.artist = artist;
    this.exclusive = exclusive;
    this.cover = cover;
    this.audioPath = audioPath;
  }
}
