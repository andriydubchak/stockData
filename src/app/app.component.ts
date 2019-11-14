import { Component } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  lineChartData: ChartDataSets[];
  lineChartLabels: Label[];

  onFileLoaded(newData: {values: ChartDataSets[], dataSetNames: Label[]}) {
    this.lineChartData = newData.values;
    this.lineChartLabels = newData.dataSetNames;
  }
}
