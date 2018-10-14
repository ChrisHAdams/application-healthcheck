import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import CheckComponentCard from '../checkComponentCard.jsx';

test('Check Component Card Snapshot Test', () => {

  const responseTime = 500;
  const responseCode = 200;

  const component = renderer.create(
    <CheckComponentCard
      name='BBC'
      description='Check the BBC Website'
      type='website'
      expectedResponseTime={responseTime}
      expectedResponseCode={responseCode}
    />,
    null);

  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();

});

test('Check Component Card DOM test', () => {
  const responseTime = 500;
  const responseCode = 200;

  const card = shallow(
    <CheckComponentCard
      name='BBC'
      description='Check the BBC Website'
      type='website'
      expectedResponseTime={responseTime}
      expectedResponseCode={responseCode}
    />
  );

  expect(card.find('h3').text()).toEqual('BBC');
  expect(card.find({ id: 'description' }).text()).toEqual('Check the BBC Website');
  expect(card.find({ id: 'type' }).text()).toContain('website');
  expect(card.find({ id: 'expectedResponseTime' }).text()).toContain(responseTime);
  expect(card.find({ id: 'expectedResponseCode' }).text()).toContain(responseCode);

});
