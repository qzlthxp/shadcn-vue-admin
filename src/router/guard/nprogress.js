import nProgress from 'nprogress';

export function createProgressGuard(router) {
  nProgress.configure({ easing: 'ease', speed: 500, showSpinner: false });

  router.beforeEach(() => {
    nProgress.start();
  });

  router.afterEach(() => {
    nProgress.done();
  });
}
