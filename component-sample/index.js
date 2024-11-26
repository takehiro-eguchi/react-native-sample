import { registerRootComponent } from 'expo';

import App from './App';
import CounterApp from './Counter';
import WatchApp from './Watch';
import CounterHookApp from './CounterHooks';
import Clock from './ClockEffect';
import StyleApp from './Style';
import FlexboxApp from './Flexbox';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
// registerRootComponent(App);
// registerRootComponent(CounterApp);
// registerRootComponent(WatchApp);
// registerRootComponent(CounterHookApp);
// registerRootComponent(Clock);
// registerRootComponent(StyleApp);
registerRootComponent(FlexboxApp);
