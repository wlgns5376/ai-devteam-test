import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Home from './Home';

describe('Home 페이지', () => {
  it('제목이 올바르게 렌더링되어야 한다', () => {
    render(<Home />);

    const heading = screen.getByText('AI DevTeam Test 프로젝트');
    expect(heading).toBeInTheDocument();
  });

  it('설명 텍스트가 올바르게 렌더링되어야 한다', () => {
    render(<Home />);

    const description = screen.getByText(
      'React + TypeScript + Vite 환경이 성공적으로 구성되었습니다.'
    );
    expect(description).toBeInTheDocument();
  });
});
