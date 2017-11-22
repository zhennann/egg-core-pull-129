let Vue;

// import css
// eslint-disable-next-line
import CSS from './css/module.css';

// install
function install(_Vue, cb) {
  if (Vue) return console.error('already installed.');

  Vue = _Vue;

  if (Vue.prototype.$meta.provider === 'framework7') {
    // subcribe event: login
    Vue.prototype.$meta.eventHub.$on(
      Vue.prototype.$meta.constant.event.login, params => {
        Vue.prototype.$meta.loginParams = params;
        Vue.prototype.$f7.loginScreen();
      });
    Vue.prototype.$meta.eventHub.$on(
      Vue.prototype.$meta.constant.event.logout, () => {
        Vue.prototype.$meta.store.commit('auth/logout');
        Vue.prototype.$f7.loginScreen();
      });
  } if (Vue.prototype.$meta.provider === 'vuerouter') {
    // subcribe event: login
    Vue.prototype.$meta.eventHub.$on(
      Vue.prototype.$meta.constant.event.login, params => {
        Vue.prototype.$meta.options.router.push({ path: '/aa/login/login', query: params || { redirect: '/' } });
      });
    Vue.prototype.$meta.eventHub.$on(
      Vue.prototype.$meta.constant.event.logout, () => {
        Vue.prototype.$meta.store.commit('auth/logout');
        Vue.prototype.$meta.options.router.push({ path: '/aa/login/login', query: { redirect: '/' } });
      });
  }

  return cb({
    routes: require('./routes.js').default,
  });
}

// export
export default {
  install,
};
