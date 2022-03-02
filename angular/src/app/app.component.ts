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
     let region = res.map((res: { region: any; }) => res.region)
     let prodaja = res.map((res: { prodaja: any; }) => res.prodaja)
  
console.log(region);
     this.chart = new Chart('canvas', {
       type: 'bar',
       data: {
         labels: region,
         datasets: [
           {
             data: prodaja,
             borderColor: '#3cba9f',
             // fill: true
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
           },

         }
       }
     })

   })
  }
}



