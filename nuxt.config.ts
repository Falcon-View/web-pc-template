import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  srcDir: 'src/',
  // app
  app: {
    // baseURL: '',
    head: {
      title: 'Falcon View',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, user-scalable=0',
      meta: [
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'keywords',
        },
        {
          hid: 'description',
          name: 'description',
          content: 'description',
        },
      ],
      script: [
        // <script src="https://myawesome-lib.js"></script>
        // { src: 'https://awesome-lib.js' },
      ],
      link: [
        // <link rel="stylesheet" href="https://myawesome-lib.css">
        // { rel: 'stylesheet', href: 'https://awesome-lib.css' },
      ],
      // please note that this is an area that is likely to change
      style: [
        // <style type="text/css">:root { color: red }</style>
        // { children: ':root { color: red }', type: 'text/css' },
      ],
    },
  },

  // css
  css: ['@/assets/css/index.scss'],

  // plugins
  plugins: [
    {
      src: '@/plugins/client/amfe-flexible.ts',
      mode: 'client',
    },
    // { src: '', mode: 'server' }, // 服务端使用
  ],

  // build
  build: {
    // 引入 postcssrc.js 配置文件
    postcss: {
      postcssOptions: require('./.postcssrc.js'),
    },
  },

  // modules
  modules: [],

  // components
  // components: true, // 默认开启
})
