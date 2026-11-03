import { definePreset } from '@primeuix/themes';
import Material from '@primeuix/themes/material';

/**
 * PrimeNG Material preset with the ModernStock blue (#1A73E8, PLAIN.md 9.2), matching the prototype tokens:
 * light mode uses blue 600 on white, dark mode the lighter blue 300 like Google's dark surfaces.
 */
export const ModernStockPreset = definePreset(Material, {
  semantic: {
    primary: {
      50: '#e8f0fe',
      100: '#d2e3fc',
      200: '#aecbfa',
      300: '#8ab4f8',
      400: '#669df6',
      500: '#4285f4',
      600: '#1a73e8',
      700: '#1967d2',
      800: '#185abc',
      900: '#174ea6',
      950: '#0d3a80',
    },
    colorScheme: {
      light: {
        primary: { color: '{primary.600}', contrastColor: '#ffffff', hoverColor: '{primary.700}', activeColor: '{primary.800}' },
      },
      dark: {
        primary: { color: '{primary.300}', contrastColor: '#062e6f', hoverColor: '{primary.200}', activeColor: '{primary.100}' },
      },
    },
  },
});
