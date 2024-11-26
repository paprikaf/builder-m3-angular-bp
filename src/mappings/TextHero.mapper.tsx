// @ts-nocheck
import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { TextHeroComponent } from "~/app/components/text-hero/text-hero.component";

// ❖ TextHero
interface FigmaTextHeroProps extends BaseFigmaProps {
  subText?: string;
  Title?: string;
}

// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: "6fbbf3133a3f2fbdf85a148f9d2aaeb6657ad2b5",
  mapper(figma: FigmaTextHeroProps) {
    return <TextHero title={figma.Title ?? ""} subTitle={figma.subText} />;
  },
});
