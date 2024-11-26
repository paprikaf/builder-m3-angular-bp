import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FeatureCardComponent } from "./feature-card.component";
import { DEFAULT_FEATURES } from "./feature-card.types";

describe("FeatureCardComponent", () => {
  let component: FeatureCardComponent;
  let fixture: ComponentFixture<FeatureCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should render features", () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll(".feature-card").length).toBe(
      DEFAULT_FEATURES.length
    );
  });

  it("should emit feature click event", () => {
    const spy = jest.spyOn(component.onFeatureClick, "emit");
    const compiled = fixture.nativeElement as HTMLElement;
    const firstFeature = compiled.querySelector(".feature-card");
    firstFeature?.click();
    expect(spy).toHaveBeenCalledWith("shipping");
  });

  it("should handle keyboard navigation", () => {
    const spy = jest.spyOn(component.onFeatureClick, "emit");
    const compiled = fixture.nativeElement as HTMLElement;
    const firstFeature = compiled.querySelector(".feature-card");
    const enterEvent = new KeyboardEvent("keydown", { key: "Enter" });
    firstFeature?.dispatchEvent(enterEvent);
    expect(spy).toHaveBeenCalledWith("shipping");
  });

  it("should render custom title text", () => {
    const customTitle = "Custom Title";
    component.titleText = customTitle;
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector(".features-title")?.textContent).toBe(
      customTitle
    );
  });

  it("should render custom features", () => {
    const customFeatures = [DEFAULT_FEATURES[0]];
    component.features = customFeatures;
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll(".feature-card").length).toBe(1);
  });
});
