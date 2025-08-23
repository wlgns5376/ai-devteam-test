export const HOME_PAGE_CONTENT = {
  TITLE: 'AI DevTeam Node',
  SERVICE_DESCRIPTION:
    'Claude Code와 Gemini CLI 같은 터미널 기반 서비스를 이용한 프로그램 개발 자동화 시스템',
  KEY_FEATURES: [
    {
      title: 'GitHub Projects 통합',
      description: 'GitHub Projects의 작업을 자동으로 감지하고 관리',
      icon: '📊',
    },
    {
      title: 'AI 개발자 통합',
      description: 'Claude Code, Gemini CLI를 활용한 코드 생성',
      icon: '🤖',
    },
    {
      title: 'Pull Request 자동화',
      description: 'PR 생성부터 리뷰까지 자동 처리',
      icon: '🔄',
    },
    {
      title: '병렬 처리',
      description: '여러 Worker를 통한 동시 작업 처리',
      icon: '⚡',
    },
    {
      title: '다중 저장소 관리',
      description: '여러 저장소를 동시에 관리 가능',
      icon: '🗂️',
    },
  ],
  WORKFLOW_STEPS: [
    'Planner가 TODO 작업 식별',
    'Manager가 사용 가능한 Worker에 작업 할당',
    'Worker가 작업 공간 및 Git worktree 생성',
    'AI 개발자가 코드 생성 및 PR 생성',
    '작업 상태를 IN_REVIEW로 업데이트',
    '자동 PR 리뷰 및 병합',
  ],
  ARCHITECTURE_COMPONENTS: [
    {
      name: 'Planner',
      description: 'GitHub Projects를 모니터링하며 작업 계획 수립',
    },
    {
      name: 'Manager',
      description: 'Worker Pool을 관리하며 작업 할당 및 조정',
    },
    {
      name: 'Worker',
      description: '작업을 실행하고 AI와 통신하며 결과 보고',
    },
    {
      name: 'Developer',
      description: 'AI 도구를 활용하여 코드 생성 및 PR 생성',
    },
  ],
  SYSTEM_REQUIREMENTS: [
    'Node.js 20+',
    'Git 2.15+',
    'GitHub CLI',
    'Claude Code 또는 Gemini CLI',
  ],
  DEPLOYMENT_OPTIONS: [
    '로컬 개발 환경',
    'Docker 컨테이너',
    '환경 변수를 통한 설정',
  ],
} as const;
