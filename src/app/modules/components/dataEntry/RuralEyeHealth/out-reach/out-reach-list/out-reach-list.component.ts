import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-out-reach-list',
    templateUrl: './out-reach-list.component.html',
    styleUrls: ['./out-reach-list.component.scss']
})
export class OutReachListComponent implements OnInit {
    headerLabels = ["Male", "Female", "Transgender"];

    products = [
        { "district": null, "date": "2024-02-07T18:30:00.000Z", "nameOfDonor": "Alcon", "block": null, "modeOfScreening": { "name": "Camp", "id": "Camp" }, "pwdNonPwd": { "name": "PWD", "id": "PWD" }, "screening": { "noOfPersonScreened": { "adult18Greater": { "male": 1, "female": 1, "transgender": 1 }, "child18Less": { "male": 1, "female": 1, "transgender": 1 } }, "noOfPersonASHA": { "adult18Greater": { "male": 1, "female": 11111111111111112, "transgender": 1 }, "child18Less": { "male": 1, "female": 1, "transgender": 1 } }, "noOfPersonReferredCamp": { "adult18Greater": { "male": 1, "female": 1, "transgender": 11 }, "child18Less": { "male": 11, "female": 1, "transgender": 11 } }, "referralCampPRI": { "adult18Greater": { "male": 1, "female": 1, "transgender": 1 }, "child18Less": { "male": 1, "female": 1, "transgender": 1 } }, "referralCampByOthers": { "adult18Greater": { "male": 1, "female": 1, "transgender": 1 }, "child18Less": { "male": 1, "female": 1, "transgender": 1 } } }, "refraction": { "noOfPersonRefracted": { "adult18Greater": { "male": 111, "female": 1, "transgender": 1 }, "child18Less": { "male": 111, "female": null, "transgender": 1 } }, "noOfPersonURE": { "adult18Greater": { "male": 11, "female": 1313, "transgender": null }, "child18Less": { "male": 3, "female": 3, "transgender": null } }, "noOfPersonReceivedSpectacles": { "adult18Greater": { "male": 33, "female": 33, "transgender": null }, "child18Less": { "male": 33, "female": 3, "transgender": 3 } } }, "spectaclesDispensed": { "noOfPersonsDispensedSpectaclesFree": { "adult18Greater": { "male": 1112, "female": 2, "transgender": 2 }, "child18Less": { "male": 2, "female": 2, "transgender": 2 } }, "noOfPersonsDispensedSpectaclesRate": { "adult18Greater": { "male": 22, "female": 2, "transgender": 2 }, "child18Less": { "male": 2, "female": 2, "transgender": 2 } }, "noOfPersonsDispensedSpectaclesFullyPaid": { "adult18Greater": { "male": 2, "female": 2, "transgender": 5 }, "child18Less": { "male": 5, "female": 5, "transgender": 5 } } }, "referralCamp": { "noOfPersonsReferredVC": { "adult18Greater": { "male": 12, "female": 4, "transgender": 4 }, "child18Less": { "male": 5, "female": 5, "transgender": 5 } }, "noOfPersonsReferredPHC": { "adult18Greater": { "male": 53, "female": 3, "transgender": 4 }, "child18Less": { "male": 4, "female": 4, "transgender": 4 } }, "noOfPersonsReferredBH": { "adult18Greater": { "male": 3, "female": 3, "transgender": 3 }, "child18Less": { "male": 3, "female": 4, "transgender": 5 } }, "noOfPersonsReferredSDH": { "adult18Greater": { "male": 5, "female": 5, "transgender": 5 }, "child18Less": { "male": 5, "female": null, "transgender": 55 } }, "noOfPersonsReferredCataractSDH": { "adult18Greater": { "male": 5, "female": 5, "transgender": 5 }, "child18Less": { "male": 5, "female": 5, "transgender": 5 } }, "noOfPersonsReferredCataractBH": { "adult18Greater": { "male": 5, "female": 6, "transgender": 6 }, "child18Less": { "male": 6, "female": 6, "transgender": 6 } } } }

    ];
    constructor() {

    }



    ngOnInit(): void {
        this.initilization();

    }

    public initilization(): void {
        this.loadDetails();
    }

    public loadDetails(): void {
        console.log('v', this.products)
    }

    public numSequence(n: number): Array<number> {
        return Array(n);
    }
}

