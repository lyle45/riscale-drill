export interface Device {
	host: string;
	id: number;
	ip: string;
	lastSeen: string;
	osName: string;
	osType: OsTypes;
	status: number;
}

export enum OsTypes {
	Windows,
	Mac,
	Linux,
}

export interface DevicesConfig {
	skip?: number;
	take?: number;
	filter?: DevicesFilter[];
	sort?: string;
	order?: 'asc' | 'desc';
}

export interface DevicesFilter {
	field: string;
	op: string;
	value: any;
}

export interface System {
	name: string;
	language: string;
	availableOs: OsTypes[];
	selectedDevices: Device[];
}
