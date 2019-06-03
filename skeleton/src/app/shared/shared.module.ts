import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemsListComponent } from './systems-list/systems-list.component';
import { DevicesListComponent } from './devices-list/devices-list.component';
import {
	MatAutocompleteModule,
	MatButtonModule,
	MatButtonToggleModule,
	MatCardModule,
	MatCheckboxModule,
	MatChipsModule,
	MatDatepickerModule,
	MatDialogModule,
	MatIconModule,
	MatInputModule,
	MatListModule,
	MatMenuModule,
	MatNativeDateModule,
	MatPaginatorModule,
	MatProgressBarModule,
	MatProgressSpinnerModule,
	MatRadioModule,
	MatRippleModule,
	MatSelectModule,
	MatSlideToggleModule,
	MatSnackBarModule,
	MatSortModule,
	MatTableModule,
	MatTabsModule,
	MatTooltipModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { OsAvatarComponent } from './os-avatar/os-avatar.component';
import { RepeatHalfPipe } from './repeat-half.pipe';

@NgModule({
	declarations: [SystemsListComponent, DevicesListComponent, OsAvatarComponent, RepeatHalfPipe],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		MatButtonModule,
		MatMenuModule,
		MatSelectModule,
		MatInputModule,
		MatTableModule,
		MatAutocompleteModule,
		MatRadioModule,
		MatIconModule,
		MatNativeDateModule,
		MatProgressBarModule,
		MatDatepickerModule,
		MatCardModule,
		MatPaginatorModule,
		MatSortModule,
		MatCheckboxModule,
		MatProgressSpinnerModule,
		MatSnackBarModule,
		MatTabsModule,
		MatTooltipModule,
		MatDialogModule,
		MatButtonToggleModule,
		MatSlideToggleModule,
		MatListModule,
		MatRippleModule,
		MatChipsModule
	],
	exports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		MatButtonModule,
		MatMenuModule,
		MatSelectModule,
		MatInputModule,
		MatTableModule,
		MatAutocompleteModule,
		MatRadioModule,
		MatIconModule,
		MatNativeDateModule,
		MatProgressBarModule,
		MatDatepickerModule,
		MatCardModule,
		MatPaginatorModule,
		MatSortModule,
		MatCheckboxModule,
		MatProgressSpinnerModule,
		MatSnackBarModule,
		MatTabsModule,
		MatTooltipModule,
		MatDialogModule,
		MatButtonToggleModule,
		MatSlideToggleModule,
		MatListModule,
		MatRippleModule,
		MatChipsModule,

		DevicesListComponent,
		SystemsListComponent
	]
})
export class SharedModule {}
