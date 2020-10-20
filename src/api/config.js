import axios from "axios";

axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? "/api" : "http://www.chst.vip"

axios.defaults.withCredentials = true; //允许请求携带认证

//创建请求拦截器,可以给每个请求都携带带上想要传递的内容

axios.interceptors.request.use(config => {
    //登入&注册是不需要携带token
    if (config.url == "/users/login") {
        return config
    } else {
        let token = localStorage.getItem('wf-token')
            //config值的是每个请求对象
        config.headers['authorization'] = token;
        //放行
        return config
    }
})
axios.create({
    timerout: 4000
})
export default axios