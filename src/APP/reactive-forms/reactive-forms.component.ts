import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  heroForm = new FormGroup({
    id: new FormControl('1'),
    name: new FormControl('Leanne Graham'),
    username: new FormControl('Bret'),
    email: new FormControl('Sincere@april.biz'),
    street: new FormControl('Kulas Light'),
    suite: new FormControl('Apt. 556'),
    city: new FormControl('Gwenborough'),
    zipcode: new FormControl('92998-3874'),
    phone: new FormControl('1-770-736-8031 x56442'),
    website: new FormControl('hildegard.org'),
    company_name: new FormControl('Romaguera-Crona'),
    company_bs: new FormControl('harness real-time e-markets'),
    company_catch_phrase: new FormControl('Multi-layered client-server neural-net'),
  });
  constructor() {

  }
  clearFormData() {
this.heroForm.reset()
  }
  ngOnInit() {
  }

}
