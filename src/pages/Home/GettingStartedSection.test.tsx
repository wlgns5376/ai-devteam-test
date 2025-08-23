import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import GettingStartedSection from './GettingStartedSection';
import { HOME_PAGE_CONTENT } from '../constants';

describe('GettingStartedSection', () => {
  it('시작하기 섹션이 렌더링되어야 한다', () => {
    render(<GettingStartedSection />);

    expect(screen.getByText('시작하기')).toBeInTheDocument();
  });

  it('시스템 요구사항이 표시되어야 한다', () => {
    render(<GettingStartedSection />);

    expect(screen.getByText('시스템 요구사항')).toBeInTheDocument();

    HOME_PAGE_CONTENT.SYSTEM_REQUIREMENTS.forEach((req) => {
      expect(screen.getByText(req)).toBeInTheDocument();
    });
  });

  it('배포 옵션이 표시되어야 한다', () => {
    render(<GettingStartedSection />);

    expect(screen.getByText('배포 옵션')).toBeInTheDocument();

    HOME_PAGE_CONTENT.DEPLOYMENT_OPTIONS.forEach((option) => {
      expect(screen.getByText(option)).toBeInTheDocument();
    });
  });

  it('체크 아이콘이 각 항목에 표시되어야 한다', () => {
    const { container } = render(<GettingStartedSection />);

    const checkIcons = container.querySelectorAll('svg');
    const totalItems =
      HOME_PAGE_CONTENT.SYSTEM_REQUIREMENTS.length +
      HOME_PAGE_CONTENT.DEPLOYMENT_OPTIONS.length;

    expect(checkIcons.length).toBeGreaterThanOrEqual(totalItems);
  });

  it('두 개의 카드로 구성되어야 한다', () => {
    const { container } = render(<GettingStartedSection />);

    const cards = container.querySelectorAll('.bg-white.rounded-lg.shadow-md');
    expect(cards).toHaveLength(2);
  });

  it('그리드 레이아웃이 적용되어야 한다', () => {
    const { container } = render(<GettingStartedSection />);

    const gridElement = container.querySelector('.grid');
    expect(gridElement).toHaveClass('md:grid-cols-2');
  });

  it('배포 옵션의 체크 아이콘에 스타일이 적용되어야 한다', () => {
    const { container } = render(<GettingStartedSection />);

    const deploymentSection = Array.from(container.querySelectorAll('h3')).find(
      (h3) => h3.textContent === '배포 옵션'
    )?.parentElement;

    if (deploymentSection) {
      const checkIcons = deploymentSection.querySelectorAll('svg');
      checkIcons.forEach((icon) => {
        expect(icon).toHaveClass('w-5', 'h-5', 'text-blue-500', 'mr-2');
      });
    }
  });
});
