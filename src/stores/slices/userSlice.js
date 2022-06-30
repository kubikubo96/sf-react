import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'users',
  initialState: {
    users: [
      { name: 'Nguyễn Tất Tiến', age: 26 },
      { name: 'Nguyễn Thị Hà', age: 24 },
    ],
    user_id_update: null,
  },
  reducers: {
    setUser: (state, payload) => {
      state.users = payload
    },
    addUser: (state, payload) => {
      state.users = [...state.users, payload]
    },
    updateUser: (state, payload) => {
      state.users = state.users.splice(
        state.users.findIndex((item) => item.id === payload.id),
        1,
        payload,
      )
    },
    removeUser: (state, payload) => {
      state.users = state.users.splice(state.users.indexOf(payload), 1)
    },
  },
})

export const { set } = userSlice.actions

export const selectUser = (state) => state.users.users
export const selectUserIdUpdate = (state) => state.users.user_id_update

export default userSlice.reducer
