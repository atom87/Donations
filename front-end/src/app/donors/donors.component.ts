import { Component, OnInit } from '@angular/core';
import { DonationsService } from '../service/donations.service';
import { Donor } from '../models/donor';
// import { DonorsList } from '../models/donorsList';

@Component({
  selector: 'don-donors',
  templateUrl: './donors.component.html',
  styleUrls: ['./donors.component.css']
})
export class DonorsComponent implements OnInit {

  donationsList: Donor[] = [];
  
  count: number;
  params={
    // sort : "",
    // sortDirection : "",
    page: 1,
    pageSize : 6,
    filter : {
      // categories: "",
      minValue: "",
      maxValue: ""
    }
  }

  constructor(private service : DonationsService) { }

  ngOnInit() {
    this.getDonation();
  }

  getDonation(){
    this.service.getAll(this.params).subscribe( data => {
      this.donationsList = data.donors;
      this.count = data.count;
    })
  }

  changePage(newPage :number){
    this.params.page =  newPage;
    this.getDonation();
  }

 
}
