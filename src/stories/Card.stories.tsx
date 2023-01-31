import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';
import { store } from '../store';
import Card from '../components/Card/Card';
import Clubs10 from '../assets/clubs/Clubs10';

export default {
    title: 'Example/Card',
    component: Card,
    decorators: [(story) => <Provider store={store}>{story()}</Provider>],
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    value: 10,
    cardSuit: '♣',
    isFaceDown: false,
    image: <Clubs10 />,
    id: 'clubs-10',
    canBePutOn: ['hearts-11, diamonds-11'],
    canBePutOnHome: 'clubs-9',
};
