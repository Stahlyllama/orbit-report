import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
  @Input() satellites:Satellite[]; 
  constructor() { }

  ngOnInit() {
  }
sort(column: string): void {
  // array.sort modifies the array, sorting the items based on the given compare function
  this.satellites.sort(function(a: Satellite, b: Satellite): number {
     if(a[column] < b[column]) {
        return -1;
     } else if (a[column] > b[column]) {
        return 1;
     }
     return 0;
  });
}
}