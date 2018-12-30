import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  @Input() ehbc_navs:string[];
  @Input() ehbc_active_nav:string;
  @Input() ehbc_fa:string;

  constructor() { }

  ngOnInit() {
  }

}
