import { createRouter, createWebHashHistory } from 'vue-router';

function routerWrapper(app) {
  const { axiosWithAuth } = app.config.globalProperties;
  const router = createRouter({
    routes: [
      // User Side
      {
        path: '/',
        name: 'shop',
        component: () => import('@/views/shop/ShopBase.vue'),
        children: [
          {
            path: '',
            name: 'home',
            component: () => import('@/views/shop/ShopHome.vue'),
          },
          { path: '/about', name: 'about', component: () => import('@/views/shop/ShopAbout.vue') },
          { path: '/products', name: 'products', component: () => import('@/views/shop/ShopProducts.vue') },
          { path: '/product/:productId', name: 'product', component: () => import('@/views/shop/ShopProduct.vue') },
          { path: '/cart', name: 'cart', component: () => import('@/views/shop/ShopCart.vue') },
          { path: '/cartInfo', name: 'cartInfo', component: () => import('@/views/shop/ShopCartInfo.vue') },
          { path: '/checkout/:orderId', name: 'checkout', component: () => import('@/views/shop/ShopCheckout.vue') },
          { path: '/blog', name: 'blog', component: () => import('@/views/shop/ShopBlog.vue') },
          { path: '/article/:articleId', name: 'article', component: () => import('@/views/shop/ShopArticle.vue') },
          { path: '/contact', name: 'contact', component: () => import('@/views/shop/ShopContact.vue') },
        ],
      },
      // Admin Side
      {
        path: '/dashboard',
        name: 'dashboard',
        meta: { needsAuth: true },
        component: () => import('@/views/dashboard/dashboardBase.vue'),
        children: [
          {
            path: '',
            name: 'dashboardHome',
            component: () => import('@/views/dashboard/dashboardHome.vue'),
          },
          {
            path: 'products',
            name: 'dashboardProducts',
            component: () => import('@/views/dashboard/dashboardProducts.vue'),
          },
          {
            path: 'coupons',
            name: 'dashboardCoupons',
            component: () => import('@/views/dashboard/dashboardCoupons.vue'),
          },
          { path: 'orders', name: 'dashboardOrders', component: () => import('@/views/dashboard/dashboardOrders.vue') },
          {
            path: 'articles',
            name: 'dashboardArticles',
            component: () => import('@/views/dashboard/dashboardArticles.vue'),
          },
        ],
      },
      { path: '/login', name: 'login', component: () => import('@/views/AppLogin.vue') },
      { path: '/404', name: '404', component: () => import('@/views/AppNotFound.vue'), hidden: true },
      { path: '/:catchAll(.*)', redirect: '/404', hidden: true },
    ],
    history: createWebHashHistory(),
  });
  router.beforeEach(async (to) => {
    const loader = app.config.globalProperties.$loading.show();
    if (!to.meta.needsAuth) {
      loader.hide();
      return true;
    }
    return axiosWithAuth({
      method: 'post',
      url: `${import.meta.env.VITE_APP_API}/api/user/check`,
    })
      .then((res) => {
        if (!res.data.success) throw new Error(`${res.data.message}`);
        return true;
      })
      .catch(() => {
        router.push({ name: 'login' });
        return false;
      })
      .finally(() => {
        loader.hide();
      });
  });

  return router;
}

export default routerWrapper;
