// @ts-nocheck
import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { SplitHeroComponent } from "~/app/components/split-hero/split-hero.component";

// ❖ SplitHero
interface FigmaSplitHeroProps extends BaseFigmaProps {
  ButtonText?: string;
  Subtitle?: string;
  imageUrl?: string;
  Title?: string;
}

// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: "e6a08b48191e2288df46907e518540bf3de22947",
  mapper(figma: FigmaSplitHeroProps) {
    return (
      <SplitHeroComponent
        title={figma.Title}
        description={figma.Subtitle}
        buttonText={figma.ButtonText}
        imageSrc={figma.imageUrl}
        imageAlt={figma.Title}
      />
    );
  },
});
