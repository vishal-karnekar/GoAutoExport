import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-quotation',
  templateUrl: './quotation.component.html',
  styleUrls: ['./quotation.component.scss']
})
export class QuotationComponent implements OnInit {

  constructor() { }
quoteform = new FormGroup(
  {
    name1: new FormControl('',Validators.required),
    name2: new FormControl('',Validators.required),
    phone: new FormControl('',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    email: new FormControl('',[Validators.required,Validators.email]),
    addr: new FormControl,
    regno:new FormControl,
    brand: new FormControl('',Validators.required),
    info: new FormControl('',Validators.required),
    service: new FormControl('',Validators.required),
    pickd: new FormControl('',Validators.required),
    warranty: new FormControl('',Validators.required)
  }
)

  ngOnInit(): void {
  }
  getQuote()
  {
    console.log(this.quoteform.value);
    
  }


}
