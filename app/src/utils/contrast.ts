// RNF04 — contraste mínimo de 4,5:1 (WCAG 2.1 AA) entre texto e fundo.
// Usado pela aparência (RF19) para escolher a cor do texto sobre a cor de destaque
// e para avisar quando a cor escolhida fica com pouco contraste sobre o fundo do app.

export const MIN_TEXT_CONTRAST = 4.5
export const MIN_UI_CONTRAST = 3

const DARK_INK = '#0b1020'

function luminance(hex: string): number {
  const h = hex.replace('#', '')
  const full = h.length === 3 ? h.split('').map((c) => c + c).join('') : h
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(full.slice(i, i + 2), 16) / 255)
    .map((v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4))
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

export function contrastRatio(a: string, b: string): number {
  const x = luminance(a), y = luminance(b)
  return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05)
}

/** Cor do texto sobre a cor de destaque: branco ou tinta escura, a que tiver mais contraste. */
export function onAccent(accent: string): string {
  return contrastRatio(accent, '#ffffff') >= contrastRatio(accent, DARK_INK) ? '#ffffff' : DARK_INK
}

/** Fundo da tela em cada tema (mesmos valores de --bg em index.css). */
export const BG = { dark: '#0d0e10', light: '#f2f4f8' } as const

export function formatRatio(r: number, lang: string): string {
  const s = r.toFixed(1)
  return (lang === 'en' ? s : s.replace('.', ',')) + ':1'
}
