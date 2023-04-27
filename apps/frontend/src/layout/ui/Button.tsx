import Icon, { IconOptions } from '@/common/components/Icon';
import Link from 'next/link';

type PrivateProps = {
  children: React.ReactNode;
  className?: string;
  icon?: IconOptions;
  onClick?: () => void | Promise<void>;
  href?: string;
  disabled?: boolean;
  asDiv?: boolean;
};

function Button({
  children,
  className,
  href,
  icon,
  asDiv,
  ...restProps
}: PrivateProps) {
  if (asDiv) {
    return (
      <div className={`button ${className} ${icon ? 'icon' : ''}`}>
        {icon && <Icon icon={icon} />}
        {children}
      </div>
    );
  }
  if (href) {
    return (
      <Link
        href={href}
        className={`button ${className} ${icon ? 'icon' : ''}`}
        {...restProps}
      >
        {icon && <Icon icon={icon} />}
        {children}
      </Link>
    );
  }
  return (
    <button
      className={`button ${className} ${icon ? 'icon' : ''}`}
      {...restProps}
    >
      {icon && <Icon icon={icon} />}
      {children}
    </button>
  );
}

export default Button;
