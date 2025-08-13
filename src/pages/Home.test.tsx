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

  it('자동화 시스템 설명이 올바르게 렌더링되어야 한다', () => {
    render(<Home />);

    const automationDescription = screen.getByText(
      'Claude Code와 Gemini CLI 같은 터미널 기반 서비스를 이용한 프로그램 개발 자동화 시스템'
    );
    expect(automationDescription).toBeInTheDocument();
  });
});
