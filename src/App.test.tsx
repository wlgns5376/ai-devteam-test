import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App 컴포넌트', () => {
  it('Home 페이지가 기본 경로에서 렌더링되어야 한다', () => {
    render(<App />);

    const heading = screen.getByText('AI DevTeam Test 프로젝트');
    expect(heading).toBeInTheDocument();
  });
});
