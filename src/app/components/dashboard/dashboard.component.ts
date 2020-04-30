import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public averageAgeoptions = {
    hAxis: {
      title: 'Weeks',
      titleTextStyle: {
        fontName: 'Roboto',
        color: '#CCCCCC',
        italic: false
      },
    },
    vAxis: {
      title: 'Average Age of Orders',
      titleTextStyle: {
        fontName: 'Roboto',
        color: '#CCCCCC',
        italic: false
      },
      baselineColor: 'white',
      gridlines : {
        color: 'white',
      },
      minorGridlines: {
        color: '#EBEBEB'
      }
    },
    colors: ['#76e5e2'],
    legend: {
      position: 'none'
    },
    titleTextStyle: {
      color: '#4E4E4E',
      fontName: 'Roboto',
    },
      // axisTitlesPosition: 'in',
      axes: {
        x: {
          0: {
            side: 'bottom',
            label: 'Weeks'
          }
        },
        y: {
          0: {
            side: 'left',
            label: 'Average age of Orders'
          }
        }
      },
      bar: {
        groupWidth: "50%"
      },
  };

  public  orderStatusOptions = {
    titleTextStyle: {
      color: '#4E4E4E',
      fontName: 'Roboto',
    },
    colors: [
      '#4d80bf',
      '#87b428',
      '#ad76f0',
      '#ffac61',
      '#2dc8f2'
    ],
    legend: 'none',
    pieHole: 0.65,
    pieSliceText: "none",
    pieSliceTextStyle: {
      color: '#4e4e4e'
    },
    animation: {
      duration: 2000,
      easing: 'inAndOut',
      startup: true,
    }
  };

  public  orderByWeeksOptions = {
    titleTextStyle: {
      color: '#4E4E4E',
      fontName: 'Roboto',
    },
    colors: ['#76e5e2'],
    legend: 'none',
    hAxis: {
      title: 'Weeks',
      titleTextStyle: {
        fontName: 'Roboto',
        color: '#CCCCCC',
        italic: false
      },
    },
    vAxis: {
      baselineColor: 'white',
      gridlines : {
        color: 'white',
      },
      minorGridlines: {
        color: '#EBEBEB'
      },
      titleTextStyle: {
        fontName: 'Roboto',
        color: '#CCCCCC',
        italic: false
      },
      title: 'No. of Orders'
    }
  };


  public  averageAgePhysicianOptions = {
    title: 'Average Age by Physician',
    colors: ['#76e5e2'],
    titleTextStyle: {
      color: '#4E4E4E',
      fontName: 'Roboto',
    },
    allowHtml: true,
    showRowNumber: false,
    alternatingRowStyle: false,
    legend: 'none',
    vAxis: {
      titleTextStyle: {
        fontName: 'Roboto',
        color: '#CCCCCC',
        italic: false
      },
      title: 'Physician Name',
      direction: 1,
      baselineColor: 'white',
      gridlines : {
        color: 'white'
      }
    },
    hAxis: {
      direction: 1,
      titleTextStyle: {
        fontName: 'Roboto',
        color: '#CCCCCC',
        italic: false
      },
      baselineColor: 'white',
      gridlines : {
        color: 'white'
      },
      textPosition: 'none'
    }

  };


  public  outstandingOrderOption = {
    title: 'Outstanding Orders by Physician',
    colors: ['#76e5e2'],
    height: '300',
    titleTextStyle: {
      color: '#4E4E4E',
      fontName: 'Roboto',
    },
    allowHtml: true,
    showRowNumber: false,
    alternatingRowStyle: false,
    legend: 'none',
    vAxis: {
      titleTextStyle: {
        fontName: 'Roboto',
        color: '#CCCCCC',
        italic: false
      },
      title: 'Physician Name',
      direction: 1,
      baselineColor: 'white',
      gridlines : {
        color: 'white'
      }
    },
    hAxis: {
      direction: 1,
      titleTextStyle: {
        fontName: 'Roboto',
        color: '#CCCCCC',
        italic: false
      },
      baselineColor: 'white',
      gridlines : {
        color: 'white'
      },
      textPosition: 'none'
    }
  };

  constructor() {
  }

  ngOnInit() {

  }
}
