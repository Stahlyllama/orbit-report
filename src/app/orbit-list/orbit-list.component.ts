import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-list',
  templateUrl: './orbit-list.component.html',
  styleUrls: ['./orbit-list.component.css']
})
export class OrbitListComponent implements OnInit{
@Input() satellites:Satellite[]; 
constructor() {}
ngOnInit () {}

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







  //   constructor(private sortService:SortService){
//   }; 
// //initializes class members 
//   @Input('sortable-column')
//     columnName:string;
//   @Input('sort-direction')
//      sortDirection:string=''; 
//  private columnSortedSubscription:Subscription;
//   @HostListener ('click')
//      sort() {
//         this.sortDirection=this.sortDirection==='asc'?'desc':'asc';
//         this.sortService.columnSorted({sortCOlumn:this.columnName,sortDirection:this.sortDirection});
//       };
//   @Injectable() 
//     private columnSortedSource = new Subject<ColumnSortedEvent>();
//     columnSorted$=this.columnSortedSource.asObservable();

//     columnSorted(event:ColumnSortedEvent){
//     this.columnSortedSource.next(event); 
// }
// }

// export interface ColumnSortedEvent {
//   sortColumn:string;
//   sortDirection:string;
// }

//   //is a place to put the code that we need to execute at very first as soon as the class is istantiated.
//   ngOnInit() {
//     this.columnSortedSubscription = this. sortService.columnSorted$.subscribe(event =>{
//     if (this.columnName != event.sortColumn) {
//     this.sortDirection= ''; 
//    };
//   });
// };
// }
// //www.carbonatethis.com/sort-table-columns-with-angular-and-typescript/