'use client'

export function MakeColor() {
  const shades = generateHSLPalette(352, 100, 61);
  return (
    <div>
      <div className='grid grid-cols-5 h-36'>
        {Object.entries(shades).map(([key, shade]) =>
          <div key={`${key}-${shade}`} style={{ backgroundColor: shade }} >
            {key} {shade}
          </div>
        )}
      </div>
    </div>
  )

}
function hslToRgb(h: number, s: number, l: number): [number, number, number] {
  s /= 100;
  l /= 100;
  const k = (n: number) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  return [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];
}

function rgbToHex(r: number, g: number, b: number): string {
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
}
type Step = 50
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900
function generateHSLPalette(baseH: number, baseS: number, baseL: number): { [key: number]: string } {
  const palette: { [key: number]: string } = {};
  const lightnessSteps = {
    50: 95,
    100: 90,
    200: 80,
    300: 70,
    400: 60,
    500: baseL, // 기준 단계
    600: 40,
    700: 30,
    800: 20,
    900: 10
  };

  const saturationAdjustments = {
    50: -30,
    100: -20,
    200: -10,
    300: 0,
    400: 0,
    500: 0,
    600: 5,
    700: 10,
    800: 15,
    900: 20
  };

  for (const [step, lightness] of Object.entries(lightnessSteps)) {
    const nStep: Step = Number(step) as Step
    const saturation = Math.max(0, Math.min(100, baseS + saturationAdjustments[nStep]));
    const rgb = hslToRgb(baseH, saturation, lightness);
    palette[nStep] = rgbToHex(rgb[0], rgb[1], rgb[2]);
  }

  return palette;
}

// 사용 예시: 중간 밝기의 파란색 팔레트 생성
const bluePalette = generateHSLPalette(210, 100, 50);
console.log(bluePalette);
