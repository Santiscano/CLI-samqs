
export const createRouterLink = () => {
  const data = `import { forwardRef, ForwardedRef, PropsWithChildren } from 'react';
import { Link, LinkProps } from 'react-router-dom';

interface RouterLinkProps extends Omit<LinkProps, 'to'> {
  href: string;
}

export const RouterLink = forwardRef<HTMLAnchorElement, PropsWithChildren<RouterLinkProps>>(
  ({ href, ...other }, ref: ForwardedRef<HTMLAnchorElement>) => (
    <Link ref={ref} to={href} {...other} />
  )
);

`;
  return data;
}
