import BarCharts from './components/BarCharts/BarCharts.vue';

const components = {
  BarCharts
};

const install = function(Vue) {
  if (install.installed) return;
  Object.keys(components).forEach((key) => {
    Vue.component(key, components[key]);
  });
};

// 支持全局引入
export default {
  install
};

// 支持按需引入
export { BarCharts };
