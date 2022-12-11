import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OrbitListComponent } from './orbit-list.component';
import { Satellite } from '../satellite';
import { By } from "@angular/platform-browser";
import { DebugElement } from '@angular/core';

describe('OrbitListComponent', () => {
	let component: OrbitListComponent;
	let fixture: ComponentFixture<OrbitListComponent>;
	let element: DebugElement;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [OrbitListComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(OrbitListComponent);
		component = fixture.debugElement.componentInstance;
		element = fixture.debugElement;

		component.satellites = [];

		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('conditionally adds table rows dependent on satellite', () => {
		component.satellites = [new Satellite("Cat Scanner", "Imaging", "2012-01-05", "LOW", true)];
		fixture.detectChanges();
		let numDataRows = element.queryAll(By.css('.data-row')).length;
		expect(numDataRows).toBe(1);

		component.satellites = [new Satellite("Cat Scanner", "Imaging", "2012-01-05", "LOW", true), new Satellite("Cat Scanner", "Imaging", "2012-01-05", "LOW", true)];
		fixture.detectChanges();
		numDataRows = element.queryAll(By.css('.data-row')).length;
		expect(numDataRows).toBe(2);

		component.satellites = [];
		fixture.detectChanges();
		numDataRows = element.queryAll(By.css('.data-row')).length;
		expect(numDataRows).toBe(0);

	});

	it('should add a warning class to satellites with space debris type', () => {
		component.satellites = [new Satellite("Cat Scanner", "Imaging", "2012-01-05", "LOW", true)];
		fixture.detectChanges();
		expect(element.query(By.css('.warning'))).toBeFalsy();

		component.satellites = [new Satellite("Weber Grill", "Space Debris", "1996-03-25", "HIGH", false)];
		fixture.detectChanges();
		expect(element.query(By.css('.warning'))).toBeTruthy();
	});
});
