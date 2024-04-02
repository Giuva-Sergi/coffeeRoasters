import { useReducer } from "react";

const initialState = [
  {
    id: 1,
    button: "Preferences",
    accordionTitle: "How do you drink your coffee?",
    radioButtons: [
      {
        title: "Capsule",
        details: "Compatible with Nespresso systems and similar brewers",
        selected: false,
      },
      {
        title: "Filter",
        details:
          "For pour over or drip methods like Aeropress, Chemex, and V60",
        selected: false,
      },
      {
        title: "Espresso",
        details:
          "Dense and finely ground beans for an intense, flavorful experience",
        selected: false,
      },
    ],
    isActive: false,
    selectedOption: "",
  },
  {
    id: 2,
    button: "Bean type",
    accordionTitle: "What type of coffee?",
    radioButtons: [
      {
        title: "Single Origin",
        details:
          "Distinct, high quality coffee from a specific family-owned farm",
        selected: false,
      },
      {
        title: "Decaf",
        details:
          "Just like regular coffee, except the caffeine has been removed",
        selected: false,
      },
      {
        title: "Blended",
        details:
          "Combination of two or three dark roasted beans of organic coffees",
        selected: false,
      },
    ],
    isActive: false,
    selectedOption: "",
  },
  {
    id: 3,
    button: "Quantity",
    accordionTitle: "How much would you like?",
    radioButtons: [
      {
        title: "250g",
        details:
          "Perfect for the solo drinker. Yields about 12 delicious cups.",
        selected: false,
      },
      {
        title: "500g",
        details:
          "Perfect option for a couple. Yields about 40 delectable cups.",
        selected: false,
      },
      {
        title: "1000g",
        details:
          "Perfect for offices and events. Yields about 90 delightful cups.",
        selected: false,
      },
    ],
    isActive: false,
    selectedOption: "",
  },
  {
    id: 4,
    button: "Grind option",
    accordionTitle: "Want us to grind them?",
    radioButtons: [
      {
        title: "Wholebean",
        details: "Best choice if you cherish the full sensory experience.",
        selected: false,
      },
      {
        title: "Filter",
        details:
          "For drip or pour-over coffee methods such as V60 or Aeropress",
        selected: false,
      },
      {
        title: "Cafetiére",
        details:
          " Course ground beans specially suited for french press coffee",
        selected: false,
      },
    ],
    isActive: false,
    selectedOption: "",
  },
  {
    id: 5,
    button: "Deliveries",
    accordionTitle: "How often should we deliver?",
    radioButtons: [
      {
        title: "Every week",
        details: "$7.20 per shipment. Includes free first-class shipping.",
        selected: false,
      },
      {
        title: "Every 2 weeks",
        details: "$9.60 per shipment. Includes free priority shipping.",
        selected: false,
      },
      {
        title: "Every month",
        details: " $12.00 per shipment. Includes free priority shipping.",
        selected: false,
      },
    ],
    isActive: false,
    selectedOption: "",
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "SELECT_OPTION":
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
    case "OPEN_ACCORDION":
      return state.map((item) =>
        item.id === action.id ? { ...item, isActive: !item.isActive } : item
      );
    default:
      throw new Error("Command not found.");
  }
}

function useMultiStepForm() {
  const [steps, dispatch] = useReducer(reducer, initialState);

  const userPreferences = {
    preferences: steps.at(0).selectedOption,
    beanType: steps.at(1).selectedOption,
    quantity: steps.at(2).selectedOption,
    grindOption: steps.at(3).selectedOption,
    deliveries: steps.at(4).selectedOption,
  };

  return {
    steps,
    dispatch,
    userPreferences,
    isCapsule: userPreferences.preferences === "Capsule",
  };
}

export { useMultiStepForm };
