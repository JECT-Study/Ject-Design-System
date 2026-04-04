'use client';

import { Callout } from '@jects/jds';

const CALLOUT_TITLE = '베이직 콜아웃 타이틀';
const CALLOUT_DESCRIPTION =
  '콜아웃 텍스트의 최대 입력 글자수 제한은 없지만, 너무 많은 글자수는 핵심적인 내용을 효과적으로 전달하는 데에 적절치 않다는 점을 유의합니다.';

export function CalloutSizes() {
  return (
    <div className="flex flex-col items-center justify-center gap-3.5">
      <Callout size="lg" title="Large" labelButtonProps={{ children: '버튼' }}>
        {CALLOUT_DESCRIPTION}
      </Callout>
      <Callout size="md" title="Medium" labelButtonProps={{ children: '버튼' }}>
        {CALLOUT_DESCRIPTION}
      </Callout>
      <Callout size="sm" title="Small" labelButtonProps={{ children: '버튼' }}>
        {CALLOUT_DESCRIPTION}
      </Callout>
      <Callout size="xs" title="Extra Small" labelButtonProps={{ children: '버튼' }}>
        {CALLOUT_DESCRIPTION}
      </Callout>
    </div>
  );
}

export function CalloutFeedback() {
  return (
    <div className="flex flex-col items-center justify-center gap-3.5">
      <Callout feedback="positive" title="성공(Positive)">
        결제가 성공적으로 완료되었습니다. 이메일로 영수증이 발송되었습니다.
      </Callout>
      <Callout feedback="notifying" title="경고(notifying)">
        클라우드 저장 공간이 거의 가득 찼습니다. 불필요한 파일을 삭제해 주세요.
      </Callout>
      <Callout feedback="destructive" title="위험(Destructive)">
        서버와의 연결이 끊어졌습니다. 작성 중인 데이터가 유실될 수 있으니 임시 저장해 주세요.
      </Callout>
    </div>
  );
}

export function CalloutHierarchies() {
  return (
    <div className="flex flex-col items-center justify-center gap-3.5">
      <Callout title="primary" hierarchy="primary">
        {CALLOUT_DESCRIPTION}
      </Callout>
      <Callout title="secondary" hierarchy="secondary">
        {CALLOUT_DESCRIPTION}
      </Callout>
    </div>
  );
}

export function CalloutWithLabelButton() {
  return (
    <div className="flex flex-col items-center justify-center gap-3.5">
      <Callout
        hierarchy="primary"
        labelButtonProps={{
          children: '레이블',
          disabled: false,
          prefixIcon: 'blank',
          suffixIcon: 'blank',
        }}
        size="lg"
        title={CALLOUT_TITLE}
      >
        {CALLOUT_DESCRIPTION}
      </Callout>
    </div>
  );
}
