/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TestToOutletComponent } from './test-to-outlet.component';

describe('TestToOutletComponent', () => {
  let component: TestToOutletComponent;
  let fixture: ComponentFixture<TestToOutletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestToOutletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestToOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
