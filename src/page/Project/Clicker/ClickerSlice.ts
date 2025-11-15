import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';


interface RecordState {
    highScore: number[];
}

const initialState: RecordState = {
    highScore: [],
};

const clickerSlice = createSlice({
    name: 'clicker',
    initialState,
    reducers: {
        addRecord: (state, action: PayloadAction<number>) => {
            state.highScore.push(action.payload);
        },
    }
});

export const { addRecord } = clickerSlice.actions;
export default clickerSlice.reducer;