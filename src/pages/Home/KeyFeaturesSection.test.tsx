import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import KeyFeaturesSection from './KeyFeaturesSection';
import { HOME_PAGE_CONTENT } from '../constants';

describe('KeyFeaturesSection', () => {
  it('주요 기능 섹션이 렌더링되어야 한다', () => {
    render(<KeyFeaturesSection />);

    expect(screen.getByText('주요 기능')).toBeInTheDocument();
  });

  it('모든 기능이 표시되어야 한다', () => {
    render(<KeyFeaturesSection />);

    HOME_PAGE_CONTENT.KEY_FEATURES.forEach((feature) => {
      expect(screen.getByText(feature.title)).toBeInTheDocument();
      expect(screen.getByText(feature.description)).toBeInTheDocument();
    });
  });

  it('각 기능에 아이콘이 표시되어야 한다', () => {
    render(<KeyFeaturesSection />);

    HOME_PAGE_CONTENT.KEY_FEATURES.forEach((feature) => {
      const iconElement = screen.getByText(feature.icon);
      expect(iconElement).toHaveAttribute('aria-hidden', 'true');
    });
  });

  it('그리드 레이아웃이 적용되어야 한다', () => {
    const { container } = render(<KeyFeaturesSection />);

    const gridElement = container.querySelector('.grid');
    expect(gridElement).toHaveClass('md:grid-cols-2', 'lg:grid-cols-3');
  });
});
