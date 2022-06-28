import React, { useState } from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'
import { styled } from '@stitches/react'
import { violet, blackA } from '@radix-ui/colors'
import SwitchDemo from '../Components/Switch'

const SliderDemo = () => {
  const [customers, setCustomers] = useState(0)
  const [featurePrice, setFeaturePrice] = useState(167)
  const [totalPrice, setTotalPrice] = useState()

  const featurePriceHandler = (price) => {
    setFeaturePrice(featurePrice + price)
    setTotalPrice(featurePrice * customers)
  }

  const totalPriceHandler = (value) => {
    setCustomers(value[0])
    setTotalPrice(featurePrice * customers)
  }

  return (
    <Form>
      <FeaturesContainer>
        <SwitchDemo
          featureName="Feature One"
          featurePrice={19}
          featurePriceHandler={featurePriceHandler}
        />
        <SwitchDemo
          featureName="Feature Two"
          featurePrice={49}
          featurePriceHandler={featurePriceHandler}
        />
        <SwitchDemo
          featureName="Feature Three"
          featurePrice={99}
          featurePriceHandler={featurePriceHandler}
        />
      </FeaturesContainer>
      <Slider
        max={10}
        step={1}
        aria-label="Volume"
        defaultValue={[0]}
        onValueChange={(value) => totalPriceHandler(value)}
      >
        <Track>
          <Range />
        </Track>
        <Thumb />
      </Slider>
      <TotalPriceContainer>
        <p>Total Price</p>
        <p>${totalPrice}</p>
        <p>Customers {customers}</p>
      </TotalPriceContainer>
    </Form>
  )
}

const Form = styled('form', {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: violet.violet1,
  borderRadius: '50px',
  padding: '80px',
  width: '60vw',
})

const FeaturesContainer = styled('section', {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
})

const TotalPriceContainer = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center',
  alignItems: 'center',
})

const Slider = styled(SliderPrimitive.Root, {
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

const Track = styled(SliderPrimitive.Track, {
  backgroundColor: blackA.blackA5,
  position: 'relative',
  flexGrow: 1,
  borderRadius: '9999px',
  height: 10,
})

const Range = styled(SliderPrimitive.Range, {
  position: 'absolute',
  backgroundColor: violet.violet9,
  borderTopLeftRadius: '9999px',
  borderBottomLeftRadius: '9999px',
  height: '100%',
})

const Thumb = styled(SliderPrimitive.Thumb, {
  all: 'unset',
  backgroundColor: 'red',
  width: 40,
  height: 40,
  borderRadius: '9999px',
  backgroundImage:
    'linear-gradient(120deg, hsl(272,53%,70%) 0%, hsl(226,68%,66%) 100%);display:flex;align-items:flex-start;justify-content:center',
  boxShadow: `0 2px 10px ${blackA.blackA3}`,
  '&:hover': {
    backgroundImage:
      'linear-gradient(150deg, hsl(272,53%,70%) 0%, hsl(226,68%,66%) 100%)',
  },
})

export default SliderDemo
