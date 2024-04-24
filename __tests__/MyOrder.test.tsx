/* REACT */
import React from 'react';
/* MODULES */
import {ReactTestInstance} from 'react-test-renderer';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
/* STORE */
import {Provider} from 'react-redux';
import {store} from '../src/store/store';
/* COMPONENTS */
import {NavigationContainer} from '@react-navigation/native';
import MyOrder from '../src/screens/MyOrder';
/* CONSTANTS */
import {SCREEN_NAMES} from '../src/navigation/routes';

const testID = SCREEN_NAMES.MY_ORDER;

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      setOptions: jest.fn(),
    }),
  };
});

const ComponentToRender = (
  <Provider store={store}>
    <NavigationContainer>
      <MyOrder />
    </NavigationContainer>
  </Provider>
);

describe('MyOrder screen tests', () => {
  it('MyOrder renders correctly', async () => {
    const {queryByTestId} = render(ComponentToRender);

    expect(queryByTestId(`${testID}-container`)).toBeTruthy();
    expect(queryByTestId(`${testID}-list`)).toBeTruthy();
    expect(queryByTestId(`${testID}-list-header-checkbox`)).toBeTruthy();
    expect(queryByTestId(`${testID}-pay-button`)).toBeTruthy();
  });

  it('MyOrder matches snapshot', () => {
    const component = render(ComponentToRender).toJSON();
    expect(component).toMatchSnapshot();
  });
});
