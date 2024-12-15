import nProgress from 'nprogress';

export function createProgressGuard(router) {
  nProgress.configure({ showSpinner: false });

  router.beforeEach(() => {
    nProgress.start();
  });

  router.afterEach(() => {
    nProgress.done();
  });
}
