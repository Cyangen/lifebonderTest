import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertService } from './services/alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  imageURL: string;
  sharingType = 0;
  formValid = false;
  userId = '303947092';

  constructor(private alertService: AlertService){}

  ngOnInit(){}

  // Image Preview
  showPreview(event) {
    const file = (event.target as HTMLInputElement).files[0];

    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  onSubmit(form: NgForm){
    console.log(form.value);

    if (form.valid){
      this.alertService.setMessage({message: 'Post created successfully!!', type: 'alert-success'});
      this.formValid = true;
    } else {
      this.alertService.setMessage({message: 'Error! You have to fill all required fields!', type: 'alert-danger'});
      this.formValid = false;
    }
  }

}
