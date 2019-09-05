
// 引入element-ui
import {Message} from "element-ui"

export default ( {$axios} )=>{
    $axios.onError(res=>{
        // res回调函数里面有一个属性是response
        console.log(res.response)
        // 解构 message statusCode
        const {message,statusCode}=res.response.data
        if(statusCode===400){
            Message.error(message)
        }
    })
}