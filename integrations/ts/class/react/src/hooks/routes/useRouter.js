
export const createUseRouter = () => {
  const data = `import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

// ----------------------------------------------------------------------

export function useRouter() {
  const nav = useNavigate();

  const router = useMemo(
    () => ({
      back: () => nav(-1),
      forward: () => nav(1),
      reload: () => window.location.reload(),
      navigate: (href:string) => nav(href),
      replace: (href: string) => nav(href, { replace: true }),
    }),
    [nav]
  );

  return router;
}
`;
  return data;
}
