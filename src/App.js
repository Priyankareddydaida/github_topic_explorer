import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ApolloProvider } from '@apollo/client';
import {client} from './client'
import Topic from './containers/Topic'
function App() {
  return (
    <ApolloProvider client={client}>
      <Topic />
    </ApolloProvider>
  )
}

export default App;