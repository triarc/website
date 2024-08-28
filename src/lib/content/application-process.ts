import type { BlockContent } from '$lib/components/TypeDefinitions'

export const ourApplicationProcess: BlockContent = {
  title: 'Wie läuft unser Bewerbungsverfahren',
  content: 'Unser Interviewprozess verläuft in vier Schritten.',
  steps: [
    {
      title: 'Bewerbung einreichen',
      content: 'Nimm den Mut zusammen und bewirb dich mit deinen Unterlagen direkt über unser Bewerbungsformular.',
    },
    {
      title: 'Persönliches Interview',
      content:
        'Nach kurzer Prüfung von deinem CV und dem ersten Eindruck, melden wir uns bei dir für ein erstes Vorstellungsgespräch. Remote oder in unserem Office können wir uns gegenseitig austauschen und schauen ob sich Synergien ergeben.',
    },
    {
      title: 'Technisches Interview',
      content:
        'Damit wir dich initial in unser Trackeesystem einstufen können, bekommst du die Gelegenheit dich mit einem Entwickler austauschen.',
    },
    {
      title: 'Team Interview',
      content:
        'Das Team hat bei uns das letzte Wort. Lerne den Rest von uns kennen und sprich über deine Passion und warum du Teil vom Team werden willst.',
    },
  ],
}
