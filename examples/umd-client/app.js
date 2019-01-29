// create redux
/** STORE **/
const reducers = Redux.combineReducers({
  // mount keplerGl reducer
  keplerGl: KeplerGl.keplerGlReducer
});

const middlewares = KeplerGl.enhanceReduxMiddleware([
  // Add
]);

const enhancers = Redux.applyMiddleware(...middlewares);

const initialState = {};

const store = Redux.createStore(
  reducers,
  initialState,
  Redux.compose(enhancers)
);

/** END STORE **/

/** Components **/
const MAPBOX_TOKEN = 'pk.eyJ1IjoidWJlcmRhdGEiLCJhIjoiY2poczJzeGt2MGl1bTNkcm1lcXVqMXRpMyJ9.9o2DrYg8C8UWmprj-tcVpQ';

const mapStateToProps = state => state;
const dispatchToProps = dispatch => ({dispatch});

const Kepler = function App(props) {
  // const width = props.width || 800;
  // const height = props.height || 800;
  return React.createElement(KeplerGl.KeplerGl, {
    mapboxApiAccessToken: MAPBOX_TOKEN,
    id: 'map',
    width: props.width || 800,
    height: props.height || 800
  });
};

const App = ReactRedux.connect(mapStateToProps, dispatchToProps)(Kepler);

ReactDOM.render(React.createElement(
  ReactRedux.Provider,
  { store: store },
  React.createElement(App, null)
), document.getElementById('app'));
