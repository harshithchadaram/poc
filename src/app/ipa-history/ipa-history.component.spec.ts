import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpaHistoryComponent } from './ipa-history.component';

describe('IpaHistoryComponent', () => {
  let component: IpaHistoryComponent;
  let fixture: ComponentFixture<IpaHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpaHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpaHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
