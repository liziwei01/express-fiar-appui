/*
 * @Author: liziwei01
 * @Date: 2022-09-14 01:22:55
 * @LastEditors: liziwei01
 * @LastEditTime: 2022-09-20 00:00:19
 * @Description: file content
 */
import * as bootstrap from "./bootstrap/base.js"
import * as httpapi from "./httpapi/router.js"

function main() {
	var app = bootstrap.Setup()

	// 注册接口路由
	httpapi.InitRouters(app.Handler)

	app.Start()
}

main()