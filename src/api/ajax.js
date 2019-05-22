import axios from 'axios'
function ajax(url, data = {}, method = 'GET') {
  return new Promise(((resolve, reject) => {
    let promise;
    if (method == get) {
      promise = axios.get(url, {params: data})
    } else {
      promise = axios.post(url, data)
    }
    promise
      .then(response => {
        resolve(response.data)
      })
      .catch(error => {
        reject('----请求出错 :' + error.message)
      })
  }))
}
export default ajax

