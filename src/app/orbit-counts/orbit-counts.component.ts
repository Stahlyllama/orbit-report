import { Component, OnInit, Input} from '@angular/core';
import { Satellite} from '../satellite';

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
satelliteTypeCount (type){
return this.satellites.filter (o => o.type === type).length
//return calling the satelite objecgt using filter method on the satellite method in the parameter iof the filter method we create a arrow function, comparing the name variable we are passing in and comparing to see if its the same as the paramenter   (.length gives us length)  within the filter method 

}
}
