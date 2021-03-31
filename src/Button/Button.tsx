import React from 'react'
import { Button as ThemeButton } from 'theme-ui'

export interface ButtonProps {
  label: string
  onClick: () => void
}

export const Button = ({ label, onClick }: ButtonProps): JSX.Element => {
  return <ThemeButton onClick={onClick}>{label}</ThemeButton>
}
