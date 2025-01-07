export const defaultTheme = {
  colors: {
    white: '#fff',
    blue: '#3294F8',
    base: {
      title: '#E7EDF4',
      subtitle: '#C4D4E3',
      text: '#AFC2D4',
      span: '#7B96B2',
      label: '#3A536B',
      border: '#1C2F41',
      post: '#112131',
      profile: '#0B1B2B',
      background: '#071422',
      input: '#040F1A',
    },
  } as const,
  font: {
    family: "'Nunito', sans-serif",
    xs: `400 12px/160% 'Nunito', sans-serif`,
    s: `400 14px/160% 'Nunito', sans-serif`,
    m: `400 16px/160% 'Nunito', sans-serif`,
    l: `400 18px/160% 'Nunito', sans-serif`,
    xl: `400 20px/160% 'Nunito', sans-serif`,
    '2xl': `400 24px/160% 'Nunito', sans-serif`,
  } as const,
} as const
