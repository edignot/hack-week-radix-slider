import React, { useState } from 'react'
import * as SwitchPrimitive from '@radix-ui/react-switch'
import { styled } from '@stitches/react'
import { violet, blackA } from '@radix-ui/colors'

const SwitchDemo = ({ featureName, featurePrice, setFeaturePriceHandler }) => {
  const toggleFeatureHandler = (value) => {
    !value
      ? setFeaturePriceHandler(-featurePrice)
      : setFeaturePriceHandler(featurePrice)
  }

  return (
    <>
      <FeatureContainer>
        <FeatureDescription>
          <p>{featureName}</p>
          <p style={{ fontWeight: '300' }}>
            <span style={{ fontSize: '1.5rem', fontWeight: '500' }}>
              ${featurePrice}
            </span>{' '}
            / yr
          </p>
        </FeatureDescription>
        <Switch
          defaultChecked
          onCheckedChange={(value) => toggleFeatureHandler(value)}
        >
          <Thumb />
        </Switch>
      </FeatureContainer>
    </>
  )
}

const FeatureContainer = styled('section', {
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  padding: '20px',
  border: `2px solid ${violet.violet5}`,
  borderRadius: '10px',
  marginBottom: '20px',
  '@media screen and (min-width: 1350px)': {
    width: '30%',
  },
})

const FeatureDescription = styled('section', {
  padding: '10px',
})

const Switch = styled(SwitchPrimitive.Root, {
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  minWidth: 60,
  height: 30,
  borderRadius: '9999px',
  padding: '2px',
  boxShadow: `0 2px 10px ${blackA.blackA3}`,
  backgroundColor: blackA.blackA1,
  border: `2px solid ${blackA.blackA5}`,
  '&[data-state="checked"]': { border: `2px solid ${violet.violet5}` },
})

const Thumb = styled(SwitchPrimitive.Thumb, {
  width: 30,
  height: 30,
  backgroundColor: blackA.blackA5,
  borderRadius: '9999px',
  boxShadow: `0 2px 2px ${blackA.blackA3}`,
  transition: 'transform 200ms',
  '&[data-state="checked"]': {
    transform: 'translateX(30px)',
    backgroundImage:
      'linear-gradient(200deg, hsl(272,53%,70%) 0%, hsl(226,68%,66%) 100%)',
  },
})

export default SwitchDemo
