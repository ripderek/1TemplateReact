import React from "react";
import PropTypes from "prop-types";

export const MaterialTailwind = React.createContext(null);
MaterialTailwind.displayName = "MaterialTailwindContext";

export function reducer(state, action) {
  switch (action.type) {
    case "OPEN_SIDENAV": {
      return { ...state, openSidenav: action.value };
    }
    case "SIDENAV_TYPE": {
      return { ...state, sidenavType: action.value };
    }
    case "SIDENAV_COLOR": {
      return { ...state, sidenavColor: action.value };
    }
    case "TRANSPARENT_NAVBAR": {
      return { ...state, transparentNavbar: action.value };
    }
    case "FIXED_NAVBAR": {
      return { ...state, fixedNavbar: action.value };
    }
    case "OPEN_CONFIGURATOR": {
      return { ...state, openConfigurator: action.value };
    }
    //anadir un estado para saber si la barra de navegacion esta pequena o grande
    case "CHANGE_TYPE_BAR_NAV": {
      return { ...state, change_type_bar: action.value };
    }
    //se anade un tipo para saber el comportamiento del color en los paneles
    case "CHANGE_EFFECT_PANEL": {
      return { ...state, effect_panel: action.value };
    }
    //para el color del panel superior
    case "CHANGE_COLOR_PANEL_SUPERIOR": {
      return { ...state, panelSuperioColor: action.value };
    }
    //para activar los borders redondos o no
    case "CHANGE_BORDERS": {
      return { ...state, borders: action.value };
    }
    //para las sombras
    case "CHANGE_SHADOWS": {
      return { ...state, shadows: action.value };
    }
    //para el icono de la aplicacion
    case "CHANGE_ICON_APP": {
      return { ...state, iconApp: action.value };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export function MaterialTailwindControllerProvider({ children }) {
  const initialState = {
    openSidenav: false,
    sidenavColor: "black",
    sidenavType: "white",
    transparentNavbar: true,
    fixedNavbar: false,
    openConfigurator: false,
    change_type_bar: false,
    effect_panel: "Izquierdo",
    panelSuperioColor: "black",
    borders: true,
    shadows: false,
    iconApp: true,
  };

  const [controller, dispatch] = React.useReducer(reducer, initialState);
  const value = React.useMemo(
    () => [controller, dispatch],
    [controller, dispatch]
  );

  return (
    <MaterialTailwind.Provider value={value}>
      {children}
    </MaterialTailwind.Provider>
  );
}

export function useMaterialTailwindController() {
  const context = React.useContext(MaterialTailwind);
  console.log(context);
  if (!context) {
    throw new Error(
      "useMaterialTailwindController should be used inside the MaterialTailwindControllerProvider."
    );
  }

  return context;
}

MaterialTailwindControllerProvider.displayName = "/src/context/index.jsx";

MaterialTailwindControllerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const setOpenSidenav = (dispatch, value) =>
  dispatch({ type: "OPEN_SIDENAV", value });
export const setSidenavType = (dispatch, value) =>
  dispatch({ type: "SIDENAV_TYPE", value });
export const setSidenavColor = (dispatch, value) =>
  dispatch({ type: "SIDENAV_COLOR", value });
export const setTransparentNavbar = (dispatch, value) =>
  dispatch({ type: "TRANSPARENT_NAVBAR", value });
export const setFixedNavbar = (dispatch, value) =>
  dispatch({ type: "FIXED_NAVBAR", value });
export const setOpenConfigurator = (dispatch, value) =>
  dispatch({ type: "OPEN_CONFIGURATOR", value });
//funcion para cambiar el tamano de la barra de navegacion si es la pequena o la grande skere
export const setBarNav = (dispatch, value) =>
  dispatch({ type: "CHANGE_TYPE_BAR_NAV", value });
//CHANGE_EFFECT_PANEL
export const setEffectPanel = (dispatch, value) =>
  dispatch({ type: "CHANGE_EFFECT_PANEL", value });
//CHANGE_COLOR_PANEL_SUPERIOR
export const setColorPanelSuperior = (dispatch, value) =>
  dispatch({ type: "CHANGE_COLOR_PANEL_SUPERIOR", value });
//CHANGE_BORDERS
export const setBorders = (dispatch, value) =>
  dispatch({ type: "CHANGE_BORDERS", value });
//CHANGE_SHADOWS
export const setShadows = (dispatch, value) =>
  dispatch({ type: "CHANGE_SHADOWS", value });
//CHANGE_ICON_APP
export const setIconAPP = (dispatch, value) =>
  dispatch({ type: "CHANGE_ICON_APP", value });
