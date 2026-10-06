import { ArrowUpRight } from 'lucide-react';

export default function Button({ children, href = '#admission', variant = 'primary', className = '', icon, onClick }) {
  const iconElement = icon !== undefined ? icon : <ArrowUpRight size={17} strokeWidth={2.2} />;
  const content = <>{children}{iconElement}</>;
  const cls = `button button-${variant} ${className}`.trim();
  if (onClick) return <button className={cls} onClick={onClick} data-cursor>{content}</button>;
  return <a className={cls} href={href} data-cursor>{content}</a>;
}
