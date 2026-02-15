import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from '../../context/ThemeContext';
import { ThemeToggle } from './ThemeToggle';

// Mock localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {};

  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value;
    },
    clear: () => {
      store = {};
    },
    removeItem: (key: string) => {
      delete store[key];
    },
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

describe('ThemeToggle', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorageMock.clear();
    // Clear document theme attribute
    document.documentElement.removeAttribute('data-theme');
  });

  it('should render toggle button', () => {
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    );

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('should have accessible ARIA label for dark mode', () => {
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    );

    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label', 'Switch to light mode');
  });

  it('should have accessible ARIA label for light mode', () => {
    localStorageMock.setItem('theme', 'light');

    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    );

    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label', 'Switch to dark mode');
  });

  it('should have aria-pressed attribute', () => {
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    );

    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-pressed');
  });

  it('should set aria-pressed to false when in dark mode', () => {
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    );

    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-pressed', 'false');
  });

  it('should set aria-pressed to true when in light mode', () => {
    localStorageMock.setItem('theme', 'light');

    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    );

    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-pressed', 'true');
  });

  it('should display sun icon in dark mode', () => {
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    );

    // Sun icon has a circle element
    const svgElement = screen.getByRole('button').querySelector('svg');
    expect(svgElement).toBeInTheDocument();
    
    // Sun icon has multiple line elements (rays)
    const lines = svgElement?.querySelectorAll('line');
    expect(lines?.length).toBeGreaterThan(0);
  });

  it('should display moon icon in light mode', () => {
    localStorageMock.setItem('theme', 'light');

    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    );

    // Moon icon has a path element
    const svgElement = screen.getByRole('button').querySelector('svg');
    expect(svgElement).toBeInTheDocument();
    
    const path = svgElement?.querySelector('path');
    expect(path).toBeInTheDocument();
  });

  it('should toggle theme when clicked', async () => {
    const user = userEvent.setup();

    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    );

    const button = screen.getByRole('button');
    
    // Initially dark mode
    expect(button).toHaveAttribute('aria-label', 'Switch to light mode');
    
    // Click to toggle
    await user.click(button);
    
    // Should now be light mode
    expect(button).toHaveAttribute('aria-label', 'Switch to dark mode');
  });

  it('should update icon when theme changes', async () => {
    const user = userEvent.setup();

    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    );

    const button = screen.getByRole('button');
    let svgElement = button.querySelector('svg');
    
    // Initially should have sun icon (multiple lines)
    let lines = svgElement?.querySelectorAll('line');
    expect(lines?.length).toBeGreaterThan(0);
    
    // Click to toggle
    await user.click(button);
    
    // Should now have moon icon (path element)
    svgElement = button.querySelector('svg');
    const path = svgElement?.querySelector('path');
    expect(path).toBeInTheDocument();
  });

  it('should have proper button type attribute', () => {
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    );

    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('type', 'button');
  });

  it('should have theme-toggle class', () => {
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    );

    const button = screen.getByRole('button');
    expect(button).toHaveClass('theme-toggle');
  });

  it('should have aria-hidden on icon SVG', () => {
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    );

    const svgElement = screen.getByRole('button').querySelector('svg');
    expect(svgElement).toHaveAttribute('aria-hidden', 'true');
  });
});
