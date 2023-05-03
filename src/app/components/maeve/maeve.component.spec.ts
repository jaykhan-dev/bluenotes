import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaeveComponent } from './maeve.component';

describe('MaeveComponent', () => {
  let component: MaeveComponent;
  let fixture: ComponentFixture<MaeveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaeveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaeveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
