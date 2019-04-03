import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeueOrdnerComponent } from './neue-ordner.component';

describe('NeueOrdnerComponent', () => {
  let component: NeueOrdnerComponent;
  let fixture: ComponentFixture<NeueOrdnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeueOrdnerComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeueOrdnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
