import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  lineChartData;
  lineChartLabels;

  onFileLoaded(newData) {
    console.log(newData);
    this.lineChartData = newData.values;
    this.lineChartLabels = newData.dataSetNames;
  }
}
