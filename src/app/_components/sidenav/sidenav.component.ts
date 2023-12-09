import { Component } from '@angular/core';
import {sideNavData, sideNavDataAdminOnly} from "../../_data/sidenav.data";
import {AppStateService} from "../../_commons/_services/app-state.service";
import {Role} from "../../_enums/Role.enum.ts";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {

  public sideNavData = [...sideNavData];

  public sideNavDataAdminOnly = [...sideNavDataAdminOnly];

  public  adminRole = Role[Role.ADMIN];

  constructor(  public appSatateService : AppStateService) {}

}
