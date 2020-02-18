import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { HttpService } from '../http.service';
import { Client, AppUser } from '../jsonClass';
import { MatStepper } from '@angular/material';
import { invalid } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private httpService: HttpService) { }

  isBusy = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  hide = true;
  client: Client = {name: null, surname: null, sex: null, address: null, appUser: null};
  appUser: AppUser = { username: null, password: null};

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('[A-Z]{1}[a-z]{2,10}')]],
      surname: ['', [Validators.required, Validators.pattern('[A-Z]{1}[a-z]{2,10}')]],
      sex: ['',  Validators.required],
      street: ['', [Validators.required, Validators.pattern('[A-Z]{1}[a-z]{2,10}')]],
      houseNumber: ['', [ Validators.required, Validators.pattern('[0-9]{1,5}' )]],
      flatNumber: ['', [ Validators.required, Validators.pattern('[0-9]{1,5}')]],
      postcode: ['', [Validators.required, Validators.pattern('[0-9][0-9]-[0-9][0-9][0-9]')]],
      city: ['', [Validators.required, Validators.pattern('[A-Z]{1}[a-z]{2,10}')]]
    });
  }

  checkUsername(stepper: MatStepper) {
    this.appUser.username = this.firstFormGroup.controls.username.value;
    this.httpService.checkUsername(this.appUser).subscribe((data: any) => {
      this.isBusy = data;
      // tslint:disable-next-line: triple-equals
      if (this.isBusy == true) {
        stepper.next();
      } else {
        alert('Username is busy!');
      }
    });
  }

  addClient() {
    if (!(this.secondFormGroup.controls.name.invalid || this.secondFormGroup.controls.surname.invalid ||
      this.secondFormGroup.controls.sex.invalid || this.secondFormGroup.controls.street.invalid ||
      this.secondFormGroup.controls.houseNumber.invalid
      || this.secondFormGroup.controls.flatNumber.invalid || this.secondFormGroup.controls.postcode.invalid ||
      this.secondFormGroup.controls.city.invalid)) {
      this.appUser.username = this.firstFormGroup.controls.username.value;
      this.appUser.password = this.firstFormGroup.controls.password.value;
      this.client.sex = this.secondFormGroup.controls.sex.value;
      this.client.name = this.secondFormGroup.controls.name.value;
      this.client.surname = this.secondFormGroup.controls.surname.value;
      this.client.address = this.secondFormGroup.controls.street.value + ' ' +
      this.secondFormGroup.controls.houseNumber.value + '/' + this.secondFormGroup.controls.flatNumber.value +
      ', ' + this.secondFormGroup.controls.postcode.value + ' ' + this.secondFormGroup.controls.city.value;
      this.client.appUser = this.appUser;
      this.httpService.addClient(this.client).subscribe((data: any) => {
        console.log(data);
      });
    }
  }

}
