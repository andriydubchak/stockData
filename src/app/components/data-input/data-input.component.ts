import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-data-input',
  templateUrl: './data-input.component.html',
  styleUrls: ['./data-input.component.scss']
})
export class DataInputComponent implements OnInit {
  @Output()
  onFileLoaded = new EventEmitter();

  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.http.get('assets/data.txt', {responseType: 'text'})
      .subscribe((data) => {
        this.onFileLoaded.emit(JSON.parse(data));
      });
  }

  handleFileInput(newData: File) {
    const reader = new FileReader();

    reader.onloadend = (result: ProgressEvent) => {
      const resultObj = JSON.parse((result.srcElement as any).result);
      this.onFileLoaded.emit(resultObj);
    }

    reader.readAsText(newData[0]);
  }

}
