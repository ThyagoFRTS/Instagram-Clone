import { DefaultTheme } from '@react-navigation/native';
const themes = {
    dark: {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            background: '#000',
            primary: '#fff',
            comment: '#ddd',
            overlay: 'rgba(0,0,0,0.7)',
            button: '#0095f6',
            input: 'rgb(54,54,54)',
          },
        statusBarContentColor: 'light-content',
    },
    light: {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            primary: '#000',
            comment: '#ddd',
            background: '#fff',
            line: '#000',
          },
        statusBarContentColor: 'dark-content',
    }
}

 
export {themes}