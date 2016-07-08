"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//Angular
var common_1 = require('@angular/common');
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var shared_1 = require('../../shared');
var ng2_toastr_1 = require('ng2-toastr/ng2-toastr');
var CollaboratorViewComponent = (function () {
    function CollaboratorViewComponent(_dataService, _router, _routeSegment, _objecToArrayPipe, _toastr) {
        this._dataService = _dataService;
        this._router = _router;
        this._routeSegment = _routeSegment;
        this._objecToArrayPipe = _objecToArrayPipe;
        this._toastr = _toastr;
    }
    CollaboratorViewComponent.prototype.routerOnActivate = function (current) {
        var _this = this;
        var id = current.parameters['id'];
        this._dataService.getData('collaborator', id).then(function (snapshot) {
            _this.data = snapshot.val();
            _this.collaborator = _this.data;
        });
        this._dataService.getAllData('role').then(function (snapshot) {
            _this.data = snapshot.val();
            _this.list_roles = _this._objecToArrayPipe.transform(_this.data);
        });
    };
    CollaboratorViewComponent.prototype.deleteCollaborator = function () {
        var id = this._routeSegment.getParam('id');
        this._dataService.deleteData('collaborator', id);
        this._router.navigate(['/Home/Collaborator']);
        this._toastr.success('Collaborator deleted');
    };
    CollaboratorViewComponent.prototype.setCollaborator = function (active, admin, first, last, username, role) {
        var id = this._routeSegment.getParam('id');
        this._dataService.setDataCollaborator(id, active, admin, first, last, username, role);
        this._router.navigate(['/Home/Collaborator']);
        this._toastr.success('modifications saved');
    };
    CollaboratorViewComponent = __decorate([
        core_1.Component({
            selector: "collaborator-view",
            templateUrl: './app/+collaborator/collaborator-view/collaborator-view.component.html',
            directives: [common_1.CORE_DIRECTIVES],
            providers: [shared_1.DataService, shared_1.ObjectToArrayPipe, ng2_toastr_1.ToastsManager]
        }), 
        __metadata('design:paramtypes', [shared_1.DataService, router_1.Router, router_1.RouteSegment, shared_1.ObjectToArrayPipe, ng2_toastr_1.ToastsManager])
    ], CollaboratorViewComponent);
    return CollaboratorViewComponent;
}());
exports.CollaboratorViewComponent = CollaboratorViewComponent;
//# sourceMappingURL=collaborator-view.component.js.map