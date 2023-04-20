import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-partner',
  templateUrl: './new-partner.component.html',
  styleUrls: ['./new-partner.component.css']
})
export class NewPartnerComponent implements OnInit {

  constructor() { }


  
  rows = [
    { name: 'Austin', gender: 'Male', company: 'Swimlane', view: 'view' },
    { name: 'Dany', gender: 'Male', company: 'KFC', view: 'view' },
    { name: 'Molly', gender: 'Female', company: 'Burger King', view: 'view' },
    { name: 'Austin', gender: 'Male', company: 'Swimlane', view: 'view' },
    { name: 'Dany', gender: 'Male', company: 'KFC', view: 'view' },
    { name: 'Molly', gender: 'Female', company: 'Burger King', view: 'view' },
    { name: 'Austin', gender: 'Male', company: 'Swimlane', view: 'view' },
    { name: 'Dany', gender: 'Male', company: 'KFC', view: 'view' },
    { name: 'Molly', gender: 'Female', company: 'Burger King', view: 'view' },
    { name: 'Austin', gender: 'Male', company: 'Swimlane', view: 'view' },
    { name: 'Dany', gender: 'Male', company: 'KFC', view: 'view' },
    { name: 'Molly', gender: 'Female', company: 'Burger King', view: 'view' }
  ];

  columns = [{ name: 'Partner Name', prop:'name', flexGrow: 3 }, { name: 'Email Address', prop:'gender' }, { name: 'Contact Person', prop:'company' }, { name: 'Created At', prop:'company' }, { name: 'No. of Countries', prop:'company' }, { name: 'Action', prop:'view' }];

  ngOnInit(): void {
    //this.table!.offset = 0;
  }

}
