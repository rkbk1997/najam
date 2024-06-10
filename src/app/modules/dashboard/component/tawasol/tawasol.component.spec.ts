import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TawasolComponent } from './tawasol.component';

describe('TawasolComponent', () => {
  let component: TawasolComponent;
  let fixture: ComponentFixture<TawasolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TawasolComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TawasolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
