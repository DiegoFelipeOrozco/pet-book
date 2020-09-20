import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryComponent } from './image-gallery.component';
import { DebugElement } from '@angular/core';

describe('ImageGalleryComponent', () => {
  let component: GalleryComponent;
  let fixture: ComponentFixture<GalleryComponent>;

  let allButton: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // all button

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [GalleryComponent]
    });

    // create component and test fixture
    fixture = TestBed.createComponent(GalleryComponent);

    // get test component from the fixture
    component = fixture.componentInstance;

    allButton = fixture.debugElement.query(By.css('button'));

  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
