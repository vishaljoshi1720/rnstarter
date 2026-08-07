import * as React from 'react';
import { cleanup, render, screen } from '@/lib/test-utils';
import { ScreenHeader } from '../index';

afterEach(cleanup);

describe('screenHeader', () => {
  it('renders title and subtitle', () => {
    render(
      <ScreenHeader
        title="Settings"
        subtitle="Manage preferences"
        testID="header"
      />,
    );
    expect(screen.getByTestId('header-title')).toHaveTextContent('Settings');
    expect(screen.getByTestId('header-subtitle')).toHaveTextContent('Manage preferences');
  });

  it('renders large title variant', () => {
    render(<ScreenHeader title="Home" large testID="header" />);
    expect(screen.getByTestId('header-title')).toHaveTextContent('Home');
  });
});
