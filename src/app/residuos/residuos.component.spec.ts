import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResiduosComponent } from './residuos.component';

describe('ResiduosComponent', () => {
  let component: ResiduosComponent;
  let fixture: ComponentFixture<ResiduosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResiduosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResiduosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
