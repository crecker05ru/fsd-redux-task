import { Provider } from "react-redux"
import { setupStore } from "app/store"

const store = setupStore()
export const withRedux = (component: () => React.ReactNode) => {
  return <Provider store={store}>{component()}</Provider>
}