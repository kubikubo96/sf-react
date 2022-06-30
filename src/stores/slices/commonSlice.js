import { createSlice } from '@reduxjs/toolkit'

export const commonSlice = createSlice({
  name: 'common',
  initialState: {
    sidebarShow: true,
  },
  reducers: {
    changeState: (state) => {
      state.sidebarShow = !state.sidebarShow
    },
  },
})

/**
 * Export Select State
 */
export const selectSidebarShow = (state) => state.common.sidebarShow

/**
 * Expoert Actions
 */
export const { changeState } = commonSlice.actions

export default commonSlice.reducer
