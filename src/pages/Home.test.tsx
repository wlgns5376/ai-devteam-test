import { render, screen } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import Home from './Home';
import { HOME_PAGE_CONTENT } from './constants';

describe('Home 페이지', () => {
  beforeEach(() => {
    render(<Home />);
  });

  it('제목이 올바르게 렌더링되어야 한다', () => {
    const heading = screen.getByText(HOME_PAGE_CONTENT.TITLE);
    expect(heading).toBeInTheDocument();
  });

  it('설명 텍스트가 올바르게 렌더링되어야 한다', () => {
    const description = screen.getByText(HOME_PAGE_CONTENT.DESCRIPTION);
    expect(description).toBeInTheDocument();
  });

  it('서비스 설명 텍스트가 올바르게 렌더링되어야 한다', () => {
    const serviceDescription = screen.getByText(HOME_PAGE_CONTENT.SERVICE_DESCRIPTION);
    expect(serviceDescription).toBeInTheDocument();
  });
});
