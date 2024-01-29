import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/dashboard'] }
                ]
            },
            {
                items: [
                    {
                        label: 'Graph',
                        icon: 'pi pi-fw pi-home',
                        items: [
                            {
                                label: 'Rural Eye Health',
                                icon: 'pi pi-fw pi-circle',routerLink: ['uikit/formlayout']
                            },
                            {
                                label: 'Urban Eye Health',
                                icon: 'pi pi-fw pi-circle',
                            },
                            {
                                label: 'Social Inclusion',
                                icon: 'pi pi-fw pi-circle',
                            },
                            {
                                label: 'Inclusive Education', icon: 'pi pi-fw pi-circle',
                                items: [
                                    { label: 'IE Quaterly', icon: 'pi pi-fw pi-circle' },
                                    { label: 'IE Yearly', icon: 'pi pi-fw pi-circle' },
                                ]
                            },
                        ]
                    },

                ]
            },
            {
                items: [
                    {
                        label: 'Report',
                        icon: 'pi pi-fw pi-home',
                        items: [
                            {
                                label: 'Rural Eye Health',
                                icon: 'pi pi-fw pi-circle',
                            },
                            {
                                label: 'Urban Eye Health',
                                icon: 'pi pi-fw pi-circle',
                            },
                            {
                                label: 'Social Inclusion',
                                icon: 'pi pi-fw pi-circle',
                            },
                            {
                                label: 'Inclusive Education', icon: 'pi pi-fw pi-circle',
                                items: [
                                    { label: 'IE Quaterly', icon: 'pi pi-fw pi-circle' },
                                    { label: 'IE Yearly', icon: 'pi pi-fw pi-circle' },
                                ]
                            },
                            {
                                label: 'School eye health',
                                icon: 'pi pi-fw pi-circle',
                            },
                        ]
                    },

                ]
            },

            {
                items: [
                    {
                        label: 'Data Entry',
                        icon: 'pi pi-fw pi-home',
                        items: [
                            {
                                label: 'Rural Eye Health', icon: 'pi pi-fw pi-circle',
                                items: [
                                    { label: 'EH Infrastructure', icon: 'pi pi-fw pi-circle' },
                                    { label: 'Outreach', icon: 'pi pi-fw pi-circle' },
                                    { label: 'Vision Center', icon: 'pi pi-fw pi-circle' },
                                    {
                                        label: 'Base Hospital', icon: 'pi pi-fw pi-circle',
                                        items: [
                                            { label: 'Screening/Examination', icon: 'pi pi-fw pi-th-large' },
                                            { label: 'Cataract Surgery(CS)', icon: 'pi pi-fw pi-th-large' },
                                            { label: 'CS Follow up', icon: 'pi pi-fw pi-th-large' },
                                        ]
                                    },
                                    {
                                        label: 'Govt.Facility', icon: 'pi pi-fw pi-circle',
                                        items: [
                                            { label: 'Screening/Examination', icon: 'pi pi-fw pi-circle' },
                                        ]
                                    },
                                    {
                                        label: 'Aggregated Cataract Govt', icon: 'pi pi-fw pi-circle',
                                        items: [
                                            { label: 'Cataract Surgery(CS)', icon: 'pi pi-fw pi-circle' },
                                            { label: 'CS Follow up', icon: 'pi pi-fw pi-circle' },
                                        ]
                                    },
                                    { label: 'Training & Capacity Building', icon: 'pi pi-fw pi-circle' },
                                    { label: 'Government Relation & Networking', icon: 'pi pi-fw pi-circle' },
                                    { label: 'IEC', icon: 'pi pi-fw pi-circle' },
                                    { label: 'BCC', icon: 'pi pi-fw pi-circle' },
                                    { label: 'Case Study', icon: 'pi pi-fw pi-circle' },
                                ]
                            },
                           
                            {
                                label: 'Urban Eye Health', icon: 'pi pi-fw pi-circle',
                                items: [
                                    { label: 'Outreach Camp', icon: 'pi pi-fw pi-circle' },
                                    { label: 'Private Vision Centre', icon: 'pi pi-fw pi-circle' },
                                    { label: 'Mobile Vision Centre', icon: 'pi pi-fw pi-circle' },
                                    { label: 'UPHC/UCHC', icon: 'pi pi-fw pi-circle' },
                                    { label: 'Hospital (Base/Govt/PVT/Other Trust)', icon: 'pi pi-fw pi-circle' },
                                    { label: 'Training & Capacity Building', icon: 'pi pi-fw pi-circle' },
                                    { label: 'Government Relation & Networking', icon: 'pi pi-fw pi-circle' },
                                    { label: 'IEC', icon: 'pi pi-fw pi-circle' },
                                    { label: 'BCC', icon: 'pi pi-fw pi-circle' },
                                    { label: 'Case Study', icon: 'pi pi-fw pi-circle' },
                                ]
                            },
                            {
                                label: 'Social Inculsion', icon: 'pi pi-fw pi-circle',
                                items: [
                                    { label: 'Add PWD', icon: 'pi pi-fw pi-circle' },
                                    { label: 'PWD Update', icon: 'pi pi-fw pi-circle' },
                                    { label: 'OPD', icon: 'pi pi-fw pi-circle' },
                                    { label: 'SHG-PPG', icon: 'pi pi-fw pi-circle' },
                                    { label: 'Training & Capacity Building', icon: 'pi pi-fw pi-circle' },
                                    { label: 'Access Audit', icon: 'pi pi-fw pi-circle' },
                                    { label: 'Agencies Support', icon: 'pi pi-fw pi-circle' },
                                    { label: 'Government Relation & Networking', icon: 'pi pi-fw pi-circle' },
                                    { label: 'IEC', icon: 'pi pi-fw pi-circle' },
                                    { label: 'BCC', icon: 'pi pi-fw pi-circle' },
                                    { label: 'Case Study', icon: 'pi pi-fw pi-circle' },
                                ]
                            },
                            {
                                label: 'Inclusive Education', icon: 'pi pi-fw pi-circle',
                                items: [
                                    { label: 'IE Main Sheet', icon: 'pi pi-fw pi-circle' },
                                    { label: 'IE Case Study', icon: 'pi pi-fw pi-circle' },
                                ]
                            },
                            {
                                label: 'SEH Data Entry', icon: 'pi pi-fw pi-circle',
                                items: [
                                    { label: 'School Covered', icon: 'pi pi-fw pi-circle' },
                                    { label: 'Students', icon: 'pi pi-fw pi-circle' },
                                    { label: 'Progressive Students', icon: 'pi pi-fw pi-circle' },
                                    { label: 'Training & CB', icon: 'pi pi-fw pi-circle' },
                                    { label: 'Advocacy & Networking', icon: 'pi pi-fw pi-circle' },
                                    { label: 'IEC/BCC', icon: 'pi pi-fw pi-circle' },
                                    { label: 'Case Study', icon: 'pi pi-fw pi-circle' },
                                ]
                            },
                        ]
                    },

                ]
            },
            {
                items: [
                    {
                        label: 'Review MPR',
                        icon: 'pi pi-fw pi-circle',
                        items: [
                            {
                                label: 'Review MPR',
                                icon: 'pi pi-fw pi-home',
                            },
                            {
                                label: 'Review QPR',
                                icon: 'pi pi-fw pi-home',
                            },
                        
                        ]
                    },

                ]
            },
            {
                items: [
                    {
                        label: 'Dashboard',
                        icon: 'pi pi-fw pi-home',
                        items: [
                            {
                                label: 'Rural Eye Health',
                                icon: 'pi pi-fw pi-circle',
                            },
                            {
                                label: 'Urban Eye Health',
                                icon: 'pi pi-fw pi-circle',
                            },
                            {
                                label: 'Social Inclusion',
                                icon: 'pi pi-fw pi-circle',
                            },
                            {
                                label: 'Inclusive Education', icon: 'pi pi-fw pi-circle',
                            },
                            {
                                label: 'School eye health',
                                icon: 'pi pi-fw pi-circle',
                            },
                        ]
                    },

                ]
            },
            {
                items: [
                    {
                        label: 'Inclusive Education',
                        icon: 'pi pi-fw pi-home',
                        items: [
                            {
                                label: 'Dashboard',
                                icon: 'pi pi-fw pi-circle',
                                routerLink: ['inclusive/dashboard']
                            },
                            {
                                label: 'Overall Report',
                                icon: 'pi pi-fw pi-circle',
                            },
                            {
                                label: 'CVI List',
                                icon: 'pi pi-fw pi-circle',
                            },
                            {
                                label: 'Report', icon: 'pi pi-fw pi-circle',
                                items: [
                                    { label: 'Visit Report', icon: 'pi pi-fw pi-circle' },
                                    { label: 'Form Status Report', icon: 'pi pi-fw pi-circle' },
                                ]
                            },
                           
                        ]
                    },

                ]
            }
           
        ];
    }
}
