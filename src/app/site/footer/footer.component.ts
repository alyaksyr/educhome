import { Component, OnInit } from '@angular/core';
import { Page } from 'src/app/shared/models/page';
import { Router, ActivatedRoute } from '@angular/router';
import { PageService } from 'src/app/core/services/pages/page.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  pages: Page[] = [];
  selectedPage: Page;

  constructor(private router: Router, private route: ActivatedRoute,
    private pageService: PageService) { }

  ngOnInit() {
    this.pageService.getAllPage().subscribe(res => {
      try {
        this.pages = res.body;
      } catch (error) {}
    });
  }
}
