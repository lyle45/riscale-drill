import {Component, Input, OnInit} from '@angular/core';

@Component({
	selector: 'kt-os-avatar',
	templateUrl: './os-avatar.component.html',
	styleUrls: ['./os-avatar.component.scss']
})
export class OsAvatarComponent implements OnInit {
	osIcons: string[] = ['fa-windows', 'fa-apple', 'fa-linux'];

	@Input() osType: number | string;
	@Input() isOnline: boolean;

	constructor() {
	}

	ngOnInit() {
	}

}
