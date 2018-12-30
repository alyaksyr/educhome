import { Component, OnInit, Input } from '@angular/core';
import { Breadcrumb } from '../../../shared/views_models/breadcrumb';

@Component({
  selector: 'app-crumb',
  templateUrl: './crumb.component.html',
  styleUrls: ['./crumb.component.scss']
})
export class CrumbComponent implements OnInit {
  @Input('crumb') crumb:Breadcrumb;
  constructor() { }

  ngOnInit() {
  }

}
