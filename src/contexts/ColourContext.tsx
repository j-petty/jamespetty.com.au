import React, { createContext, useState, useEffect } from 'react';

import { ColourMode } from 'types/enums';

/**
 * IColourContext
 *
 * @param colourMode Currently selected colour mode.
 * @param updateColourMode Function to set the current colour mode.
 * @param toggleColourMode Function to toggle the current colour mode.
 */
export interface IColourContext {
  colourMode: ColourMode;
  updateColourMode: (colourMode: ColourMode) => void;
  toggleColourMode: () => void;
}

/**
 * ColourContext.
 *
 * @description Handles maintaining colour mode state.
 */
export const ColourContext = createContext<IColourContext>({} as IColourContext);

const MouseContextProvider: React.FC = ({ children }) => {
  const [colourMode, setColourMode] = useState<ColourMode>(ColourMode.Dark);

  /**
   * Updates the colour mode value in state and local storage.
   *
   * @param newColourMode New colour mode to set.
   */
  const updateColourMode = (newColourMode: ColourMode) => {
    // Update color mode in local storage
    localStorage.setItem(process.env.REACT_APP_COLOUR_MODE_KEY || '', newColourMode);

    // Update colour mode in state
    setColourMode(newColourMode);
  };

  /**
   * Toggles the current colour mode.
   */
  const toggleColourMode = () => {
    // Select opposite colour mode
    const newColourMode = colourMode === ColourMode.Dark ? ColourMode.Light : ColourMode.Dark;

    // Update colour mode
    updateColourMode(newColourMode);
  };

  /**
   * Set the initial colour mode from local storage
   */
  useEffect(() => {
    // Retrieve previous color mode from local storage
    const initColourMode = localStorage.getItem(process.env.REACT_APP_COLOUR_MODE_KEY || '');

    // Set initial color mode
    if (initColourMode && Object.values(ColourMode).includes(initColourMode as ColourMode)) {
      setColourMode(initColourMode as ColourMode);
    }
  }, []);

  return (
    <ColourContext.Provider
      value={{
        colourMode,
        updateColourMode,
        toggleColourMode
      }}>
      {children}
    </ColourContext.Provider>
  );
};

export default MouseContextProvider;