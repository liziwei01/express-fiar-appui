/*
 * @Author: liziwei01
 * @Date: 2022-09-19 23:44:59
 * @LastEditors: liziwei01
 * @LastEditTime: 2022-09-20 00:22:43
 * @Description: file content
 */
import { GetAppConfig, NewApp } from "./app.js"
import { InitMust, InitRouter } from "./init.js"

const appConfPath = "./conf/app.toml"

class AppServer {
	Config
	Handler

	// Start 启动http服务器.
	Start() {
		var app = NewApp(this.Config, this.Handler)
		app.Start()
	}
}

function Setup() {
	var appServer = new AppServer()

	appServer.Config = GetAppConfig(appConfPath)

	InitMust()
	appServer.Handler = InitRouter()

	return appServer
}

export { AppServer }
export { Setup }