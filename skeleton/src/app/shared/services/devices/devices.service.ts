import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, publishLast, refCount} from 'rxjs/operators';
import {DevicesConfig, DevicesFilter, OsTypes, Device} from '../../models';

const createFilter = (field, op, value): DevicesFilter => ({
	field,
	op,
	value
});

const httpOptions = {
	headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class DevicesService {
	private _url = 'http://localhost:8088/devices';
	private _devices$: BehaviorSubject<Device[]> = new BehaviorSubject([]);
	public readonly devices$: Observable<Device[]> = this._devices$.asObservable();

	config: DevicesConfig = {
		skip: 0,
		take: 6,
		filter: [],
		sort: 'host',
		order: 'asc'
	};
	public hasNextPage: boolean;

	constructor(private http: HttpClient) {}

	private _loadData(): Observable<Device[]> {
		const obs = this.http
			.post<Device[]>(this._url, this.config, httpOptions)
			.pipe(
				catchError(
					(error: any): Observable<Device[]> => {
						console.log(error);
						return of([]);
					}
				),
				publishLast(),
				refCount()
			);

		obs.subscribe(devices => {
			this.hasNextPage = devices.length >= this.config.take;
			this._devices$.next(devices);
		});
		return obs;
	}

	loadPage(pageIndex: number) {
		this.config.skip = pageIndex ? pageIndex * (this.config.take - 1) : 0;
		return this._loadData();
	}

	applySearchTerm(term: string) {
		term.trim();
		const searchFilter = this.config.filter.find(
			filter => filter.field === 'host'
		);
		if (searchFilter) {
			if (searchFilter.value !== term) {
				this.config.skip = 0;
			}
			searchFilter.value = term;
		} else {
			this.config.skip = 0;
			this.config.filter.push(createFilter('host', 'like', term));
		}

		return this._loadData();
	}

	applyStatusFilter(onlineOnly: boolean) {
		this.config.skip = 0;
		if (onlineOnly) {
			this.config.filter.push(createFilter('status', '=', Number(onlineOnly)));
		} else {
			this.config.filter = this.config.filter.filter(
				filter => filter.field !== 'status'
			);
		}
		return this._loadData();
	}

	applyOsFilter(osType: OsTypes) {
		const osFilter = this.config.filter.find(
			filter => filter.field === 'osType'
		);
		if (osFilter) {
			if (osFilter.value !== osType) {
				this.config.skip = 0;
			}
			osFilter.value = osType;
		} else {
			this.config.skip = 0;
			this.config.filter.push(createFilter('osType', '=', osType));
		}

		return this._loadData();
	}
}
