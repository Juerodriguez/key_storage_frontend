import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyViewdetailComponent } from './key-viewdetail.component';

describe('KeyViewdetailComponent', () => {
  let component: KeyViewdetailComponent;
  let fixture: ComponentFixture<KeyViewdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyViewdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeyViewdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
