import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FirebaseStorageService } from './firestorage.service';

@Component({
  selector: 'upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {

  constructor(
    private storage: FirebaseStorageService,
    private angularStorage: AngularFireStorage
  ) { }

  public uploadFileForm = new FormGroup({
    archivo: new FormControl(null, Validators.required),
  });

  public mensajeArchivo = 'No hay un archivo seleccionado';
  public datosFormulario = new FormData();
  public nombreDeArchivo = '';
  public urlPublic = '';
  public porcentaje = 0;
  public finalizado = false;

  public imagePath;
  imgURL: any;
  public message: string;

  public changeFile(event) {
    console.log('Evento: ',event);
    if (event.target.files.length > 0) {
      for (let i = 0; i < event.target.files.length; i++) {
        this.mensajeArchivo = `Archivo preparado: ${event.target.files[i].name}`;
        this.datosFormulario.delete('archivo');
        this.datosFormulario.append('archivo', event.target.files[i], event.target.files[i].name)
        let ref = this.datosFormulario.get('archivo');
        console.log(ref);
      }
    } else {
      console.log('Error en la funcion changeFile');
      this.mensajeArchivo = 'No hay un archivo seleccionado';
    }
  }

  async uploadFile() {
    let archivo: any = this.datosFormulario.get('archivo');
    console.log(archivo.name);

    // The storage path
    const path = `images/${Date.now()}_${archivo.name}`;

    // Reference to storage bucket
    const ref = this.angularStorage.ref(path);

    // The main task
    this.angularStorage.upload(path, archivo);

  }

  preview(files) {
    console.log(files);
    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
      this.message = "";
    }
  }
}
