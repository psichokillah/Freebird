import {Component, EventEmitter, Input, Output} from "@angular/core";
import {AdminTabSitesModel} from "./admin-tab-sites.model";

@Component({
  moduleId: module.id,
  selector: 'freebird-admin-tab-sites',
  templateUrl: 'admin-tab-sites.component.html'
})
export class AdminTabSitesComponent {

  @Input()
  model: AdminTabSitesModel;

  @Output()
  onForceScanClickedEvent = new EventEmitter<any>();

  @Output()
  onAddSiteClickedEvent = new EventEmitter<any>();

  onForceScanClicked(id: number, checked: boolean) {
    this.onForceScanClickedEvent.emit({id, checked});
  }

  onAddSiteClicked(scanNow: boolean) {
    this.onAddSiteClickedEvent.emit({site: this.model.site, scanNow});
  }

}
