
export const createAppCss = () => {
  const data = `/* Estilo predeterminado del scrollbar */
::-webkit-scrollbar {
  display: none; /* Ocultar el scrollbar por defecto */
  width: 4px;
  height: 6px;
  background-color: white;
}

/* Estilo del thumb del scrollbar */
::-webkit-scrollbar-thumb {
  background: #637381;
  border-radius: 7px;
}

/* Mostrar el scrollbar solo cuando se está haciendo scroll */
body::-webkit-scrollbar {
  display: block; /* Mostrar el scrollbar cuando hay scroll */
}
`;
  return data;
}
