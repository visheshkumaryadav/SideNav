import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewdashboardComponent } from './newdashboard.component';

describe('NewdashboardComponent', () => {
  let component: NewdashboardComponent;
  let fixture: ComponentFixture<NewdashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewdashboardComponent]
    });
    fixture = TestBed.createComponent(NewdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
