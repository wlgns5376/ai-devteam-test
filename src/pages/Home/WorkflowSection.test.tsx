import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import WorkflowSection from './WorkflowSection';
import { HOME_PAGE_CONTENT } from '../constants';

describe('WorkflowSection', () => {
  it('워크플로우 섹션이 렌더링되어야 한다', () => {
    render(<WorkflowSection />);

    expect(screen.getByText('워크플로우')).toBeInTheDocument();
  });

  it('모든 워크플로우 단계가 순서대로 표시되어야 한다', () => {
    render(<WorkflowSection />);

    HOME_PAGE_CONTENT.WORKFLOW_STEPS.forEach((step, index) => {
      expect(screen.getByText(step)).toBeInTheDocument();
      expect(screen.getByText((index + 1).toString())).toBeInTheDocument();
    });
  });

  it('각 단계가 번호와 함께 표시되어야 한다', () => {
    const { container } = render(<WorkflowSection />);

    const numberElements = container.querySelectorAll('.bg-blue-500');
    expect(numberElements).toHaveLength(
      HOME_PAGE_CONTENT.WORKFLOW_STEPS.length
    );

    numberElements.forEach((element, index) => {
      expect(element).toHaveTextContent((index + 1).toString());
    });
  });

  it('정렬된 목록(ol)으로 렌더링되어야 한다', () => {
    const { container } = render(<WorkflowSection />);

    const olElement = container.querySelector('ol');
    expect(olElement).toBeInTheDocument();
    expect(olElement).toHaveClass('space-y-4');
  });

  it('배경이 있는 카드 형태로 렌더링되어야 한다', () => {
    const { container } = render(<WorkflowSection />);

    const cardElement = container.querySelector(
      '.bg-white.rounded-lg.shadow-md'
    );
    expect(cardElement).toBeInTheDocument();
  });
});
