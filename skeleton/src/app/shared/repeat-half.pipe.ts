import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
	name: 'repeatHalf'
})
export class RepeatHalfPipe implements PipeTransform {

	transform(value: any): any {
		value.length = value.length / 2;
		return value;
	}

}
