import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TawasoldetailsComponent } from './tawasoldetails.component';

describe('TawasoldetailsComponent', () => {
  let component: TawasoldetailsComponent;
  let fixture: ComponentFixture<TawasoldetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TawasoldetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TawasoldetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
