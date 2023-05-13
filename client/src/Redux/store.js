import { configureStore } from '@reduxjs/toolkit'
import videoSlice from './Videos/video.slice'

export const store = configureStore({
    reducer: {
        videoReducer: videoSlice
    }
})