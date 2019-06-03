import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {OsTypes, System} from '../../models';

@Injectable({
	providedIn: 'root'
})
export class SystemsService {

	systems$: Observable<System[]> = of<System[]>([{
		name: 'Linux',
		language: 'Bash',
		availableOs: [OsTypes.Linux],
		selectedDevices: [],
	}, {
		name: 'Windows',
		language: 'Batch',
		availableOs: [OsTypes.Windows],
		selectedDevices: [],
	}, {
		name: 'MacOs',
		language: 'Bash',
		availableOs: [OsTypes.Mac, OsTypes.Linux],
		selectedDevices: [],
	}]);

	constructor() {
	}
}
