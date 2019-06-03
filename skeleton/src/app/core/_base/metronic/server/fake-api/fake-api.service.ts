// Angular
import {Injectable} from '@angular/core';
// Angular in memory
import {InMemoryDbService} from 'angular-in-memory-web-api';
// RxJS
import {Observable} from 'rxjs';
// Auth
import {AuthDataContext} from '../../../../auth';
// ECommerce
import {ECommerceDataContext} from '../../../../e-commerce';
// Models
import {CarsDb} from './fake-db/cars';

@Injectable()
export class FakeApiService implements InMemoryDbService {
	/**
	 * Service Constructore
	 */
	constructor() {
	}

	/**
	 * Create Fake DB and API
	 */
	createDb(): {} | Observable<{}> {
		// tslint:disable-next-line:class-name
		let devices = [];

		function addDevice(host) {
			let i = devices.length + 1;
			devices.push(Object.assign({id: i}, {
				host: host + i,
				ip: '192.168.1.' + i,
				osType: i % 3, // 0-windows, 1-Mac, 2-Linux
				osName: ['Windows 10', 'MacOs Mojavi', 'Linux Ubuntu'][i % 3],
				status: i % 2, // 0-offline, 1-online
				lastSeen: new Date()
			}));
		}

		for (let i = 0; i < 100; i++) {
			addDevice('Comp-');
		}
		const db = {
			// auth module
			users: AuthDataContext.users,
			roles: AuthDataContext.roles,
			permissions: AuthDataContext.permissions,

			// e-commerce
			// customers
			customers: ECommerceDataContext.customers,
			// products
			products: ECommerceDataContext.cars,
			productRemarks: ECommerceDataContext.remarks,
			productSpecs: ECommerceDataContext.carSpecs,

			// orders
			orders: ECommerceDataContext.orders,

			// data-table
			cars: CarsDb.cars,

			// devices
			devices
		};

		return db;
	}
}
