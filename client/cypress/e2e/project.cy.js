describe('Project Page E2E Test', () => {
  beforeEach(() => {
    // 로그인 상태 초기화
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it('should show the project title and description', () => {
    // 1) 로그인 API 요청 가로채기 (와일드카드로 절대/상대 URL 모두 매칭)
    cy.intercept('POST', '**/api/auth/signin**').as('signin');

    // 2) 로그인 페이지 방문
    cy.visit('/signin');

    // 3) 폼 입력 및 제출 (Navbar의 링크가 아닌 실제 submit 버튼 클릭)
    cy.get('input[name="email"]').type('Test@example.com');
    cy.get('input[name="password"]').type('password');
    cy.get('button[type="submit"]').click();

    // 4) API 응답 대기 & 200 확인
    cy.wait('@signin', { timeout: 10000 })
      .its('response.statusCode')
      .should('eq', 200);

    // 5) HashRouter 대응: 해시(#) 부분 검사
    cy.location('pathname', { timeout: 10000 }).should('include', '/profile');

    // 6) 프로젝트 페이지로 이동 & 콘텐츠 확인
    cy.visit('/projects');
    cy.contains('My Projects');
    cy.contains('Shopping online store');
  });
});
