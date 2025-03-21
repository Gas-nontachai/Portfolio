import type { ThemeDefinition } from '@/composables/types';

const DarkTheme: ThemeDefinition = {
    isDark: true,
    colors: {
        background: '#121212',
        surface: '#1E1E1E',
        primary: '#BB86FC',
        'primary-darken-1': '#3700B3',
        secondary: '#03DAC6',
        'secondary-darken-1': '#018786',
        error: '#CF6679',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',
    },
};

export default DarkTheme;