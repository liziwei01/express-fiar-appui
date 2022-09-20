/*
 * @Author: liziwei01
 * @Date: 2022-09-16 16:29:19
 * @LastEditors: liziwei01
 * @LastEditTime: 2022-09-20 01:07:45
 * @Description: file content
 */
import * as userRouters from "../modules/user/routers/router.js"

function InitRouters(router) {
	// 自定义拦截器.
	// filter.RegisterFilter(router)

	
	// 为每一个module注册路由.
	userRouters.Init(router)

	// 兜底路由.
	router.get("/", (req, res) => {
		res.writeHead(200, {"Content-Type": "text/html"})
		res.write("<br/><br/><center><h1>Welcome to fiar</h1></center>");
		res.end()
	})
}

export { InitRouters }