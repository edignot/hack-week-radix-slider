import React, { useState } from 'react'
import Feature from '../Components/Feature'
import Text from '../Components/Text'
import Button from '../Components/Button'
import * as SliderPrimitive from '@radix-ui/react-slider'
import { styled } from '@stitches/react'
import { violet, blackA } from '@radix-ui/colors'

const PriceCalculator = () => {
  const [customers, setCustomers] = useState(0)
  const [featurePrice, setFeaturePrice] = useState(167)

  const setFeaturePriceHandler = (price) => {
    setFeaturePrice((prevFeaturePrice) => prevFeaturePrice + price)
  }

  const setCustomersHandler = (value) => {
    setCustomers(value[0])
  }

  return (
    <Form>
      <FeaturesContainer>
        <Feature
          featureName="Feature One"
          featurePrice={19}
          setFeaturePriceHandler={setFeaturePriceHandler}
        />
        <Feature
          featureName="Feature Two"
          featurePrice={49}
          setFeaturePriceHandler={setFeaturePriceHandler}
        />
        <Feature
          featureName="Feature Three"
          featurePrice={99}
          setFeaturePriceHandler={setFeaturePriceHandler}
        />
      </FeaturesContainer>
      <Slider
        max={100}
        step={1}
        aria-label="Volume"
        defaultValue={[0]}
        onValueChange={(value) => setCustomersHandler(value)}
      >
        <Track>
          <Range />
        </Track>
        <Thumb />
      </Slider>
      <TotalPriceContainer>
        <Text text={'Estimated Price'} textWeight={300} />
        <Text
          spanText={`$${featurePrice * customers}`}
          spanSize={'3rem'}
          spanWeight={500}
          text={' / yr'}
          textWeight={300}
        />
        <Button text={'Contact Sales'} disabled />
      </TotalPriceContainer>
    </Form>
  )
}

const Form = styled('form', {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  padding: '80px',
  width: '60vw',
  backgroundColor: violet.violet1,
  borderRadius: '50px',
})

const FeaturesContainer = styled('section', {
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'column',
  justifyContent: 'space-between',
  '@media screen and (min-width: 1350px)': {
    flexDirection: 'row',
  },
})

const Slider = styled(SliderPrimitive.Root, {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  paddingTop: '50px',
  paddingBottom: '50px',
  userSelect: 'none',
  touchAction: 'none',
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
  height: '100%',
  borderTopLeftRadius: '9999px',
  borderBottomLeftRadius: '9999px',
  backgroundColor: violet.violet9,
})

const Thumb = styled(SliderPrimitive.Thumb, {
  all: 'unset',
  width: 40,
  height: 40,
  backgroundColor: 'red',
  borderRadius: '9999px',
  backgroundImage:
    'linear-gradient(120deg, hsl(272,53%,70%) 0%, hsl(226,68%,66%) 100%);display:flex;align-items:flex-start;justify-content:center',
  boxShadow: `0 2px 10px ${blackA.blackA3}`,
  '&:hover': {
    backgroundImage:
      'linear-gradient(150deg, hsl(272,53%,70%) 0%, hsl(226,68%,66%) 100%)',
  },
})

const TotalPriceContainer = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center',
  alignItems: 'center',
})

export default PriceCalculator
