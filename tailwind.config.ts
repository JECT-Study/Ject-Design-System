import { theme } from '@jects/jds/tokens';
import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/jds/src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        semantic: theme.color.semantic,
        primitive: theme.colorPrimitive.primitive,
      },
      spacing: {
        ...theme.scheme.semantic.spacing,
        ...theme.scheme.semantic.margin,
      },
      borderRadius: theme.scheme.semantic.radius,
      borderWidth: theme.scheme.semantic.strokeWeight,
      opacity: theme.scheme.semantic.opacity,
      fontFamily: theme.typo.primitive.typeface,
      fontSize: {
        ...theme.typo.primitive.fontSize,
      },
      lineHeight: {
        ...theme.typo.primitive.font.lineHeight,
      },
      letterSpacing: {
        ...theme.typo.primitive.font.letterSpacing,
      },
      transitionDuration: theme.environment.semantic.duration,
      transitionTimingFunction: theme.environment.semantic.motion,
      screens: {
        mobile: '320px',
        tablet: '768px',
        desktop: '1200px',
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      const textStyleUtilities = Object.entries(theme.textStyle).reduce(
        (acc, [key, styleObj]) => {
          const styles: Record<string, string> = {
            fontSize: styleObj.fontSize,
            lineHeight: styleObj.lineHeight,
            fontFamily: styleObj.fontFamily,
            fontWeight: styleObj.fontWeight,
            letterSpacing: styleObj.letterSpacing,
          };

          if (styleObj.paragraphIndent !== '0px') {
            styles.textIndent = styleObj.paragraphIndent;
          }

          acc[`.${key}`] = styles;

          return acc;
        },
        {} as Record<string, Record<string, string>>,
      );

      addUtilities(textStyleUtilities);
    }),
  ],
};

export default config;
