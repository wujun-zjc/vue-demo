// var base = require('./base64.js');
import {md5, BASE64, utf16to8} from './base64.js'

import axios from 'axios'

export default {
  install(Vue, options) {
    Vue.prototype.$_request = function (obj) {
      var timestamp = Math.round(new Date().getTime() / 1000);
      var randomNumber = Math.floor(Math.random() * 1000);
      const appSecret = '65537';
      const appId = '1';
      var token = appId + timestamp + randomNumber + JSON.stringify(obj.data) + appSecret;
      token = md5(token).toUpperCase();

      // var url = 'https://self.estar-info.com/job/server/claimDataController.do?';
      // 开发环境
      var url = '/api/job/server/';

      axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? url : 'http://platform-show.estar-info.com/server/';

      // axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
      axios.defaults.headers.post['Authorization'] = "your token";
      axios.defaults.headers.post['version'] = "2";
      axios.defaults.headers.post['randomNumber'] = randomNumber;
      axios.defaults.headers.post['timestamp'] = timestamp;
      axios.defaults.headers.post['appId'] = appId;
      axios.defaults.headers.post['token'] = token;

      axios({
          url: "claimDataController.do?" + obj.url,
          method: 'POST',
          data: BASE64.encode(utf16to8(JSON.stringify(obj.data))),
        }).then(function (res) {
          obj.success(res.data)
        })
        .catch(function (res) {
          obj.fail(res)
        })
    };
  }
}
