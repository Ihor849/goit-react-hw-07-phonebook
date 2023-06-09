import { configureStore } from "@reduxjs/toolkit";
// import {
//     persistStore,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
//   } from 'redux-persist';
  import { filterReducer } from "./filtersSlice";
  import { contactsReducer } from "./contactsSlice";
  // import { persistedContactsReducer } from "./contactsSlice";

  export const store =configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer,
    },
    // middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware({
    //   serializableCheck: {
    //     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    //   },
    // }),
});

// export const persistor=persistStore(store)