import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  constructor(private modalService: NgbModal,private api: ApiService) { }
  
  rows: any;

  columns = [{ name: 'Partner Name', prop:'name', flexGrow: 3 }, { name: 'Email Address', prop:'gender' }, { name: 'Contact Person', prop:'company' }, { name: 'Created At', prop:'company' }, { name: 'No. of Countries', prop:'company' }, { name: 'Action' }];

  ngOnInit(): void {
    this.api.getCountries().subscribe((countries:any) => {
      this.rows = countries;
      console.log(countries);
    })
  }

  open(content: any) {
		this.modalService.open(content);
	}


}
