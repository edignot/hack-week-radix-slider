import { styled } from '@stitches/react'
import { violet, blackA } from '@radix-ui/colors'

const Button = ({ text }) => {
  return <StyledButton>{text}</StyledButton>
}

const StyledButton = styled('button', {
  all: 'unset',
  padding: '10px 20px',
  marginTop: '20px',
  borderRadius: 10,
  backgroundColor: violet.violet9,
  color: violet.violet1,
  boxShadow: `0 2px 10px ${blackA.blackA3}`,
})

export default Button
