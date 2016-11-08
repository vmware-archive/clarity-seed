import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ClarityModule } from 'clarity-angular';
import { HomeComponent } from './home.component';

describe('HomeComponent with TCB', function () {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ClarityModule],
      declarations: [HomeComponent]
    });
  });

  it('should instantiate HomeComponent', async(() => {
    TestBed.compileComponents().then(() => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(HomeComponent);
      fixture.detectChanges();
      expect(fixture.componentInstance instanceof HomeComponent).toBe(true, 'should create HomeComponent');
    });
  }));
});
