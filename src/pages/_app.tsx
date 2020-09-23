import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core'
import { createClient, Provider, dedupExchange, fetchExchange } from 'urql';
import {cacheExchange, Cache, QueryInput} from '@urql/exchange-graphcache'
const client = createClient(
  { 
    url: 'http://localhost:4000/graphql', 
    fetchOptions: {credentials: "include"},
    exchanges: [dedupExchange, cacheExchange({
      updates: {
        Mutation: {
          login: (result, args, cache, info)=> {
           
          }
        }
      }
    }), fetchExchange],
  }
  );

function cacheQueryUpdate<Result, Query>(
  cache: Cache,
  qi: QueryInput,
  result: any,
  fn: (res: Result, q: Query) => Query
){
  return cache.updateQuery(qi, data => fn(result, data as any) as any)
}

import theme from '../theme'
import { UserDocument } from '../generated/graphql';

function MyApp({ Component, pageProps }) {
  return (
    <Provider value={client}>
      <ThemeProvider theme={theme}>
        <ColorModeProvider>
          <CSSReset />
          <Component {...pageProps} />
        </ColorModeProvider>
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
