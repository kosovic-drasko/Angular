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
       // type: 'bar',

       type: 'pie',
       options:{
         // horizontalna varijanta
         indexAxis:'y',
plugins:{
  legend:{
    display:true,
    labels:{
      color:'rgb (255, 99, 132)'
    }
  }
},
         scales: {
           y: {
             beginAtZero: true
           }
         }
       },

       data: {
         labels: region,
         datasets: [
           {
             data: prodaja,
             backgroundColor:["red","yellow","blue"],
             borderColor: '#3cba9f',
             borderWidth: 1
           },
         ]
       }


     })

   })
  }

  print() {
    this.chart.instance.print();
  }

  export() {
    this.chart.instance.exportTo('Example', 'png');
  }


  myFunction() {

      alert("I am an alert box!");
    }

}



