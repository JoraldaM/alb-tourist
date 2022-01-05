import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageSinglePageComponent } from './package-single-page.component';

describe('PackageSinglePageComponent', () => {
  let component: PackageSinglePageComponent;
  let fixture: ComponentFixture<PackageSinglePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackageSinglePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageSinglePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
