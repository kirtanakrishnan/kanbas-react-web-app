import { createSlice } from "@reduxjs/toolkit";
import db from "../../Database";



const initialState = {
  assignments: db.assignments,
  assignment: { id: "New ID", name: "New Assignment 123", description: "New Description", dueDate: "New Due Date", 
  availableFromDate: "New Available From Date", availableUntilDate: "New Available Until Date" },
};


const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, action) => {
      state.assignments = [
        { ...action.payload, _id: new Date().getTime().toString() },
          ...state.assignments,
      ];
    },
    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter(
        (assignment) => assignment._id !== action.payload
      );
    },
    updateAssignment: (state, action) => {
      state.assignments = state.assignments.map((assignment) => {
        console.log(assignment._id);
        console.log(action.payload._id);
        if (assignment._id === action.payload._id) {
          return action.payload;
        } else {
          return assignment;
        }
      });
      console.log(state.assignments);
      return state;
    },
    setAssignment: (state, action) => {
      state.assignment = action.payload;
    },
  },
});


export const { addAssignment, deleteAssignment,
  updateAssignment, setAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;