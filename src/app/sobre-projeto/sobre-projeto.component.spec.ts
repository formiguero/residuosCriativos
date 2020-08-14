import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreProjetoComponent } from './sobre-projeto.component';

describe('SobreProjetoComponent', () => {
  let component: SobreProjetoComponent;
  let fixture: ComponentFixture<SobreProjetoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SobreProjetoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SobreProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
