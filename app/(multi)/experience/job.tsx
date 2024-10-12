'use client'
import { Menu, MenuItem, HoveredLink, ProductItem } from '@/components/ui/navbar-menu';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import Services from '@/page/Services';
import { useCreateQueryString } from '@/hooks/use-create-query-string';
import Timeline from '@/page/Timeline';
function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const cqs = useCreateQueryString()
  return (
    <div
      className={cn("inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <HoveredLink href={cqs('type', 'grid')}>GRID</HoveredLink>
        <HoveredLink href={cqs('type', 'timeline')}>TIMELINE</HoveredLink>
      </Menu>
    </div>
  );
}
export type JobType = 'grid' | 'timeline'
export type Job = {
  num: string;
  title: string;
  duration: string;
  describe: string;
  href: string;
}
const jobs: Job[] = [
  {
    num: '01',
    title: '어반유니온',
    duration: '2023.10 - 2024.01',
    describe: `
- 디지털 헬스케어 임상시험 서비스 DTverse개발
개요 : 디지털 치료제 임상지원 플랫폼 및 
      디지털 치료제 업체를 위한 관리자 페이지 개발

1) 디지털 헬스케어 임상지원 및 관리
2) Front-end는 React.js와 Next.js를 기반으로 개발
3) Back-end는 Nest.js와 Mysql을 기반으로 개발

- Deep Zoom 개발
개요 : 병원 임상 테스트를 위한 
세포 DPI 이미지 Deep Zoom 서비스 개발

1) react.js 기반 openseadragon 
라이브러리를 이용하여 프론트엔드 화면 구성
2) node-ffi를 이용하여 c 라이브러리인 
Openslide를 활용하여 백엔드 구성

    `,
    href: ''
  },
  {
    num: '02',
    title: '히포티앤씨(HippoT&CInc.)',
    duration: '2023.02 - 2023.08',
    describe: `
-디지털 치료제 플랫폼  Admin
개요 : 히포티앤씨의 디지털 치료제 사용 플랫폼인 Hippo Admin으로 
      ADHD 치료/진단, 우울증 치료를 병원, 심리센터 등  어드민 사이트 제작

- SvelteKit를 이용하여 제작
- FullCalendar 기반 예약 시스템, CMS 기반 결제 모듈 개발

2. 디지털 치료제 플랫폼  user & homepage
개요 : 히포티앤씨 사용자를 위한 유저 페이지 및 히포티앤씨 홈페이지 개발

- 유저 사이트를 통한 예약 시스템 개발
- 히포 홈페이지https://www.hippotnc.com/
- 사용 기술 SvelteKit, Next.js
    `,
    href: ''
  }, {
    num: '03',
    title: '플레이오토',
    duration: '2019.03 – 2021.04',
    describe:
      `
1. 쇼핑몰 연동 엔진
- Node.js와 C#을 이용한 쇼핑몰 연동 개발
- 쿠팡, 스마트 스토어, 오늘의집, 신세계TV쇼핑, W쇼핑, 
   emart mall, 카페24, 티몬 연동 및 유지보수

2. 쇼핑몰 통합 솔루션
- 상품 페이지 개발
- 쇼핑몰 별 추가 사항 파트 담당
- 풀필먼트를 위한 EBAY ESM 시스템 연동 개발 및 관리
- 쇼핑몰 종합 주문건을 ESM과의 연동 파트 담당
    `,
    href: ''
  },
  {
    num: '04',
    title: '이츠엠',
    duration: '2016.08 – 2017.07',
    describe: `
1. 포항포인트
개요 : 포항시 자영업자 대상 서비스

- 포항포인트 IONIC 기반 앱 개발, Node.js 기반 백엔드 개발
- 포항포인트 APP 개발, 포스 시스템 개발, 
   회계 서비스 개발, oauth 로그인, 유저/관리자 페이지 개발
- 포항시 통합회원 OAuth 인증 시스템 개발
    `,
    href: ''
  }
]
const Job = ({ type }: { type: JobType }) => {
  const typeMapping = {
    'grid': <Services jobs={jobs} />,
    'timeline': <Timeline jobs={jobs} />
  }
  return (
    <div className='relative '>
      <Navbar className="my-8 z-20 px-4" />
      {typeMapping[type]}
    </div>
  )
}

export default Job