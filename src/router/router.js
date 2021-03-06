
const Home = r => require.ensure([], () => r(require('../page/home/Home.vue')), 'home');
const Search = r => require.ensure([], () => r(require('../page/home/Search.vue')), 'home');
const Product = r => require.ensure([], () => r(require('../page/home/Product.vue')), 'home');

const Category = r => require.ensure([], () => r(require('../page/category/Category.vue')), 'category');
const CategoryList = r => require.ensure([], () => r(require('../page/category/List.vue')), 'category');

const list = {
  routes: [{
    path: '/',
    name: 'home',
    meta: '',
    component: Home
  }, {
    path: '/home',
    name: 'home',
    meta: '',
    component: Home
  }, {
    path: '/search',
    name: 'search',
    meta: '小米商城-搜索',
    component: Search
  }, {
    path: '/category',
    name: 'category',
    meta: '小米商城-商品分类',
    component: Category
  }, {
    path: '/category/list',
    name: 'category_list',
    component: CategoryList
  },{
    path:'/product',
    name:'product',
    meta:'小米商城-商品详情',
    component:Product
  }]
};
export default list;