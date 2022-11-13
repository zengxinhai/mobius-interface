import React, { CSSProperties } from 'react';
import MuiButton from '@mui/material/Button';

type ButtonSize = 'small' | 'medium' | 'large'
type ButtonVariant = 'contained' | 'outlined' | 'text'

type ButtonProps = {
  size?: ButtonSize
  variant?: ButtonVariant
  disabled?: boolean
  onClick?: () => void
  style?: CSSProperties
  href?: string
  className?: string
  fullwidth?: boolean
  children?: React.ReactNode
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <MuiButton {...props} />
  )
}

export default Button;
