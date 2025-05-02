import { Button as MantineButton, createTheme } from '@mantine/core';

const useStyles = createTheme((theme) => ({
  root: {
    gap: '0.5rem',
    '&[data-disabled]': {
      pointerEvents: 'none',
      opacity: 0.5,
    },
    '&:focus': {
      outline: 'none',
      borderColor: theme.colors[theme.primaryColor][5],
      boxShadow: `0 0 0 3px ${theme.colors[theme.primaryColor][1]}`,
    },
    '&[data-invalid]': {
      borderColor: theme.colors.red[6],
      boxShadow: `0 0 0 3px ${theme.colors.red[1]}`,
    },
  },
  default: {
    backgroundColor: theme.colors[theme.primaryColor][6],
    color: theme.white,
    '&:hover': { backgroundColor: theme.colors[theme.primaryColor][7] },
  },
  destructive: {
    backgroundColor: theme.colors.red[6],
    color: theme.white,
    '&:hover': { backgroundColor: theme.colors.red[7] },
  },
  outline: {
    border: `1px solid ${theme.colors.gray[3]}`,
    backgroundColor: theme.white,
    '&:hover': {
      backgroundColor: theme.colors.gray[0],
      color: theme.black,
    },
  },
  secondary: {
    backgroundColor: theme.colors.gray[6],
    color: theme.white,
    '&:hover': { backgroundColor: theme.colors.gray[7] },
  },
  ghost: {
    '&:hover': {
      backgroundColor: theme.colors.gray[1],
      color: theme.black,
    },
  },
  link: {
    color: theme.colors[theme.primaryColor][6],
    textDecoration: 'underline',
    '&:hover': { textDecoration: 'underline' },
  },
}));

type ButtonProps = React.ComponentProps<typeof MantineButton> & {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
};

export function Button({ variant = 'default', className, ...props }: ButtonProps) {
  const { classes, cx } = useStyles();
  return (
      <MantineButton
          className={cx(classes.root, classes[variant], className)}
          variant={variant === 'outline' ? 'outline' : 'filled'}
          color={
            variant === 'destructive' ? 'red' :
                variant === 'secondary' ? 'gray' :
                    undefined
          }
          {...props}
      />
  );
}