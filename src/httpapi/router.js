/*
 * @Author: liziwei01
 * @Date: 2022-09-16 16:29:19
 * @LastEditors: liziwei01
 * @LastEditTime: 2022-09-20 06:04:15
 * @Description: file content
 */
import * as sessionMiddleware from "../middleware/session/session.js"
import * as userRouters from "../modules/user/routers/router.js"
import * as gameRouters from "../modules/game/routers/router.js"

function InitRouters(router) {
	// session middleware
	router.use(sessionMiddleware.SessionMiddlewareFunc())

	// register for every module
	userRouters.Init(router)
	gameRouters.Init(router)

	// default
	router.get("/", (req, res) => {
		res.writeHead(200, {"Content-Type": "text/html"})
		res.write("<br/><br/><center><h1>Welcome to fiar</h1></center>");
		res.end()
	})
}

export { InitRouters }