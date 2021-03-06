import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { DataService, ObjectToArrayPipe, TitlePageService } from "../../shared";
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';

@Component({
    selector: 'role-list',
    templateUrl: './app/+role/role-list/role-list.component.html',
    directives: [ROUTER_DIRECTIVES, MD_BUTTON_DIRECTIVES],
    providers: [DataService, ObjectToArrayPipe, ToastsManager]
})

export class RoleListComponent implements OnInit {
    list_roles: any[];
    data: any;
  
    constructor(private _dataService: DataService, private _objectToArrayPipe: ObjectToArrayPipe, private _toastr: ToastsManager, private _titlePageService: TitlePageService) { }

    deleteRole(role: any) {
        this._dataService.deleteData('role',role.id);
        this.ngOnInit();
        this._toastr.success('role deleted');
    }

    ngOnInit() {
        this._titlePageService.setTitle('Roles');
        this._dataService.getAllData('role').then((snapshot) => {
            this.data = snapshot.val();
            this.list_roles = this._objectToArrayPipe.transform(this.data);
        })
    }
}
