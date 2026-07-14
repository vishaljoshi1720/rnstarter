import * as React from 'react';
import { StyleSheet, Text } from 'react-native';

import { cleanup, render, screen, setup } from '@/lib/test-utils';

import { Button } from '..';

afterEach(cleanup);

describe('button component ', () => {
  it('should render correctly ', () => {
    render(<Button testID="button" />);
    expect(screen.getByTestId('button')).toBeOnTheScreen();
  });
  it('should render correctly if we add explicit child ', () => {
    render(
      <Button testID="button">
        <Text> Custom child </Text>
      </Button>,
    );
    expect(screen.getByText('Custom child')).toBeOnTheScreen();
  });
  it('should render the label correctly', () => {
    render(<Button testID="button" label="Submit" />);
    expect(screen.getByTestId('button')).toBeOnTheScreen();
    expect(screen.getByText('Submit')).toBeOnTheScreen();
  });
  it('should render the loading indicator correctly', () => {
    render(<Button testID="button" loading={true} />);
    expect(screen.getByTestId('button')).toBeOnTheScreen();
    expect(screen.getByTestId('button-activity-indicator')).toBeOnTheScreen();
  });
  it('should call onClick handler when clicked', async () => {
    const onClick = jest.fn();
    const { user } = setup(
      <Button testID="button" label="Click the button" onPress={onClick} />,
    );
    expect(screen.getByTestId('button')).toBeOnTheScreen();
    await user.press(screen.getByTestId('button'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
  it('should be disabled when loading', async () => {
    const onClick = jest.fn();
    const { user } = setup(
      <Button
        testID="button"
        loading={true}
        label="Click the button"
        onPress={onClick}
      />,
    );
    expect(screen.getByTestId('button')).toBeOnTheScreen();
    expect(screen.getByTestId('button-activity-indicator')).toBeOnTheScreen();
    expect(screen.getByTestId('button')).toBeDisabled();
    await user.press(screen.getByTestId('button'));
    expect(onClick).toHaveBeenCalledTimes(0);
  });
  it('should be disabled when disabled prop is true', () => {
    render(<Button testID="button" disabled={true} />);
    expect(screen.getByTestId('button')).toBeDisabled();
  });
  it('shouldn\'t call onClick when disabled', async () => {
    const onClick = jest.fn();
    const { user } = setup(
      <Button
        testID="button"
        label="Click the button"
        disabled={true}
        onPress={onClick}
        variant="secondary"
      />,
    );
    expect(screen.getByTestId('button')).toBeOnTheScreen();
    await user.press(screen.getByTestId('button'));

    expect(screen.getByTestId('button')).toBeDisabled();

    expect(onClick).toHaveBeenCalledTimes(0);
  });
  it('should apply correct styles based on size prop', () => {
    render(<Button testID="button" size="lg" label="Go" />);
    const label = screen.getByTestId('button-label');
    const flat = StyleSheet.flatten(label.props.style);
    expect(flat).toMatchObject({ fontSize: 16 });
  });
  it('should apply correct styles for label when variant is secondary', () => {
    render(
      <Button testID="button" variant="secondary" label="Submit" />,
    );
    const label = screen.getByTestId('button-label');
    const flat = StyleSheet.flatten(label.props.style);
    expect(flat).toMatchObject({ color: '#FFFFFF' });
  });
  it('should apply correct styles for label when is disabled', () => {
    render(<Button testID="button" label="Submit" disabled />);
    const label = screen.getByTestId('button-label');
    const flat = StyleSheet.flatten(label.props.style);
    expect(flat).toMatchObject({ color: '#A3A3A3' });
  });
});
