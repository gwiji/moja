import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent implements OnInit {

  constructor(private api: ApiService) { }

  rows: any;

  columns = [{ name: 'Partner Name', prop:'name', flexGrow: 3 }, { name: 'Email Address', prop:'email' }, { name: 'Contact Person', prop:'contactPerson' }, { name: 'Created At', prop:'dateCreated' }, { name: 'No. of Countries', prop:'company' }, { name: 'Action' }];

  ngOnInit(): void {
    this.api.getPartners().subscribe((partners:any) => {
      this.rows = partners;
      console.log(partners);
    })
  }

}
