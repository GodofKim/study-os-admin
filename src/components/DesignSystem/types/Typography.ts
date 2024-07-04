export const typography = [
  {
    key: "large-title",
    size: 28,
    lineHeight: 36,
    weight: 700,
    usage: "페이지 단위 타이틀 사용으로 권장합니다.",
  },
  {
    key: "title-1",
    size: 24,
    lineHeight: 32,
    weight: 700,
    usage: "섹션 타이틀로 사용을 권장합니다.",
  },
  {
    key: "title-2",
    size: 20,
    lineHeight: 28,
    weight: 700,
    usage: "섹션 타이틀로 사용을 권장합니다.",
  },
  {
    key: "headline",
    size: 16,
    lineHeight: 24,
    weight: 600,
    usage: "위젯 및 카드 타이틀로 사용을 권장합니다.",
  },
  {
    key: "headline-strong",
    size: 16,
    lineHeight: 24,
    weight: 700,
    usage: "위젯 및 카드 타이틀로 사용을 권장합니다.(강조)",
  },
  {
    key: "body",
    size: 16,
    lineHeight: 24,
    weight: 400,
    usage: "주요 본문으로 사용을 권장합니다.",
  },
  {
    key: "body-strong",
    size: 16,
    lineHeight: 24,
    weight: 600,
    usage: "주요 본문으로 사용을 권장합니다.(강조)",
  },
  {
    key: "subheadline",
    size: 14,
    lineHeight: 20,
    weight: 400,
    usage: "보조 본문으로 사용을 권장합니다.",
  },
  {
    key: "subheadline-strong",
    size: 14,
    lineHeight: 20,
    weight: 600,
    usage: "보조 본문으로 사용을 권장합니다.(강조)",
  },
  {
    key: "footnote",
    size: 13,
    lineHeight: 18,
    weight: 400,
    usage: "보조 본문으로 사용을 권장합니다.",
  },
  {
    key: "footnote-strong",
    size: 13,
    lineHeight: 16,
    weight: 600,
    usage: "보조 본문으로 사용을 권장합니다.(강조)",
  },
  {
    key: "caption-1",
    size: 12,
    lineHeight: 16,
    weight: 400,
    usage: "본문 보조용으로 사용을 권장합니다.",
  },
  {
    key: "caption-1-strong",
    size: 12,
    lineHeight: 16,
    weight: 600,
    usage: "본문 보조용으로 사용을 권장합니다.(강조)",
  },
  {
    key: "caption-2",
    size: 11,
    lineHeight: 16,
    weight: 500,
    usage: "본문 보조용으로 사용을 권장합니다.",
  },
  {
    key: "caption-2-strong",
    size: 11,
    lineHeight: 16,
    weight: 600,
    usage: "본문 보조용으로 사용을 권장합니다.(강조)",
  },
] as const;

export type Typography = (typeof typography)[number]["key"];
