import { Component, OnInit } from '@angular/core';
import {SystemsService} from '../services/systems/systems.service';


@Component({
  selector: 'kt-systems-list',
  templateUrl: './systems-list.component.html',
  styleUrls: ['./systems-list.component.scss']
})
export class SystemsListComponent implements OnInit {

	constructor(public systemsService: SystemsService) { }

  ngOnInit() {
  }

}
