import {StackNavigator} from 'react-navigation';

import Posts from './views/posts';
import Perfil from './views/perfil';

// import { Container } from './styles';

const App = StackNavigator({
  Posts: {view: Posts},
  Profile: {view: Perfil},
});

export default App;