import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasherLayoutComponent } from './casher-layout.component';

describe('CasherLayoutComponent', () => {
  let component: CasherLayoutComponent;
  let fixture: ComponentFixture<CasherLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CasherLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CasherLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
