type IconName = 'arrow' | 'check' | 'plus'

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
    </svg>
  )
}
