// @ts-nocheck
import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { ImageHeroComponent } from "~/app/components/image-hero/image-hero.component";

// ❖ Hero
interface FigmaHeroProps extends BaseFigmaProps {
  buttonText?: string;
  Title?: string;
}

// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: "eb8997309afb74d73131eab330e4ddb7d1ac59fa",
  mapper(figma: FigmaHeroProps) {
    return (
      <ImageHero
        alignment="center"
        buttonText={figma.buttonText}
        title={figma.Title}
      />
    );
  },
});
