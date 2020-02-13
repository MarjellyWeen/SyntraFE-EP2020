import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  myGroup: any;

  constructor() { }

  

  ngOnInit() {

    this.myGroup = new FormGroup({
      firstName: new FormControl()
   });
   
  }

}
