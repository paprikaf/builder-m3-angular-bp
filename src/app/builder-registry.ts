// import { RegisteredComponent } from "@builder.io/sdk-angular";
import type { RegisteredComponent } from "@builder.io/sdk-angular";
import { AnchorWrapperComponent } from "./components/anchor-wrapper/anchor-wrapper.component";
import { CustomButtonComponent } from "./components/custom-button/custom-button.component";
import { FeatureCardComponent } from "./components/feature-cards/feature-card.component";
import { ImageHeroComponent } from "./components/image-hero/image-hero.component";
import { SplitHeroComponent } from "./components/split-hero/split-hero.component";
import { TextHeroComponent } from "./components/text-hero/text-hero.component";
import { CustomCodeComponent } from "./components/custom-code/custom-code-component";

export const CUSTOM_COMPONENTS: RegisteredComponent[] = [
  {
    component: CustomCodeComponent,
    name: 'Custom Code',
    inputs: [
      {
        name: 'code',
        type: 'string',
        defaultValue: '',
      },
      {
        name: 'scriptsClientOnly',
        type: 'boolean',
        defaultValue: false,
      }
    ],
  },
  {
    component: AnchorWrapperComponent,
    name: "Anchor Wrapper",
    canHaveChildren: true,
    inputs: [
      {
        name: "anchorId",
        type: "string",
        defaultValue: "default-anchor",
        helperText: "Unique anchor ID for linking",
      },
    ],
  },
  {
    component: FeatureCardComponent,
    name: "FeatureCard",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fa87584e551b6472fa0f0a2eb10f2c0ff%2Fa1602969eefa459cbc1cc4e9bff96555",
    inputs: [
      {
        name: "titleText",
        type: "string",
        defaultValue: "Our Features",
        required: true,
      },
      {
        name: "features",
        type: "list",
        subFields: [
          {
            name: "id",
            type: "string",
            defaultValue: "feature-1",
            required: true,
          },
          {
            name: "icon",
            type: "file",
            defaultValue:
              "https://cdn.builder.io/static/media/builder-logo.bff0faae.png",
            required: true,
          },
          {
            name: "iconWidth",
            type: "string",
            defaultValue: "50px",
          },
          {
            name: "backgroundColor",
            type: "color",
            defaultValue: "#f0f0f0",
          },
          {
            name: "title",
            type: "string",
            defaultValue: "Feature Title",
            required: true,
          },
          {
            name: "description",
            type: "string",
            defaultValue: "This is a brief description of the feature.",
          },
        ],
        defaultValue: [
          {
            id: "feature-1",
            icon: "https://cdn.builder.io/static/media/builder-logo.bff0faae.png",
            iconWidth: "50px",
            backgroundColor: "#f0f0f0",
            title: "Feature One",
            description: "Description for feature one.",
          },
          {
            id: "feature-2",
            icon: "https://cdn.builder.io/static/media/builder-logo.bff0faae.png",
            iconWidth: "50px",
            backgroundColor: "#f8f8f8",
            title: "Feature Two",
            description: "Description for feature two.",
          },
        ],
      },
    ],
  },
  {
    component: ImageHeroComponent,
    name: "ImageHero",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fa87584e551b6472fa0f0a2eb10f2c0ff%2F1da6aa719e0648b481ccd964186a4bcb",
    inputs: [
      {
        name: "title",
        type: "string",
        defaultValue: "SHOP ESSENTIALS",
      },
      {
        name: "subTitle",
        type: "richText",
        defaultValue: "<p>Shoppable essentials for your everyday life.</p>",
      },
      {
        name: "buttonText",
        type: "string",
        defaultValue: "Shop Now",
      },
      {
        name: "buttonLink",
        type: "url",
        defaultValue: "/",
      },
      {
        name: "backgroundImage",
        type: "file",
        defaultValue:
          "https://cdn.builder.io/api/v1/image/assets%2Fa87584e551b6472fa0f0a2eb10f2c0ff%2F61c4f304ac9448b1ad741b83de17e48a",
      },
      {
        name: "alignment",
        type: "string",
        enum: ["left", "center", "right"],
        defaultValue: "center",
      },
      {
        name: "makeFullBleed",
        type: "boolean",
        defaultValue: false,
      },
    ],
  },
  {
    component: CustomButtonComponent,
    name: "M3 Button",
    friendlyName: "M3 Button",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fa87584e551b6472fa0f0a2eb10f2c0ff%2F5803f6cb27764a339296458c0056dc33",
    inputs: [
      { name: "label", type: "string", defaultValue: "Click Me" },
      { name: "disabled", type: "boolean", defaultValue: false },
      {
        name: "type",
        type: "string",
        enum: ["elevated", "filled", "tonal", "outlined", "text"],
        defaultValue: "filled",
      },
    ],
    defaultStyles: {
      margin: "10px",
      textAlign: "center",
    },
    noWrap: true, // Prevent Builder from wrapping it in a <div>
  },
  {
    component: SplitHeroComponent,
    name: "SplitHeroComponent",
    inputs: [
      {
        name: "buttonText",
        type: "string",
      },
      {
        name: "buttonType",
        type: '"outlined" | "filled" | "elevated" | "tonal" | "text"',
      },
      {
        name: "description",
        type: "string",
      },
      {
        name: "imageAlt",
        type: "string",
      },
      {
        name: "imageSrc",
        type: "string",
      },
      {
        name: "title",
        type: "string",
      },
    ],
  },
  {
    component: TextHeroComponent,
    name: "TextHero",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fa87584e551b6472fa0f0a2eb10f2c0ff%2F6c33301bb9e94d46ad293b704457b991",
    inputs: [
      {
        name: "title",
        type: "string",
        defaultValue: "STEP INTO FRESH STYLES",
        required: true,
      },
      {
        name: "subTitle",
        type: "richText",
      },
    ],
  },
];
