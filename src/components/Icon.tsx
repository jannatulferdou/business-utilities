type IconName =
  'arrow' | 'check' | 'plus' | 'chevron' | 'energy' | 'solutions' | 'support' | 'facebook'

interface IconProps {
  name: IconName
  className?: string
}

export function Icon({ name, className = '' }: IconProps) {
  return (
    <svg
      className={`icon ${className}`}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {name === 'arrow' && <path d="M4 12h15m-6-6 6 6-6 6" />}
      {name === 'check' && (
        <>
          <path d="m2 12 4 4 9-9" />
          <path d="m10 14 2 2 9-9" />
        </>
      )}
      {name === 'plus' && <path d="M12 5v14M5 12h14" />}
      {name === 'chevron' && <path d="m9 5 7 7-7 7" />}
      {name === 'energy' && <path d="m13 2-9 12h7l-1 8 10-13h-8l1-7Z" />}
      {name === 'solutions' && (
        <>
          <path d="M4 20V10m8 10V4m8 16v-7M2 20h20" />
          <path d="m2 7 8-5 9 5m-4 0h4V3" />
        </>
      )}
      {name === 'support' && (
        <>
          <circle cx="12" cy="8" r="4" />
          <path d="M5 21v-2a7 7 0 0 1 14 0v2M4 13V8a8 8 0 0 1 16 0v5m-18-3h2v5H2zm18 0h2v5h-2z" />
        </>
      )}
      {name === 'facebook' && (
        <>
          <circle cx="12" cy="12" r="12" fill="#1877f2" stroke="none" />
          <path
            d="M13 22v-9h3l.5-3H13V8c0-1 .5-1.5 1.5-1.5H17V3.7c-.7-.1-1.7-.2-2.7-.2C11.6 3.5 10 5.1 10 8v2H7v3h3v9"
            fill="white"
            stroke="none"
          />
        </>
      )}
    </svg>
  )
}
