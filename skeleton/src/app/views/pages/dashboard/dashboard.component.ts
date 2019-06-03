// Angular
import { Component, OnInit } from '@angular/core';
// Lodash
import { shuffle } from 'lodash';
// Services
import { LayoutConfigService } from '../../../core/_base/layout';
// Widgets model
import { SparklineChartOptions } from '../../../core/_base/metronic';
import { Widget4Data } from '../../partials/content/widgets/widget4/widget4.component';

@Component({
	selector: 'kt-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
	widget4_2: Widget4Data;

	constructor(private layoutConfigService: LayoutConfigService) {
	}

	ngOnInit(): void {
		// @ts-ignore
		this.widget4_2 = shuffle([
			{
				pic: './assets/media/users/100_4.jpg',
				username: 'For Linux',
				desc: 'Visual Designer,Google Inc.',
				url: 'https://keenthemes.com.my/metronic',
				buttonClass: 'btn-label-brand'
			}, {
				pic: './assets/media/users/100_14.jpg',
				username: 'For Windows',
				desc: 'Product Designer, Apple Inc.',
				url: 'https://keenthemes.com.my/metronic',
				buttonClass: 'btn-label-warning'
			}, {
				pic: './assets/media/users/100_11.jpg',
				username: 'For MacOs',
				desc: 'Web Developer, Facebook Inc.',
				url: 'https://keenthemes.com.my/metronic',
				buttonClass: 'btn-label-danger'
			},
		]);
	}
}
