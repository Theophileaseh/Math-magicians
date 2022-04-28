import React from 'react';
import renderer from 'react-test-renderer';

import Quote from '../../pages/Quote/Quote';

it('matches quote snapshot', () => {
  const tree = renderer.create(
    <Quote />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
