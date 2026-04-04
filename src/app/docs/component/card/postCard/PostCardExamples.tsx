'use client';

import { Card } from '@jects/jds';

export function PostCardLayouts() {
  return (
    <div className="flex w-full flex-col gap-20">
      <Card.Preset.Post.Link
        href="#"
        layout="vertical"
        cardStyle="outlined"
        image={{
          alt: '이미지의 alt 명',
        }}
        title="Post에 오는 제목이 옵니다."
        body="Card.Post의 body(실질적인 내용)가 들어갑니다. 현재 a태그를 overlay로 사용합니다."
        author="김젝트"
        date="2025년 5월 28일"
      />
      <Card.Preset.Post.Link
        href="#"
        layout="horizontal"
        cardStyle="outlined"
        image={{
          alt: '이미지의 alt 명',
        }}
        title="Post에 오는 제목이 옵니다."
        body="Card.Post의 body(실질적인 내용)가 들어갑니다. 현재 a태그를 overlay로 사용합니다."
        author="김젝트"
        date="2025년 5월 28일"
      />
    </div>
  );
}

export function PostCardStyles() {
  return (
    <div className="flex items-center gap-20">
      <Card.Preset.Post.Button
        onClick={() => alert('Post 카드(button형) 클릭됨!')}
        layout="vertical"
        cardStyle="outlined"
        image={{
          alt: '이미지의 alt 명',
        }}
        title="Post에 오는 제목이 옵니다."
        body="Card.Post의 body(실질적인 내용)가 들어갑니다. 현재 button 태그를 overlay로 사용합니다."
        author="김젝트"
        date="2025년 5월 28일"
      />
      <Card.Preset.Post.Button
        onClick={() => alert('Post 카드(button형) 클릭됨!')}
        layout="vertical"
        cardStyle="empty"
        image={{
          alt: '이미지의 alt 명',
        }}
        title="Post에 오는 제목이 옵니다."
        body="Card.Post의 body(실질적인 내용)가 들어갑니다. 현재 button 태그를 overlay로 사용합니다."
        author="김젝트"
        date="2025년 5월 28일"
      />
    </div>
  );
}

export function PostCardDisabled() {
  return (
    <div>
      <Card.Preset.Post.Button
        isDisabled
        onClick={() => alert('Post 카드(button형) 클릭됨!')}
        layout="vertical"
        cardStyle="outlined"
        image={{
          alt: '이미지의 alt 명',
        }}
        title="Post에 오는 제목이 옵니다."
        body="Card.Post의 body(실질적인 내용)가 들어갑니다. 현재 button 태그를 overlay로 사용합니다."
        author="김젝트"
        date="2025년 5월 28일"
      />
    </div>
  );
}
