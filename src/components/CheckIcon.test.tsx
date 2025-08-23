import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import CheckIcon from './CheckIcon';

describe('CheckIcon 컴포넌트', () => {
  it('기본 클래스명이 적용되어야 한다', () => {
    const { container } = render(<CheckIcon />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveClass('w-5 h-5 text-green-500 mr-2');
  });

  it('커스텀 클래스명이 적용되어야 한다', () => {
    const customClass = 'w-6 h-6 text-blue-500 mr-3';
    const { container } = render(<CheckIcon className={customClass} />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveClass(customClass);
  });

  it('SVG path가 올바르게 렌더링되어야 한다', () => {
    const { container } = render(<CheckIcon />);
    const path = container.querySelector('path');
    expect(path).toBeInTheDocument();
    expect(path).toHaveAttribute('fill-rule', 'evenodd');
    expect(path).toHaveAttribute('clip-rule', 'evenodd');
  });
});
