import { matchers } from '@emotion/jest';
import { ThemeProvider, useTheme } from '@emotion/react';
import { setupRtl as setupRtlBase } from 'component-test-setup';
import { overArgs } from 'lodash';
import React from 'react';

import { Background } from '../Background';
import { theme } from '../theme';

expect.extend(matchers);

function withThemeProvider<Props>(
  WrappedComponent: React.ComponentType<Props>
) {
  const WithBoundaryComponent: React.FC<Props> = (props) => (
    <ThemeProvider theme={theme}>
      <WrappedComponent {...props} />
    </ThemeProvider>
  );

  return WithBoundaryComponent;
}

const setupRtl = overArgs(
  setupRtlBase,
  withThemeProvider
) as typeof setupRtlBase;

const renderView = setupRtl(Background, {
  children: <div data-testid="content" />,
});

const ActiveMode = () => {
  const {
    colorModes: { active },
  } = useTheme();
  return <div>{active}</div>;
};

describe('Background', () => {
  it('switches the default colormode when contrast standards are not met', () => {
    const { view } = renderView({ initialBackground: 'navy' });
    expect(view.getByTestId('content').parentElement).toHaveStyleRule(
      'background-color',
      theme.colors.navy
    );
  });

  it('allows for changing the color mode while nested', () => {
    const { view } = renderView({
      initialBackground: 'navy',
      children: (
        <div data-testid="content">
          <Background initialBackground="beige">
            <div data-testid="nested-content" />
          </Background>
        </div>
      ),
    });
    expect(view.getByTestId('content').parentElement).toHaveStyleRule(
      'background-color',
      theme.colors.navy
    );

    expect(view.getByTestId('nested-content').parentElement).toHaveStyleRule(
      'background-color',
      theme.colors.beige
    );

    /** text color reset should be on the variable provisioner if needed */
    expect(view.getByTestId('nested-content').parentElement).toHaveStyleRule(
      'color',
      theme.colors.text
    );
  });

  it('does not change the color mode when contrasts do not conflict', () => {
    const { view } = renderView({
      initialBackground: 'white',
    });

    // Grand parent
    expect(
      view.getByTestId('content').parentElement?.parentElement
    ).not.toHaveStyleRule('color', theme.colors.text);
  });

  it('updates the theme context to the current mode', () => {
    const { view } = renderView({
      initialBackground: 'navy',
      children: <ActiveMode />,
    });

    view.getByText('dark');
  });

  it('does not update the theme context when the color mode has not changed', () => {
    const { view } = renderView({
      initialBackground: 'white',
      children: <ActiveMode />,
    });

    view.getByText('light');
  });
});