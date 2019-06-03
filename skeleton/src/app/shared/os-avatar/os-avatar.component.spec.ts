import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OsAvatarComponent } from './os-avatar.component';

describe('OsAvatarComponent', () => {
  let component: OsAvatarComponent;
  let fixture: ComponentFixture<OsAvatarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OsAvatarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OsAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
