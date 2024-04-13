
export const createSessionSettings = () => {
  const data = `import { PaletteMode } from "@mui/material";
import { ColorPreset, LanguageType } from "../../theme/theme.interface";

export const roles = Object.freeze({
  Developer: 1,
  SuperAdmin: 2,
  Admin: 3,
});

export const rolesDisplay:Record<number, string> = Object.freeze({
  1: 'Developer',
  2: 'Super Admin', // dueños de negocio
  3: 'Admin' // administradores de algun area o asignados de responsabilidades
});

export const usersWithAuth = Object.freeze({

});



// *=========== Settings, mode, color, lenguage ============* //
export function getMode() {
  const settingsMode = getSettings();
  return settingsMode?.themeMode;
};

export function getColor() {
  const settingsColor = getSettings();
  return settingsColor?.themeColorPreset;
};

export function getLanguage() {
  const settingsLanguage = getSettings();
  return settingsLanguage?.themeLanguage;
};

export function getSettings() {
  return JSON.parse(localStorage.getItem("settings") as string);
};

export const settings: {
  themeMode: PaletteMode,
  themeColorPreset: ColorPreset,
  themeLanguage: LanguageType
} = {
  themeMode: "light",
  themeColorPreset: "teal",
  themeLanguage: "en",
};
// *=========== Settings, mode, color, lenguage ============* //



// *=========== Methods Session Storage ============* //
/**
 * guarda en sessionStorage
 * @param key clave o nombre a asignar
 * @param value valor a guardar
 */
export function set(key: string, value: string): void {
  sessionStorage.setItem(key, value)
}

/**
 * trae el valor del sessionStorage segun la clave
 * @param key clave o nombre asignado
 * @returns
 */
export function get(key: string): string | null | undefined {
  return sessionStorage.getItem(key) ?? "";
}

/**
 * elimina del sessionStorage esta clave
 * @param item  elemento a eliminar
 */
export function remove(item: string): void {
  sessionStorage.removeItem(item);
}

/**
 * elimina todos los datos del sessionStorage
 */
export function removeAll(): void {
  sessionStorage.clear();
}
// *=========== Methods Session Storage ============* //



// *=========== Methods Headers ============* //
/**
 * headers para application/json
 * @returns
 */
export function getHeader() {
  return {
    headers: {
      "Content-Type": "application/json",
      api_key: import.meta.env.VITE_API_KEY,
      authorization: \`Bearer \` + get("accessToken"),
    },
  };
}

/**
 * headers para pdf y fotos
 * @returns
 */
export function getHeaderMultipart() {
  return {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: \`Bearer \` + get("accessToken"),
      api_key: import.meta.env.VITE_API_KEY,
    },
  };
}
// *=========== Methods Headers ============* //



// *=========== Settings Theme ============* //

// *=========== Settings Theme ============* //



/**
 * toma el numero que se entregue como parametro y muestra el nombre de este rol
 * @param role numero del rol en lista "rolesDisplay"
 * @returns el valor en string del numero de rol
 */
export function viewDisplayRol(role: number): string {
  return rolesDisplay[role] || "role desconocido"
}


/**
 * @param allowedRolesList lista de roles que podran ver el resultado
 * ?listRoles toma el valor del array de roles, tener en cuenta que tambien se puede utilizar Object.keys pero en este caso seria un string
 * ?doTheseRolExist es el nuevo array que filtro los roles no existentes de listRoles en allowedRolesList y despues de limpiar con find solo toma el primer valor que coincide
 * lo anterior fue para limpiar los roles prosiblemente falsos
 * @returns toma el nuevo array y devuelve true o false si el rol tiene o no permisos de ver
 * conclusion la lista de roles permitidos el rol actual y dice si tiene permisos
 */
export function validateHasRoleAllowed (allowedRolesList: number[]): boolean {
  const idrole = get("idroles");
  if (!idrole || !allowedRolesList) {
    return false;
  } else {
    const listRoles = Object.values(roles);
    const doTheseRolExist = allowedRolesList.filter((role) =>
      listRoles.find((item) => item === role)
    );
    return doTheseRolExist.includes(parseInt(idrole));
  }
}

// este metodo no se probo ni se agrego a la validacion del middleware withRoleAllowed
export const validateHasUserAllowed = (allowedUsersList: number[]):boolean => {
  const iduser = get("idusers");
  if(!iduser || !allowedUsersList) {
    return false;
  }
  const listUsers = Object.values(usersWithAuth);
  const doTheUsersExist = allowedUsersList.filter((user) => {
    listUsers.find(item => item === user)
  });
  return doTheUsersExist.includes(parseInt(iduser));
};

export function setToken(value:string) {
  set("accessToken", value);
}

export function session() {
  return Boolean(get("accessToken"));
}
`;
  return data;
}
