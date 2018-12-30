import { Component, OnInit } from '@angular/core';
import { Sidebox } from '../../../shared/views_models/sidebox';
import { SidebarCours } from '../../../shared/views_models/sidebar-cours';
import { Nav } from '../../../shared/views_models/nav';

@Component({
  selector: 'app-list-cours',
  templateUrl: './list-cours.component.html',
  styleUrls: ['./list-cours.component.scss']
})
export class ListCoursComponent implements OnInit {
	sidebar: SidebarCours = null;

  constructor() { 
  	this.sidebar= new SidebarCours(
  		[
  			new Sidebox(
  				'Classes',
	  			[
	  				new Nav('Terminale C','/site/cours/terminalec'),
	  				new Nav('Terminale D','/site/cours/terminaled'),
	  				new Nav('Terminale A','/site/cours/terminalea'),
	  				new Nav('Permière C','/site/cours/premierec'),
	  			],
  				'',
  			),
  			new Sidebox(
  				'Favori',
	  			[
	  				new Nav('Terminale C','/site/cours/terminalec'),
	  				new Nav('Terminale D','/site/cours/terminaled'),
	  				new Nav('Terminale A','/site/cours/terminalea'),
	  				new Nav('Permière C','/site/cours/premierec'),
	  			],
  				'',
  			),
  		]
  	);
 
  }

  ngOnInit() {
  }

}
