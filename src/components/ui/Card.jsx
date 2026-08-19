export function Card({ className = '', children, ...props }) {
  return (
    <div className={`card min-w-0 ${className}`} {...props}>
      {children}
    </div>
  )
}

export function CardHeader({ title, action, className = '' }) {
  return (
    <div className={`flex items-center justify-between gap-3 ${className}`}>
      <h3 className="section-title">{title}</h3>
      {action}
    </div>
  )
}
