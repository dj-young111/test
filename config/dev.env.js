'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  NETWORK: '"testnet"',
  // BASE_API: '"http://35.220.177.107:8089/"'
  BASE_API: '"http://192.168.3.190:8089/"'

  // BASE_API: '"http://huobichain-dev-02.sinnet.huobiidc.com:8092"'
})
