import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OutReachRoutingModule } from './out-reach-routing.module';
import { OutReachCreateComponent } from './out-reach-create/out-reach-create.component';
import { OutReachListComponent } from './out-reach-list/out-reach-list.component';
import { CommonInputModule } from 'src/app/layout/commoninput.module';
import { AdultChildModule } from '../../../adult-child/adult-child.module';
import { OutReachService } from './out-reach.service';


@NgModule({
    declarations: [
        OutReachCreateComponent,
        OutReachListComponent
    ],
    imports: [
        CommonModule,
        OutReachRoutingModule,
        CommonInputModule,
        AdultChildModule
    ],
    providers: [ OutReachService ]
})
export class OutReachModule { }
