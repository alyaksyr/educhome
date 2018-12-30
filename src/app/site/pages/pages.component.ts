import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {Breadcrumb} from '../../shared/views_models/breadcrumb';
import {Nav} from '../../shared/views_models/nav';
import {Page} from '../../shared/models/page';
import {PageService} from '../../core/services/pages/page.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  crumb: Breadcrumb = null;
  page: Page;

  constructor(private router: Router, private route: ActivatedRoute,
private pageService: PageService) {
    this.getPageByCode();
    this.crumb = new Breadcrumb(
      [
      new Nav('Accueil', '/'),
      new Nav('page', 'page'),
      ],
      new Nav('this.page.page_title', ''),
        'home'
    );
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      try {
        if (!params) {
          return;
        }
        const pag: string = params['p'];
        this.pageService.getPageParCode(pag).subscribe(res => {
          this.page = res.body;
        });
      } catch (error) {}
    });
  }
  getPageByCode() {
    /*this.route.queryParams.subscribe(params => {
      if (!params) {
        return;
      }
      console.log(params);
      this.pageService.getPageParCode(params['p']).subscribe(res => {
        try {
          this.page = res.body;
        } catch (error) {}
      });
    });*/
  }

}


