import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ExperienceState {
  title: string;
  company: string;
  date: string;
  city: string;
  description: string;
}
type State = ExperienceState;
const initialState: Array<ExperienceState> = [];

const experienceSlice = createSlice({
  name: "experience",
  initialState,
  reducers: {
    addExperience(state, action: PayloadAction<State>) {
      state.push(action.payload);
    },
  },
});
export const { addExperience } = experienceSlice.actions;
export default experienceSlice.reducer;
