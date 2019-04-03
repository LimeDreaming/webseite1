import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdnerComponent } from './ordner.component';

describe('OrdnerComponent', () => {
  let component: OrdnerComponent;
  let fixture: ComponentFixture<OrdnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdnerComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
