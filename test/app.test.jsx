import React from 'react';
import renderer from 'react-test-renderer';
import App from '../src/js/App';

describe('<App>', () => {
  test('render correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
