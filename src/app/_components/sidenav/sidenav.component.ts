import { Component } from '@angular/core';
import {sideNavData} from "../../_data/sidenav.data";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {

  public sideNavData = [...sideNavData];

  constructor() {}

}
