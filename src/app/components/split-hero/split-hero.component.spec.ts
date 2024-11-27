import { ComponentFixture, TestBed } from "@angular/core/testing";
import { SplitHeroComponent } from "./split-hero.component";
import { CustomButtonComponent } from "../custom-button/custom-button.component";

describe("SplitHeroComponent", () => {
  let component: SplitHeroComponent;
  let fixture: ComponentFixture<SplitHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SplitHeroComponent, CustomButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SplitHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should render title", () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector("#split-hero-title")?.textContent).toContain(
      "OUR COMMITMENT TO SUSTAINABILITY"
    );
  });

  it("should emit event on button click", () => {
    const spy = jest.spyOn(component.onLearnMoreClick, "emit");
    component.handleLearnMore();
    expect(spy).toHaveBeenCalled();
  });

  it("should be accessible", () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const img = compiled.querySelector("img");
    expect(img?.hasAttribute("alt")).toBeTruthy();
    expect(compiled.querySelector('[role="region"]')).toBeTruthy();
  });
});
