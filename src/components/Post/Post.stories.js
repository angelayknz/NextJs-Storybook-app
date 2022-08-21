import Post from './Post'

export default {
  title: 'Components/Post',
  component: Post,
}

const Template = () => (
  <Post
    content="Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    date="21/08/2022"
  />
)

export const Default = Template.bind({})
