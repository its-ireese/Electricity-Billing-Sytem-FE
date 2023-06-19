import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  public files: any[] = [];
  baseUrl = "http://localhost:7777/file";


  constructor(private http: HttpClient) {
    this.files = [];
  }

  onFileChanged(event: any) {
    this.files = event.target.files;
  }

  onUpload(image: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', image);

    console.log("file-upload Service"+image);


    return this.http.post<any>(this.baseUrl + '/upload', formData);
  }
}
