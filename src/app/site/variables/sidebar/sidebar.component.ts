import { Component, OnInit, Input } from '@angular/core';
import { SidebarCours } from '../../../shared/views_models/sidebar-cours';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input('sidebar') sidebar: SidebarCours;
  
  constructor() {
  }

  ngOnInit() {

  }
  //console.log(this.sidebar.sidebox);
}