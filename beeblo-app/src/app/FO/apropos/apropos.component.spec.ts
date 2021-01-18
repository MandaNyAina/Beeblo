/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AproposComponent } from './apropos.component';

describe('AproposComponent', () => {
  let component: AproposComponent;
  let fixture: ComponentFixture<AproposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AproposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AproposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
