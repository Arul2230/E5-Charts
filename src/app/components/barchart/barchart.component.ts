import { Component, OnInit, Input } from '@angular/core';

declare var google;
@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss']
})
export class BarchartComponent implements OnInit {

  @Input() idName = '';
  @Input() link;
  @Input() options = {};
  @Input() type;
  constructor() { }

  ngOnInit(): void {
    google.charts.load('current', {packages: ['corechart', 'table', 'bar']});
    google.charts.setOnLoadCallback(this.drawChart);
  }

  drawChart = () => {
    console.log(this.link)
    const query = new google.visualization.Query(this.link);
    query.send(this.handleQueryResponse);
  }

  handleQueryResponse = (response) => {
    const data = response.getDataTable();

    let chart;
    if (this.type === 'bar') {
      chart = new google.visualization.ColumnChart(document.getElementById(this.idName));
    } else if (this.type === 'dataview') {
      const formatter = new google.visualization.BarFormat({
        width: 160, showValue: false
      });
      formatter.format(data, 2);
      chart = new google.visualization.Table(document.getElementById(this.idName));
    } else {
      const tableChart = new google.visualization.Table(document.getElementById('table-order'));
      tableChart.draw(data, null)
      chart = new google.visualization.PieChart(document.getElementById(this.idName));
    }
    console.log(this.options)
    chart.draw(data, this.options);
  }

}
