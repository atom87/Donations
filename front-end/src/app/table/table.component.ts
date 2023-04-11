import { Component, OnInit, Input} from '@angular/core';
import { Donor } from '../models/donor';


@Component({
  selector: 'don-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  
  @Input() donations: Donor[];


  constructor() { }

  ngOnInit(){
    
  }

}
