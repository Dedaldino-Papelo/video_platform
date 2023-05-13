import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { api } from '../../Api'

// First, create the thunk
export const fetchVideos = createAsyncThunk(
  'users/fetchVideos',
  async (data, { fulfillWithValue, rejectWithValue }) => {
      console.log(data)
    try {
        const response = await api.get("video")

        return fulfillWithValue(response.data)

    } catch (error) {
          return rejectWithValue(error.response.data.message)
    }
  }
)

export const fetchVideoById = createAsyncThunk(
  'users/fetchVideoById',
  async (id, { fulfillWithValue, rejectWithValue }) => {
    try {
        const response = await api.get(`video/${id}`)

        return fulfillWithValue(response.data)

    } catch (error) {
          return rejectWithValue(error.response.data.message)
    }
  }
)

const initialState = {
  videos: [],
  loading: false,
  error: "",
  video: {}
} 

// Then, handle actions in your reducers:
const videoSlice = createSlice({
  name: 'videos',
  initialState,

  extraReducers: (builder) => {
  
    builder.addCase(fetchVideos.pending, (state) => {
      state.loading = true
    }),

    builder.addCase(fetchVideos.fulfilled, (state, action) => {
        state.loading = false
        state.videos = action.payload
        state.error = ""
      }),

      builder.addCase(fetchVideos.rejected, (state, action) => {
        state.loading = false
        state.videos = []
        state.error = action.payload
      })

      //===========================================================
      builder.addCase(fetchVideoById.pending, (state) => {
        state.loading = true
      }),
  
      builder.addCase(fetchVideoById.fulfilled, (state, action) => {
          state.loading = false
          state.video = action.payload
          state.error = ""
        }),
  
        builder.addCase(fetchVideoById.rejected, (state, action) => {
          state.loading = false
          state.video = {}
          state.error = action.payload
        })


  },
})

export default videoSlice.reducer