import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Satellite } from '../satellite';

import { OrbitCountsComponent } from './orbit-counts.component';

describe('OrbitCountsComponent', () => {
  let component: OrbitCountsComponent;
  let fixture: ComponentFixture<OrbitCountsComponent>;
  let element: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrbitCountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrbitCountsComponent);
    component = fixture.debugElement.componentInstance;
	 element = fixture.debugElement;

	 component.satellites = [];

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('conditionally counts how many satellites are displayed', () => {
	component.satellites = [new Satellite("Cat Scanner", "Imaging", "2012-01-05", "LOW", true)];
	fixture.detectChanges();
	let counts = element.query(By.css('.counts-total'));
	expect(counts.nativeElement.innerHTML).toBe('1');

	component.satellites = [new Satellite("Cat Scanner", "Imaging", "2012-01-05", "LOW", true), new Satellite("Cat Scanner", "Imaging", "2012-01-05", "LOW", true)];
	fixture.detectChanges();
	counts = element.query(By.css('.counts-total'));
	expect(counts.nativeElement.innerHTML).toBe('2');

	component.satellites = [];
	fixture.detectChanges();
	counts = element.query(By.css('.counts-total'));
	expect(counts.nativeElement.innerHTML).toBe('0');
	

	});
});
