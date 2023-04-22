import Link from 'next/link';

type PrivateProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void | Promise<void>;
  href?: string;
  disabled?: boolean;
};

function Button({ children, className, href, ...restProps }: PrivateProps) {
  if (href) {
    return (
      <Link href={href} className={`button ${className}`} {...restProps}>
        {children}
      </Link>
    );
  }
  return (
    <button className={`button ${className}`} {...restProps}>
      {children}
    </button>
  );
}

export default Button;
