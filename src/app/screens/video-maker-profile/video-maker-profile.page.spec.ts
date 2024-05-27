import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VideoMakerProfilePage } from './video-maker-profile.page';

describe('VideoMakerProfilePage', () => {
  let component: VideoMakerProfilePage;
  let fixture: ComponentFixture<VideoMakerProfilePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VideoMakerProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
