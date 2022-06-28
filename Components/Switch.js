import * as SwitchPrimitive from '@radix-ui/react-switch'
import { styled } from '@stitches/react'
import { violet, blackA } from '@radix-ui/colors'

const SwitchDemo = ({ description, price }) => (
  <>
    <FeatureContainer>
      <FeatureDescription>
        <p>{description}</p>
        <p>{price}</p>
      </FeatureDescription>
      <Switch defaultChecked>
        <Thumb />
      </Switch>
    </FeatureContainer>
  </>
)

const FeatureContainer = styled('section', {
  border: '2px solid red',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '10px',
  border: `2px solid ${violet.violet5}`,
  borderRadius: '10px',
})

const FeatureDescription = styled('section', {
  padding: '10px',
})

const Switch = styled(SwitchPrimitive.Root, {
  all: 'unset',
  width: 60,
  height: 30,
  borderRadius: '9999px',
  display: 'flex',
  alignItems: 'center',
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
