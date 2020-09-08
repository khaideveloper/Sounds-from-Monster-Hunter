import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { SoundboardPage } from './soundboard.page';

describe('SoundboardPage', () => {
  let component: SoundboardPage;
  let fixture: ComponentFixture<SoundboardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SoundboardPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(SoundboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
