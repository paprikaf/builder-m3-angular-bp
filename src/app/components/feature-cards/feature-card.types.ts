export interface FeatureItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  backgroundColor: string;
  iconWidth: string;
}

export interface FeatureCardProps {
  features?: FeatureItem[];
  titleText?: string;
  onFeatureClick?: (id: string) => void;
}

export const DEFAULT_FEATURES: FeatureItem[] = [
  {
    id: "shipping",
    icon: "https://cdn.builder.io/api/v1/image/assets/bdd96eed1a2648e789e2e0d740aca175/c3ddf2e47eddd49fce647b7e46605910ed67c136bb8af5925a829330a38e2963?apiKey=bdd96eed1a2648e789e2e0d740aca175&",
    title: "2-DAY SHIPPING",
    description:
      "Shop with confidence, knowing your new look will arrive quickly and hassle-free.",
    backgroundColor: "rgba(200, 226, 238, 1)",
    iconWidth: "49px",
  },
  {
    id: "carbon",
    icon: "https://cdn.builder.io/api/v1/image/assets/bdd96eed1a2648e789e2e0d740aca175/edc1459810d44e5583173a29cb093f69bc04257e3855b4bef64b7110aec7a5be?apiKey=bdd96eed1a2648e789e2e0d740aca175&",
    title: "CARBON NEUTRAL",
    description:
      "Through energy efficient production methods, eco-conscious packaging, & investing in carbon offset projects, we're actively working to minimize our environmental impact.",
    backgroundColor: "rgba(200, 238, 206, 1)",
    iconWidth: "49px",
  },
  {
    id: "dye",
    icon: "https://cdn.builder.io/api/v1/image/assets/bdd96eed1a2648e789e2e0d740aca175/934056fb8d9a030b28764a9628e3cc11159464567c1c8081287ed1b03c2d0f61?apiKey=bdd96eed1a2648e789e2e0d740aca175&",
    title: "ADVANCED DYE TECH",
    description:
      "Shopaholic's advanced dye tech uses less water, energy, and chemicals, delivering vibrant, long-lasting colors with a reduced environmental impact.",
    backgroundColor: "rgba(212, 200, 238, 1)",
    iconWidth: "35px",
  },
];
