import React from 'react'
import PostForm from './PostForm'
import { within, userEvent } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

export default {
  title: 'Components/PostForm',
  component: PostForm,
}

const Template = (args) => <PostForm {...args} />

export const Default = Template.bind({})

export const FilledForm = Template.bind({})
FilledForm.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  // await userEvent.click(canvas.getByRole('button'))
  await userEvent.click(canvas.getByText('Add new post'))
}
