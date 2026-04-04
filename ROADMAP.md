# {componentName} 문서 페이지 구현 과정

## 1. 사전 정보 수집

### 1-1. 참고 디렉터리 코드 분석

`src/app/docs/component/button/blockButton/`의 구조를 파악하여 문서 페이지가 어떤 패턴으로 구성되는지 확인했다.

**파악된 파일 구조:**

```
blockButton/
├── page.tsx                — DocIntroSection + DocTabs 조합의 메인 페이지
├── BlockButton.constants.ts — props 정의(PROPERTIES) + 예제 목록(VARIANTS_EXAMPLES) + displayName
└── BlockButtonExamples.tsx — 각 variant/prop별 렌더링 예제 컴포넌트
```

**파악된 핵심 컴포넌트:**

- `DocIntroSection` — 컴포넌트 이름, 설명, 버전, 대표 미리보기를 렌더링하는 섹션
- `DocTabs` — "개발" 탭을 포함하는 탭 컴포넌트
- `DocDevelopmentTab` — `properties`, `variantExamples`, `getDisplayName`을 받아 props 테이블과 예제를 렌더링
- `createDisplayName` — 컴포넌트 인스턴스 → 표시 이름 매핑 함수

### 1-2. 공통 상수 파악

`src/constants/components.ts`에서 `Properties` 객체와 기존 컴포넌트별 prop 상수(`BUTTON_PROPS`, `BADGE_PROPS` 등)의 패턴을 확인했다.

**기존에 없어 추가가 필요한 Properties 키:**

- `Checked`, `OnCheckedChange`, `IsInvalid`, `Label`, `SubLabel`, `Align`, `Indeterminate`

**추가가 필요한 컴포넌트 prop 상수:**

- `{componentName}_PROPS` — sizes, variants, aligns 목록

### 1-3. Storybook 크로마틱 링크 분석

제공된 스토리북 URL에서 에이전트를 통해 {componentName} 컴포넌트 API 정보 수집

### 1-4. 패키지 타입 정의 직접 검증

`node_modules/@jects/jds/dist/index.d.cts`에서 실제 배포된 타입 정의를 직접 grep하여 Storybook에서 수집한 정보 검증

### 1-5. i18nNav 확인

---

## 2. 구현 과정

### Step 1. `src/constants/components.ts` 수정

**`Properties` 객체에 {componentName}에 필요한 키 추가:**

**`{componentName}_PROPS` 상수 추가:**

```ts
export const {componentName}_PROPS = {
  SIZES: ['lg', 'md', 'sm', 'xs'] as const,
  VARIANTS: ['empty', 'outlined'] as const,
  ALIGNS: ['left', 'right'] as const,
};
```

### Step 2. `{componentName}.tsx` 작성

각 prop/상태별 예제 컴포넌트를 작성

### Step 3. `{componentName}.constants.ts` 작성

**`{componentName}DisplayName`:** `{componentName}.Basic`과 `{componentName}.Content` 두 서브 컴포넌트를 매핑

**`{componentName}_PROPERTIES`:** prop 정의

**`{componentName}_VARIANTS_EXAMPLES`:** 예제 섹션 정의

### Step 4. `page.tsx` 작성

`DocIntroSection`의 대표 미리보기 추가

### Step 5. 린트 및 타입 검증

```bash
pnpm lint     # 경고 0, 에러 0 (기존 경고 2개만 존재)
pnpm exec tsc --noEmit  # {componentName} 관련 타입 에러 없음
```

---

## 3. 최종 생성/수정 파일 목록

```
수정
└── src/constants/components.ts       — Properties 추가, {componentName}_PROPS 상수 추가

생성
└── src/app/docs/component/{componentName}/
    ├── page.tsx                      — 메인 문서 페이지
    ├── {componentName}.constants.ts         — props 정의 및 예제 섹션 목록
    └── {componentName}Examples.tsx          — 예제 컴포넌트
```
