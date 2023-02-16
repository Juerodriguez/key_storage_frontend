import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyPostComponent } from './key-post.component';

describe('KeyPostComponent', () => {
  let component: KeyPostComponent;
  let fixture: ComponentFixture<KeyPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeyPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
