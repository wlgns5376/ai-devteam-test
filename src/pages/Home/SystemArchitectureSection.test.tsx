import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import SystemArchitectureSection from './SystemArchitectureSection';
import { HOME_PAGE_CONTENT } from '../constants';

describe('SystemArchitectureSection', () => {
  it('시스템 아키텍처 섹션이 렌더링되어야 한다', () => {
    render(<SystemArchitectureSection />);

    expect(screen.getByText('시스템 아키텍처')).toBeInTheDocument();
  });

  it('모든 아키텍처 컴포넌트가 표시되어야 한다', () => {
    render(<SystemArchitectureSection />);

    HOME_PAGE_CONTENT.ARCHITECTURE_COMPONENTS.forEach((component) => {
      expect(screen.getByText(component.name)).toBeInTheDocument();
      expect(screen.getByText(component.description)).toBeInTheDocument();
    });
  });

  it('각 컴포넌트가 카드 형태로 표시되어야 한다', () => {
    const { container } = render(<SystemArchitectureSection />);

    const cards = container.querySelectorAll('.bg-white.rounded-lg.shadow-md');
    expect(cards).toHaveLength(
      HOME_PAGE_CONTENT.ARCHITECTURE_COMPONENTS.length
    );
  });

  it('그리드 레이아웃이 적용되어야 한다', () => {
    const { container } = render(<SystemArchitectureSection />);

    const gridElement = container.querySelector('.grid');
    expect(gridElement).toHaveClass('md:grid-cols-2');
  });

  it('각 컴포넌트 이름이 제목으로 표시되어야 한다', () => {
    const { container } = render(<SystemArchitectureSection />);

    const headings = container.querySelectorAll('h3');
    expect(headings).toHaveLength(
      HOME_PAGE_CONTENT.ARCHITECTURE_COMPONENTS.length
    );

    headings.forEach((heading) => {
      expect(heading).toHaveClass('text-xl', 'font-semibold', 'text-gray-800');
    });
  });
});
