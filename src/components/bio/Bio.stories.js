import Bio from './Bio'

export default {
  title: 'Components/Bio',
  component: Bio,
}

const Template = () => (
  <Bio
    headshot="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHeEGpHmxeAkxQH1jb_RmqJGdwVXefp5-88g&usqp=CAU"
    name="Angela Yang"
    tagline="Fullstack Software Developer"
  />
)

export const Default = Template.bind({})
