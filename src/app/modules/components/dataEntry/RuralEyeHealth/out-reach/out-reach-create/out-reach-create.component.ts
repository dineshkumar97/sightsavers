import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { constantDetails } from 'src/app/layout/constant';

@Component({
  selector: 'app-out-reach-create',
  templateUrl: './out-reach-create.component.html',
  styleUrls: ['./out-reach-create.component.scss']
})
export class OutReachCreateComponent implements OnInit {
  modeoFScreening: any;
  isModeOfScreening = true;
  modeOfScreening: any;
  pwdNonPwd: any;
  nameOfDonor: any;
  outReachForm: FormGroup;
  constructor(private fb: FormBuilder) {
  }
  ngOnInit(): void {
    this.initilization();
  }

  public initilization(): void {
    this.loadOutReachForm();
    this.loadModeOfScreening();
  }

  public loadOutReachForm(): void {
    this.outReachForm = this.fb.group({
      district: [''],
      date: [''],
      nameOfDonor: [''],
      block: [''],
      modeOfScreening: [''],
      pwdNonPwd: [''],
      refraction: this.fb.group({
        noOfPersonRefracted: this.fb.group({
          adult18Greater: this.fb.group({
            male: [''],
            female: [''],
            transgender: ['']
          }),
          child18Less: this.fb.group({
            male: [''],
            female: [''],
            transgender: ['']
          })
        }),
        noOfPersonURE: this.fb.group({
          adult18Greater: this.fb.group({
            male: [''],
            female: [''],
            transgender: ['']
          }),
          child18Less: this.fb.group({
            male: [''],
            female: [''],
            transgender: ['']
          })
        }),
        noOfPersonReceivedSpectacles: this.fb.group({
          adult18Greater: this.fb.group({
            male: [''],
            female: [''],
            transgender: ['']
          }),
          child18Less: this.fb.group({
            male: [''],
            female: [''],
            transgender: ['']
          })
        })
      }),
      
    })
    // company:{
    //   msgAccounts:{line: "@linedemo", whatsapp: "0325554244"},
    //   socialMedia: {fb: '', tw: '', is: ''}
    //  } 
    this.outReachForm.patchValue({
      nameOfDonor: 'Alcon'
    })
  }

  public loadModeOfScreening(): void {
    this.modeoFScreening = constantDetails.modeoFScreening;
    this.pwdNonPwd = constantDetails.pwdNonPwd;
    this.nameOfDonor = constantDetails.nameOfDonor;
    this.modeOfScreening = 'Referral From Camps';
  }

  public changeModeOfScreening(changedValue: any) {
    console.log('c', changedValue.value.id)
    this.isModeOfScreening = changedValue.value.id === 'Camp' ? true : changedValue.value.id === 'select' ? true : false;
    this.modeOfScreening = changedValue.value.id === 'Camp' ? 'Referral From Camps' : changedValue.value.id === 'select' ? 'Referral From Camps' : 'Referral From Door-To-Door';
  }

  public changePWD(changedValue: any) {
  }

  public changeNameOfDoor(changedValue: any) {
  }
  public outReachSave() {
    console.log(this.outReachForm.value);
  }

}
