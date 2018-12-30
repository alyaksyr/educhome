import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    document.body.className = 'hold-transition skin-blue sidebar-mini';
  }

  ngOnDestroy() {
    document.body.className = '';
  }
}
