import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TireAdminComponent } from './tire-admin.component';

describe('TireAdminComponent', () => {
  let component: TireAdminComponent;
  let fixture: ComponentFixture<TireAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TireAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TireAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
