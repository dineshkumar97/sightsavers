import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { constantDetails } from 'src/app/layout/constant';
import { OutReachService } from '../out-reach.service';

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
  jsonFieldValue: any;
  constructor(private fb: FormBuilder, private outReachService: OutReachService) {
  }
  ngOnInit(): void {
    this.initilization();
  }

  public initilization(): void {
    this.loadOutReachForm();
    this.loadModeOfScreening();
    this.getJSon();
  }

  getJSon() {
    this.outReachService.getJSon()
      .subscribe((data:any) => {
        console.log(data);
        this.jsonFieldValue = data;
      });
  }
  public getAdultChildForm(): any {
    return this.fb.group({
      adult18Greater: this.fb.group({
        male: [null],
        female: [null],
        transgender: [null]
      }),
      child18Less: this.fb.group({
        male: [null],
        female: [null],
        transgender: [null]
      })
    })
  }
  public loadOutReachForm(): void {
    this.outReachForm = this.fb.group({
      district: [null, Validators.required],
      date: [null, Validators.required],
      nameOfDonor: [null, Validators.required],
      block: [null, Validators.required],
      modeOfScreening: [null, Validators.required],
      pwdNonPwd: [null, Validators.required],
      screening: this.fb.group({
        noOfPersonScreened: this.getAdultChildForm(),
        noOfPersonASHA: this.getAdultChildForm(),
        noOfPersonReferredCamp: this.getAdultChildForm(),
        referralCampPRI: this.getAdultChildForm(),
        referralCampByOthers: this.getAdultChildForm(),
      }),
      refraction: this.fb.group({
        noOfPersonRefracted: this.getAdultChildForm(),
        noOfPersonURE: this.getAdultChildForm(),
        noOfPersonReceivedSpectacles: this.getAdultChildForm(),
      }),
      spectaclesDispensed: this.fb.group({
        noOfPersonsDispensedSpectaclesFree: this.getAdultChildForm(),
        noOfPersonsDispensedSpectaclesRate: this.getAdultChildForm(),
        noOfPersonsDispensedSpectaclesFullyPaid: this.getAdultChildForm()
      }),
      referralCamp: this.fb.group({
        noOfPersonsReferredVC: this.getAdultChildForm(),
        noOfPersonsReferredPHC: this.getAdultChildForm(),
        noOfPersonsReferredBH: this.getAdultChildForm(),
        noOfPersonsReferredSDH: this.getAdultChildForm(),
        noOfPersonsReferredCataractSDH: this.getAdultChildForm(),
        noOfPersonsReferredCataractBH: this.getAdultChildForm()
      }),
    })
    // this.outReachForm.patchValue({
    //   nameOfDonor: 'Alcon'
    // })
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
