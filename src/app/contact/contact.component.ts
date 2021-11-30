import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  rForm: FormGroup;
  message: string;

  constructor(private fb: FormBuilder, private http: HttpClient,

  ) {
    this.rForm = this.fb.group({
      Name: [null, Validators.required],
      Email: [null, Validators.required],
      Phone: ['', Validators.required],
      Message: ['', Validators.required]
    });
  }

  ngOnInit() {
  }
  onSubmit(val) {
    console.log(val);
    const data = {
      FromEmail: val.Email,
      Message: val.Message,
      Name: val.Name,
      Phone: val.Phone
    };

    this.http.post(`https://www.matharchitectsstudio.co.za/api/email.php`, data).subscribe(res => {
      console.log(res);
      this.message = 'Thanks for contacting us we will be in touch with you shortly';
    });
  }

}
