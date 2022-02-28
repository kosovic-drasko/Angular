import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { ProbaService } from './proba.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  chart:any = [];
  constructor(private servisProba:ProbaService) {
  }
  ngOnInit(): void {
this.podaci();
  }

  podaci(){
 this.servisProba.dailyForecast()
   .subscribe(res => {

     let temp_max = res
     console.log(temp_max);
     let naslov = res.map((res: { title: any; }) => res.title)
     let id = res.map((res: { id: any; }) => res.id)
     // let alldates = res['list'].map(res => res.dt)
console.log(naslov);
     this.chart = new Chart('canvas', {
       type: 'line',
       data: {
         labels: naslov,
         datasets: [
           {
             data: id,
             borderColor: '#3cba9f',
             fill: true
           },
         ]
       }

   })
  })
  }
  //
  //
  // public barChartOptions = {
  //   scaleShowVerticalLines: false,
  //   responsive: true
  // };
  // public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  // public barChartType = 'bar';
  // public barChartLegend = true;
  // public barChartData = [
  //   {data: [105, 59, 80, 81, 56, 55, 40], label: 'Series A'},
  //   {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  // ];
}
