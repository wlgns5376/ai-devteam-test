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

  it('서비스 설명 텍스트가 올바르게 렌더링되어야 한다', () => {
    const serviceDescription = screen.getByText(
      HOME_PAGE_CONTENT.SERVICE_DESCRIPTION
    );
    expect(serviceDescription).toBeInTheDocument();
  });

  describe('주요 기능 섹션', () => {
    it('주요 기능 제목이 렌더링되어야 한다', () => {
      const featuresTitle = screen.getByText('주요 기능');
      expect(featuresTitle).toBeInTheDocument();
    });

    it('모든 주요 기능이 렌더링되어야 한다', () => {
      HOME_PAGE_CONTENT.KEY_FEATURES.forEach((feature) => {
        expect(screen.getByText(feature.title)).toBeInTheDocument();
        expect(screen.getByText(feature.description)).toBeInTheDocument();
      });
    });
  });

  describe('워크플로우 섹션', () => {
    it('워크플로우 제목이 렌더링되어야 한다', () => {
      const workflowTitle = screen.getByText('워크플로우');
      expect(workflowTitle).toBeInTheDocument();
    });

    it('모든 워크플로우 단계가 렌더링되어야 한다', () => {
      HOME_PAGE_CONTENT.WORKFLOW_STEPS.forEach((step) => {
        expect(screen.getByText(step)).toBeInTheDocument();
      });
    });
  });

  describe('아키텍처 섹션', () => {
    it('아키텍처 제목이 렌더링되어야 한다', () => {
      const architectureTitle = screen.getByText('시스템 아키텍처');
      expect(architectureTitle).toBeInTheDocument();
    });

    it('모든 아키텍처 구성요소가 렌더링되어야 한다', () => {
      HOME_PAGE_CONTENT.ARCHITECTURE_COMPONENTS.forEach((component) => {
        expect(screen.getByText(component.name)).toBeInTheDocument();
        expect(screen.getByText(component.description)).toBeInTheDocument();
      });
    });
  });

  describe('시작하기 섹션', () => {
    it('시작하기 제목이 렌더링되어야 한다', () => {
      const gettingStartedTitle = screen.getByText('시작하기');
      expect(gettingStartedTitle).toBeInTheDocument();
    });

    it('시스템 요구사항이 렌더링되어야 한다', () => {
      const requirementsTitle = screen.getByText('시스템 요구사항');
      expect(requirementsTitle).toBeInTheDocument();

      HOME_PAGE_CONTENT.SYSTEM_REQUIREMENTS.forEach((req) => {
        expect(screen.getByText(req)).toBeInTheDocument();
      });
    });

    it('배포 옵션이 렌더링되어야 한다', () => {
      const deploymentTitle = screen.getByText('배포 옵션');
      expect(deploymentTitle).toBeInTheDocument();

      HOME_PAGE_CONTENT.DEPLOYMENT_OPTIONS.forEach((option) => {
        expect(screen.getByText(option)).toBeInTheDocument();
      });
    });
  });
});
