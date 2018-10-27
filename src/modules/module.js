import { registerReducer } from './../common/configureStore';

export default (store) => {
  const modules = {};

  return (name, moduleProvider) => {
    if (modules.hasOwnProperty(name)) { //eslint-disable-line
      return Promise.resolve(modules[name]);
    }
    return moduleProvider.then(mod => {
      modules[name] = mod;
      registerReducer(store, name, mod.reducer);
      return mod;
    });
  };
};
