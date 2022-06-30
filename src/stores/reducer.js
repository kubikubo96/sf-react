import commonSlice from './slices/commonSlice'
import counterSlice from './slices/counterSlice'
import userSlice from './slices/userSlice'

export const reducer = {
  common: commonSlice,
  counter: counterSlice,
  user: userSlice,
}
