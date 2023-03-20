import React from 'react';
import renderer from 'react-test-renderer';

import Calculators from '../../pages/Calculator/Calculator';

it('matches calculators snapshot', () => {
  const tree = renderer.create(
    <Calculators />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
