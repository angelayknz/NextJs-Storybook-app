import Bio from './Bio'

export default {
  title: 'Components/Bio',
  component: Bio,
}

const Template = () => (
  <Bio
    headshot="https://avatars.githubusercontent.com/u/94413896?v=4"
    name="Angela Yang"
    tagline="Fullstack Software Developer"
    role="Trademe software developer"
  />
)

export const Default = Template.bind({})
