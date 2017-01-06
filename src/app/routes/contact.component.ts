import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: []
})
export class ContactComponent implements OnInit {
   form:FormGroup;
    
  constructor() {
     this.form = new FormGroup({
       name: new FormControl()
    });
   }

  ngOnInit() {
  }

  onSubmit(form){
        console.log(form);
    }

}
