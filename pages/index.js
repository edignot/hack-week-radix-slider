import React, { useState } from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'
import { styled } from '@stitches/react'
import { violet, blackA } from '@radix-ui/colors'

const Slider = () => {
  const [price, setPrice] = useState(0)

  const calculatePriceHandler = (value) => {
    setPrice(value)
  }

  return (
    <StyledForm>
      <StyledSlider
        max={100}
        step={1}
        aria-label="Volume"
        defaultValue={[10]}
        onValueChange={(value) => calculatePriceHandler(value)}
      >
        <StyledTrack>
          <StyledRange />
        </StyledTrack>
        <StyledThumb />
      </StyledSlider>
      <StyledPriceContainer>
        <p>Total Price</p>
        <p>${price}</p>
      </StyledPriceContainer>
    </StyledForm>
  )
}

const StyledForm = styled('form', {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: violet.violet1,
  borderRadius: '50px',
  padding: '100px',
  width: '80vw',
})

const StyledPriceContainer = styled('div', {
  padding: '50px',
  borderRadius: '10px',
  backgroundColor: blackA.blackA2,
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center',
  alignItems: 'center',
})

const StyledSlider = styled(SliderPrimitive.Root, {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  userSelect: 'none',
  touchAction: 'none',
  width: '100%',
  height: '100%',
  paddingTop: '50px',
  paddingBottom: '50px',
})

const StyledTrack = styled(SliderPrimitive.Track, {
  backgroundColor: blackA.blackA6,
  position: 'relative',
  flexGrow: 1,
  borderRadius: '9999px',
  height: 20,
})

const StyledRange = styled(SliderPrimitive.Range, {
  position: 'absolute',
  backgroundColor: violet.violet9,
  borderTopLeftRadius: '9999px',
  borderBottomLeftRadius: '9999px',
  height: '100%',
})

const StyledThumb = styled(SliderPrimitive.Thumb, {
  all: 'unset',
  display: 'block',
  backgroundColor: 'red',
  width: 40,
  height: 40,
  borderRadius: '9999px',
  backgroundImage:
    'linear-gradient(120deg, hsl(272,53%,70%) 0%, hsl(226,68%,66%) 100%);display:flex;align-items:flex-start;justify-content:center',
  boxShadow: `0 2px 10px ${blackA.blackA6}`,
  '&:hover': {
    backgroundImage:
      'linear-gradient(150deg, hsl(272,53%,70%) 0%, hsl(226,68%,66%) 100%)',
  },
})

export default Slider
