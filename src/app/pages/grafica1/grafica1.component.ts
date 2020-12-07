import { Component, OnInit } from '@angular/core';
import { MultiDataSet, Label, Color } from 'ng2-charts';
@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styleUrls: ['./grafica1.component.css']
})
export class Grafica1Component {
  
  public labels1: Label[] = ['Pan', 'Refrescos', 'tacos'];
  public data1: MultiDataSet = [
    [25, 56, 112]
  ];

}
