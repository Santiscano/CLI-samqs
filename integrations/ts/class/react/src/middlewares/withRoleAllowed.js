
export const createWithRoleAllowed = () => {
  const data = `import { validateHasRoleAllowed, validateHasUserAllowed } from "../components/config/SessionSettings";
import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";

/**
 * este se llama como padre de los componentes que se podran renderizar si cuanta con los permisos
 * @param param0 children que se mostrara
 * @param param1 lista de roles que podran ver el resultado
 * @returns componente
 */
export function WithRoleAllowedRoutes({ children, allowedRolesList }: any) {
  return validateHasRoleAllowed(allowedRolesList) ? <>{children}</> : null;
}


/**
 * esta es la validacion para poder acceder a la ruta, se llama en el element del Router
 * @param allowedRolesList lista de roles permitidos
 * @returns lleva a home sino tiene permisos o al la ruta si si los tiene
 */
export function WithRoleAllowedComponent({ allowedRolesList, allowedUsersList }: any) {
  const navigate = useNavigate();
  const allowed = validateHasRoleAllowed(allowedRolesList);
  const listUsers = validateHasUserAllowed(allowedUsersList);

  useEffect(() => {
    if (!allowed) {
      navigate("/dashboard/home");
    }
  }, [allowed]);

  return <Outlet />;
}
`;
  return data;
}
