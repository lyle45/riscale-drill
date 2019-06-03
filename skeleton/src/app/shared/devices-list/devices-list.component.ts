import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSlideToggleChange} from '@angular/material';
import {DevicesService} from '../services/devices/devices.service';
import {Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';
import {Device, OsTypes} from '../models';

@Component({
	selector: 'kt-devices-list',
	templateUrl: './devices-list.component.html',
	styleUrls: ['./devices-list.component.scss'],
	providers: [DevicesService]
})
export class DevicesListComponent implements OnInit, AfterViewInit {
	private searchTerm = new Subject<string>();
	displayedColumns: string[] = ['select', 'host', 'ip'];
	online: boolean;
	OsTypes = OsTypes;
	osType: OsTypes;

	@ViewChild(MatPaginator) paginator: MatPaginator;

	@Input() availableOs: OsTypes[];
	@Input() selectedDevices: Device[] = [];

	constructor(public devicesService: DevicesService) {
	}

	ngOnInit() {
		if (this.availableOs.length) {
			this.osType = this.availableOs[0];
			this.setOsFilter(this.osType);
		}
	}

	ngAfterViewInit() {
		this.searchTerm
			.pipe(
				debounceTime(300),
				distinctUntilChanged()
			)
			.subscribe((searchTerm: string) => {
				if (this.paginator) {
					this.paginator.firstPage();
				}
				return this.devicesService.applySearchTerm(searchTerm);
			});

		this.paginator.page.subscribe(page =>
			this.devicesService.loadPage(page.pageIndex)
		);
	}

	applySearch(value: string) {
		this.searchTerm.next(value);
	}

	toggleStatusFilter(onlineStatus: MatSlideToggleChange) {
		if (this.paginator) {
			this.paginator.firstPage();
		}
		this.devicesService.applyStatusFilter(onlineStatus.checked);
	}

	setOsFilter(osType: OsTypes | null) {
		if (this.paginator) {
			this.paginator.firstPage();
		}
		this.devicesService.applyOsFilter(osType);
	}

	selectDevice(device: Device) {
		const deviceIndex = this.selectedDevices.findIndex(
			selectedDevice => selectedDevice.id === device.id
		);
		if (deviceIndex === -1) {
			this.selectedDevices.push(device);
		} else {
			this.selectedDevices.splice(deviceIndex, 1);
		}
	}

	checkIfSelected(deviceId: number) {
		return !!this.selectedDevices.find(
			selectedDevice => selectedDevice.id === deviceId
		);
	}


}
