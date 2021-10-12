import { configureStore } from '@reduxjs/toolkit'
import { callTableApi } from './services/callApi'

export const store = configureStore({
  reducer: {[callTableApi.reducerPath]:callTableApi.reducer},
})





import * as React from 'react'
// import { useGetPokemonByNameQuery } from './services/pokemon'

// export default function App() {
//   // Using a query hook automatically fetches data and returns query values
//   const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')
//   // Individual hooks are also accessible under the generated endpoints:
//   // const { data, error, isLoading } =

//   return (
//     <div className="App">
//       {error ? (
//         <>Oh no, there was an error</>
//       ) : isLoading ? (
//         <>Loading...</>
//       ) : data ? (
//         <>
//           <h3>{data.species.name}</h3>
//           <img src={data.sprites.front_shiny} alt={data.species.name} />
//         </>
//       ) : null}
//     </div>
//   )
// }