declare global {
  declare type RootState = import('../store/index').RootState;
  declare type AppDispatch = import('../store/index').AppDispatch;
}

export {};