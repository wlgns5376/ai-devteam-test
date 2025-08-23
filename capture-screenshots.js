import { chromium } from 'playwright';
import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function captureScreenshots() {
  // 개발 서버 시작
  const devServer = spawn('npm', ['run', 'dev'], {
    cwd: __dirname,
    shell: true,
    detached: false
  });

  // 서버가 시작될 때까지 대기
  await new Promise((resolve) => {
    devServer.stdout.on('data', (data) => {
      const output = data.toString();
      if (output.includes('Local:')) {
        console.log('개발 서버가 시작되었습니다.');
        resolve();
      }
    });
  });

  try {
    // Playwright 브라우저 시작
    const browser = await chromium.launch();
    const context = await browser.newContext({
      viewport: { width: 1920, height: 1080 }
    });
    const page = await context.newPage();

    // 페이지 로드
    await page.goto('http://localhost:5173', { waitUntil: 'networkidle' });
    
    // 스크린샷 저장 디렉토리 생성
    const screenshotDir = path.join(__dirname, 'screenshots');
    
    // 전체 페이지 스크린샷
    await page.screenshot({ 
      path: path.join(screenshotDir, 'home-full.png'),
      fullPage: true 
    });
    console.log('전체 페이지 스크린샷 저장 완료: screenshots/home-full.png');

    // 뷰포트 스크린샷
    await page.screenshot({ 
      path: path.join(screenshotDir, 'home-viewport.png')
    });
    console.log('뷰포트 스크린샷 저장 완료: screenshots/home-viewport.png');

    // 주요 섹션별 스크린샷
    const sections = [
      { selector: 'header', name: 'header' },
      { selector: 'section:has(h2:text("주요 기능"))', name: 'key-features' },
      { selector: 'section:has(h2:text("작업 흐름"))', name: 'workflow' },
      { selector: 'section:has(h2:text("시스템 아키텍처"))', name: 'system-architecture' },
      { selector: 'section:has(h2:text("시작하기"))', name: 'getting-started' }
    ];

    for (const section of sections) {
      try {
        const element = await page.locator(section.selector).first();
        if (await element.isVisible()) {
          await element.screenshot({ 
            path: path.join(screenshotDir, `${section.name}.png`)
          });
          console.log(`섹션 스크린샷 저장 완료: screenshots/${section.name}.png`);
        }
      } catch (error) {
        console.log(`${section.name} 섹션을 찾을 수 없습니다.`);
      }
    }

    // 모바일 뷰 스크린샷
    await page.setViewportSize({ width: 375, height: 667 });
    await page.screenshot({ 
      path: path.join(screenshotDir, 'home-mobile.png'),
      fullPage: true 
    });
    console.log('모바일 뷰 스크린샷 저장 완료: screenshots/home-mobile.png');

    // 태블릿 뷰 스크린샷
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.screenshot({ 
      path: path.join(screenshotDir, 'home-tablet.png'),
      fullPage: true 
    });
    console.log('태블릿 뷰 스크린샷 저장 완료: screenshots/home-tablet.png');

    await browser.close();
    console.log('\n모든 스크린샷이 성공적으로 저장되었습니다!');
  } catch (error) {
    console.error('스크린샷 캡처 중 오류 발생:', error);
  } finally {
    // 개발 서버 종료
    process.kill(-devServer.pid);
    process.exit(0);
  }
}

captureScreenshots();