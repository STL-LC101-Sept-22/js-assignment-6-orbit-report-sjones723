import { DebugElement } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { OrbitCountsComponent } from './orbit-counts/orbit-counts.component';
import { OrbitListComponent } from './orbit-list/orbit-list.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let element: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
		  OrbitListComponent,
		  OrbitCountsComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
	fixture = TestBed.createComponent(AppComponent);
	component = fixture.debugElement.componentInstance;
	element = fixture.debugElement;

	fixture.detectChanges();
 });

 it('should create', () => {
	expect(component).toBeTruthy();
 });

 it('should contain the list component', async(() => {
	const fixture = TestBed.createComponent(AppComponent);
	fixture.detectChanges();
	const compiled = fixture.debugElement.nativeElement;
	expect(compiled.querySelector('app-orbit-list')).not.toBe(null);
 }));


});
