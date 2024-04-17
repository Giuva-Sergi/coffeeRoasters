import { useReducer } from "react";
import initialState from "../data/coffeeOptions.js";

function reducer(state, action) {
  switch (action.type) {
    case "SELECT_OPTION": {
      const { title, id } = action.payload;
      const updatedState = state.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            radioButtons: item.radioButtons.map((button) => ({
              ...button,
              selected: button.title === title,
            })),
            selectedOption: title,
          };
        } else {
          return item;
        }
      });

      return updatedState;
    }
    case "OPEN_ACCORDION":
      return state.map((item) =>
        item.id === action.id ? { ...item, isActive: !item.isActive } : item,
      );
    default:
      throw new Error("Command not found.");
  }
}

function useMultiStepForm() {
  const [steps, dispatch] = useReducer(reducer, initialState);

  const userPreferences =
    steps.at(0).selectedOption === "Capsule"
      ? {
          preferences: steps.at(0).selectedOption,
          beanType: steps.at(1).selectedOption,
          quantity: steps.at(2).selectedOption,
          deliveries: steps.at(4).selectedOption,
        }
      : {
          preferences: steps.at(0).selectedOption,
          beanType: steps.at(1).selectedOption,
          quantity: steps.at(2).selectedOption,
          grindOption: steps.at(3).selectedOption,
          deliveries: steps.at(4).selectedOption,
        };

  let total;

  if (userPreferences.deliveries.toLowerCase() === "every week") {
    if (userPreferences.quantity === "250g") {
      total = 7.2;
    } else if (userPreferences.quantity === "500g") {
      total = 13.0;
    } else {
      total = 22.0;
    }
  } else if (userPreferences.deliveries.toLowerCase() === "every 2 weeks") {
    if (userPreferences.quantity === "250g") {
      total = 9.6;
    } else if (userPreferences.quantity === "500g") {
      total = 17.5;
    } else {
      total = 32.0;
    }
  } else if (userPreferences.deliveries.toLowerCase() === "every month") {
    if (userPreferences.quantity === "250g") {
      total = 12.0;
    } else if (userPreferences.quantity === "500g") {
      total = 22.0;
    } else {
      total = 42.0;
    }
  }

  const isReady =
    userPreferences.beanType !== "" &&
    userPreferences.quantity !== "" &&
    userPreferences.deliveries !== "" &&
    (userPreferences.preferences === "Capsule" ||
      userPreferences.grindOption !== "");

  return {
    steps,
    dispatch,
    userPreferences,
    isCapsule: userPreferences.preferences === "Capsule",
    total,
    isReady: isReady,
  };
}

export { useMultiStepForm };
