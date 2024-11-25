import { RegisteredComponent } from '@builder.io/sdk-angular';
import { CustomButtonComponent } from './app/custom-button/custom-button.component';
import { ImageHeroComponent } from './app/image-hero/image-hero.component';
export const customComponents: RegisteredComponent[] = [
  {
    component: CustomButtonComponent,
    name: 'M3 Button',
    friendlyName: 'M3 Button',
    image: "https://cdn.builder.io/api/v1/image/assets%2Fa87584e551b6472fa0f0a2eb10f2c0ff%2F5803f6cb27764a339296458c0056dc33",
    inputs: [
        { name: 'label', type: 'string', defaultValue: 'Click Me' },
        { name: 'disabled', type: 'boolean', defaultValue: false },
        {
          name: 'type',
          type: 'string',
          enum: ['elevated', 'filled', 'filled-tonal', 'outlined', 'text', 'icon', 'segmented', 'fab', 'extended-fab'],
          defaultValue: 'filled',
      },
    ],
    // Optional: additional options for the Builder editor
    defaultStyles: {
      margin: '10px',
      textAlign: 'center',
    },
    noWrap: true, // Prevent Builder from wrapping it in a <div>
  },
  { 
    component: ImageHeroComponent,
    name: 'ImageHero',
    image: "https://cdn.builder.io/api/v1/image/assets%2Fa87584e551b6472fa0f0a2eb10f2c0ff%2F1da6aa719e0648b481ccd964186a4bcb",
    inputs: [
      {
        name: 'title',
        type: 'string',
        defaultValue: 'SHOP ESSENTIALS',
      },
      {
        name: 'subTitle',
        type: 'richText',
        defaultValue: '<p>Shoppable essentials for your every day life.</p>',
      },
      {
        name: 'buttonText',
        type: 'string',
        defaultValue: 'Shop Now',
      },
      {
        name: 'buttonLink',
        type: 'url',
        defaultValue: '/',
      },
      {
        name: 'backgroundImage',
        type: 'file',
        defaultValue:
          'https://cdn.builder.io/api/v1/image/assets%2Fa87584e551b6472fa0f0a2eb10f2c0ff%2F61c4f304ac9448b1ad741b83de17e48a',
      },
      {
        name: 'alignment',
        type: 'string',
        enum: ['left', 'center', 'right'],
        defaultValue: 'center',
      },
      {
        name: 'makeFullBleed',
        type: 'boolean',
        defaultValue: false,
      },
    ],
  },
];
