import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  @ViewChild('myTx')
  table!: DatatableComponent;

  constructor(private api: ApiService) { }

  rows: any;
  columns = [{ name: 'Sender Name', prop:'walletName', flexGrow: 3 }, { name: 'Receiver Name', prop:'gender' }, { name: 'Amount', prop:'company' }, { name: 'Channel', prop:'company' }, { name: 'Transaction Date', prop:'company' }, { name: 'Status', prop:'company' }];

  ngOnInit(): void {
    //this.table!.offset = 0;
    this.api.getWallet().subscribe((wallet:any) => {
      this.rows = wallet;
      console.log(wallet);
    })
    
  }

}
