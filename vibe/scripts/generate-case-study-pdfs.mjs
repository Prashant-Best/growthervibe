import { mkdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const outputDir = join(process.cwd(), 'public', 'case-studies')

const studies = [
  ['myoovi-heat-patch', 'Myoovi Heat Patch', 'Wellness DTC', 'Pain-relief wearable brand scaled cold traffic with clearer proof-led creative.', ['3.8x blended ROAS', '41% lower CPA', '+62% first-order revenue']],
  ['hydro-gain-launch', 'Hydro Gain Launch', 'Sports Nutrition', 'Protein supplement launch crossed early revenue targets with marketplace-first creatives.', ['2.9x launch ROAS', '+118% CTR lift', '26 creatives shipped']],
  ['prex-island', 'Prex Island', 'Pre-workout', 'A pre-workout brand improved thumb-stop rate with brighter, product-led ad systems.', ['47% lower CPC', '+34% PDP visits', '4.2x retargeting ROAS']],
  ['healthfarm-muscle-whey', 'Healthfarm Muscle Whey', 'Protein DTC', 'Whey protein creatives made pricing, proof, and product hierarchy easier to scan.', ['31% lower CPA', '+56% hold rate', '18 ad variants']],
  ['glo-spa-session', 'Glo Spa Session', 'Beauty Tech', 'A salon tech campaign turned a free-session hook into qualified demo bookings.', ['126 leads in 21 days', '22% lead-to-call rate', '36% lower CPL']],
  ['roofing-services', 'Roofing Services', 'Home Services', 'Roofing service ads generated higher-quality calls with location and trust cues.', ['2.4x call volume', '29% lower CPL', '+18% booked inspections']],
  ['agent-ai-verify', 'Agent AI Verify', 'B2B SaaS', 'Document verification SaaS increased demo intent with product-screen storytelling.', ['64% more demos', '39% lower CAC', '+51% landing CTR']],
  ['flowveda-reset', 'FlowVeda Reset', 'Ayurveda DTC', 'A wellness brand improved trust with creator-led routines and objection handling.', ['3.1x ROAS', '+44% video watch rate', '21 hooks tested']],
  ['outie-aligner', 'Outie Aligner', 'Dental DTC', 'Clear aligner creatives simplified a high-consideration product for cold audiences.', ['52% lower CPL', '+73% quiz starts', '2.7x retargeting ROAS']],
  ['no-mercy-fitness', 'No Mercy Fitness', 'Fitness Apparel', 'A gym apparel drop sold through faster with scarcity-led launch creatives.', ['81% stock sold', '4.6x launch ROAS', '+38% email opt-ins']],
  ['morph-skincare', 'Morph Skincare', 'Skincare', 'Skincare ads converted better after replacing claims with routine-led education.', ['28% lower CPA', '+46% add-to-cart', '12 UGC scripts']],
  ['quickbite-grocery', 'QuickBite Grocery', 'Quick Commerce', 'Quick commerce creatives increased impulse orders through speed and bundle hooks.', ['37% lower CPI', '+58% first orders', '5 city clusters']],
  ['luma-home-decor', 'Luma Home Decor', 'Home Decor', 'Home decor catalog ads drove higher order value with room-led product storytelling.', ['+24% AOV', '3.5x ROAS', '+42% saved posts']],
  ['terra-pet-food', 'Terra Pet Food', 'Pet Food', 'Pet nutrition ads improved trial purchases by leading with ingredient transparency.', ['33% lower CPA', '+49% subscription starts', '19 creatives tested']],
  ['pulse-watch', 'Pulse Watch', 'Consumer Tech', 'A smartwatch brand lifted purchase intent by ranking features around daily problems.', ['2.8x ROAS', '+35% product-page CVR', '16 benefit angles']],
  ['native-roots', 'Native Roots', 'Haircare', 'Haircare creatives scaled with creator proof, texture demos, and review overlays.', ['4.1x Meta ROAS', '+67% watch-through', '24 creator cuts']],
  ['atlas-luggage', 'Atlas Luggage', 'Travel Gear', 'Travel luggage ads improved holiday sales by pairing product proof with trip moments.', ['+39% seasonal revenue', '25% lower CPA', '+31% AOV']],
  ['freshbox-meals', 'Freshbox Meals', 'Meal Delivery', 'Meal delivery ads reduced churn by selling routine fit, not just discounts.', ['18% lower churn', '+27% reactivations', '3.2x ROAS']],
  ['brisk-coldbrew', 'Brisk Coldbrew', 'Beverage DTC', 'Cold brew sampling converted into subscriptions with clearer flavor and habit hooks.', ['+46% subscriptions', '2.6x trial ROAS', '41% lower CPC']],
  ['klarity-cosmetics', 'Klarity Cosmetics', 'Cosmetics', 'Cosmetics creatives lifted shade-finder completions with proof and inclusive demos.', ['+72% quiz completions', '30% lower CPA', '+21% repeat purchase']],
]

const pdfEscape = (value) =>
  String(value)
    .replaceAll('\\', '\\\\')
    .replaceAll('(', '\\(')
    .replaceAll(')', '\\)')

const wrap = (text, max = 70) => {
  const words = String(text).split(/\s+/)
  const lines = []
  let line = ''

  words.forEach((word) => {
    const next = line ? `${line} ${word}` : word
    if (next.length > max) {
      lines.push(line)
      line = word
    } else {
      line = next
    }
  })

  if (line) lines.push(line)
  return lines
}

const makePdf = ([slug, brand, category, title, metrics], index) => {
  const lines = [
    { text: 'Growth Revibe', size: 13, x: 56, y: 770 },
    { text: 'Performance Creative Case Study', size: 10, x: 56, y: 748 },
    { text: brand, size: 30, x: 56, y: 700 },
    { text: category, size: 12, x: 56, y: 670 },
    ...wrap(title, 54).map((text, lineIndex) => ({ text, size: 17, x: 56, y: 626 - lineIndex * 23 })),
    { text: 'Challenge', size: 15, x: 56, y: 540 },
    ...wrap('The brand needed stronger cold-traffic communication, clearer product proof, and mobile-first creative assets that could be tested quickly across paid social and commerce placements.', 78).map((text, lineIndex) => ({ text, size: 11, x: 56, y: 516 - lineIndex * 16 })),
    { text: 'Creative System', size: 15, x: 56, y: 444 },
    ...wrap('Growth Revibe built a testing matrix across hooks, offer frames, product hierarchy, UGC-style proof, and landing-page message match. Each concept was prepared for rapid iteration instead of one-off campaign use.', 78).map((text, lineIndex) => ({ text, size: 11, x: 56, y: 420 - lineIndex * 16 })),
    { text: 'Measured Outcomes', size: 15, x: 56, y: 336 },
    ...metrics.map((metric, metricIndex) => ({ text: `${metricIndex + 1}. ${metric}`, size: 13, x: 72, y: 306 - metricIndex * 24 })),
    { text: 'Scope delivered: creative strategy, static ads, short-form video direction, offer testing, and reporting notes.', size: 10, x: 56, y: 156 },
    { text: `Prepared by Growth Revibe creative strategy team. Case study ${String(index + 1).padStart(2, '0')} of ${studies.length}.`, size: 9, x: 56, y: 126 },
  ]

  const textOps = lines
    .map(({ text, size, x, y }) => `BT /F1 ${size} Tf ${x} ${y} Td (${pdfEscape(text)}) Tj ET`)
    .join('\n')

  const stream = `q\n0.72 0.07 0.18 rg\n0 720 612 72 re f\n0.97 0.97 0.97 rg\n0 0 612 720 re f\n0.72 0.07 0.18 RG\n2 w\n56 650 500 0 l S\n0.06 0.06 0.06 rg\n${textOps}\nQ`
  const objects = [
    '<< /Type /Catalog /Pages 2 0 R >>',
    '<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
    '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>',
    '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>',
    `<< /Length ${Buffer.byteLength(stream, 'utf8')} >>\nstream\n${stream}\nendstream`,
  ]

  let pdf = '%PDF-1.4\n'
  const offsets = [0]
  objects.forEach((object, objectIndex) => {
    offsets.push(Buffer.byteLength(pdf, 'utf8'))
    pdf += `${objectIndex + 1} 0 obj\n${object}\nendobj\n`
  })
  const xrefOffset = Buffer.byteLength(pdf, 'utf8')
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`
  offsets.slice(1).forEach((offset) => {
    pdf += `${String(offset).padStart(10, '0')} 00000 n \n`
  })
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`

  writeFileSync(join(outputDir, `${slug}.pdf`), pdf)
}

mkdirSync(outputDir, { recursive: true })
studies.forEach(makePdf)
