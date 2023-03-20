import React from 'react';
import renderer from 'react-test-renderer';

import Display from '../../components/Display';

it('matches display snapshot', () => {
  const tree = renderer.create(
    <Display />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
