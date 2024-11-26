// @ts-nocheck
import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { FeatureCardComponent } from "~/app/components/feature-cards/feature-card.component";

// ❖ IconCard
interface FigmaIconCardProps extends BaseFigmaProps {
  Description?: string;
  Collection?: string;
  Title?: string;
  Icon?: string;
  Alignment?: "Center" | "Left" | "Right";
}

// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: "41d42176e41c197f5cf3f6e0833c53df4528ef9a",
  mapper(figma: FigmaIconCardProps) {
    return (
      <FeatureCardComponent
        titleText={figma.Title}
        features={[
          {
            title: figma.Collection,
            description: figma.Description,
            icon: figma.Icon,
          },
        ]}
      />
    );
  },
});
