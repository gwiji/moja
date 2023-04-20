import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-assigned',
  templateUrl: './assigned.component.html',
  styleUrls: ['./assigned.component.css']
})
export class AssignedComponent implements OnInit {

  constructor(private modalService: NgbModal) { }
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

  columns = [{ name: 'Partner Name', prop:'name', flexGrow: 3 }, { name: 'Email Address', prop:'gender' }, { name: 'Contact Person', prop:'company' }, { name: 'Created At', prop:'company' }, { name: 'No. of Countries', prop:'company' }, { name: 'Action' }];

  ngOnInit(): void {
    //this.table!.offset = 0;
  }

  open(content: any) {
		this.modalService.open(content);
	}


}
