// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from 'utils/asyncInjectors';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store); // eslint-disable-line no-unused-vars

  return [
    {
      path: '/',
      name: 'home',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/HomePage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/login',
      name: 'login',
      getComponent(nextState, cb) {
        import('components/LoginPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: '/signup',
      name: 'signup',
      getComponent(nextState, cb) {
        import('components/SignupPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: 'create-campaign',
      name: 'createCampaign',
      getComponent(location, cb) {
        import('components/CreateCampaign')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: '/dashboard',
      name: 'dashboardPage',
      getComponent(location, cb) {
        import('components/DashboardPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: '/donate',
      name: 'paymentPage',
      getComponent(location, cb) {
        import('components/PaymentPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: '/dashboard/new',
      name: 'createCampaign',
      getComponent(location, cb) {
        import('components/CreateCampaign')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
