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
       ,
       options: {

         scales: {
           xAxes: {
             display: true
           },
           yAxes: {
             display: true
           }
         }
       }
     })

   })
  }
}



