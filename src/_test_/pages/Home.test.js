import React from 'react';
import renderer from 'react-test-renderer';

import Home from '../../pages/Home/Home';

it('matches home snapshot', () => {
  const tree = renderer.create(
    <Home />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
