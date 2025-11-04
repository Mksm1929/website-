import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface Record {
    count: number;
}

interface RecordState {
    highScore: Record[];
}

const initialState: RecordState = {
    highScore: [],
};

const clickerSlice = createSlice({
    name: 'clicker',
    initialState,
    reducers: {
        addRecord: (state, action: PayloadAction<Record>) => {
            state.highScore.push(action.payload);
        },
    }
});

export const { addRecord } = clickerSlice.actions;
export default clickerSlice.reducer;