import { createSlice } from "@reduxjs/toolkit";
let initialState={}
if (localStorage.getItem("chemical")) {
    initialState = JSON.parse(localStorage.getItem("chemical"));
} else {
  initialState = {
    chemicals: [
      { id: 1, name: "hydrochloric Acid", formula: "HCl" },
      { id: 2, name: "Sodium Chloride", formula: "NaCl" },
      { id: 3, name: "Sulfuric Acid", formula: "H2SO4" },
      { id: 4, name: "Ammonia", formula: "NH3" },
      { id: 5, name: "Ethanol", formula: "C2H5OH" },
    ],
    flag: "",
  };
}

const chemicalSlide = createSlice({
  name: "chemicals",
  initialState,
  reducers: {
    addNewChemical: (state, action) => {
      let MaxId = state.chemicals.reduce((current, item) =>
        Math.max((current, item.id), 0)
      );
      state.chemicals = [
        ...state.chemicals,
        {
          id: MaxId + 1,
          name: action.payload.name,
          formula: action.payload.formula,
        },
      ];
      localStorage.setItem("chemical", JSON.stringify(state))
    },
    deleteChemical: (state, action) => {
      state.chemicals = state.chemicals.filter(
        (item) => item.id !== action.payload.id
      );
      localStorage.setItem("chemical", JSON.stringify(state))
    },
    editChemical: (state, action) => {
      state.chemicals = state.chemicals.map((item) =>
        item.id === action.payload.id
          ? {
              ...item,
              name: action.payload.name,
              formula: action.payload.formula,
            }
          : item
      );
      localStorage.setItem("chemical", JSON.stringify(state))
    },
    findChemical:(state,action)=>{
        state.chemicals=state.chemicals.filter(item=>item.name||item.formula==action.payload)
    }
  },
});
export const { addNewChemical, deleteChemical, editChemical,findChemical } =
  chemicalSlide.actions;
export default chemicalSlide.reducer;
