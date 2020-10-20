import axios from "./config"
//登入
export const login = (usename, password) => axios({
        url: "/users/login",
        methods: 'post',
        data: {
            username,
            password
        }
    })
    //获取登入日志
export const getLoginLog = () => axios.get("/getloginlog")