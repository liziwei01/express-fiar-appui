/*
 * @Author: liziwei01
 * @Date: 2022-09-14 01:39:51
 * @LastEditors: liziwei01
 * @LastEditTime: 2022-09-20 00:23:08
 * @Description: file content
 */

class HTTPServer {
	constructor(Listen) {
        this.Listen = Listen
    }
}

class Config {
	constructor(APPName, HTTPServer) {
        this.APPName = APPName
        this.HTTPServer = HTTPServer
    }
}

class App {
	constructor(config) {
        this.config = config
    }
	server
	// close

	initHTTPServer(handler) {
		this.server = handler
	}

	// start the service
	Start() {
		// TODO start record logs
		// logit.Logger.Info("APP START")
		this.server.listen(this.config.HTTPServer.Listen, () => {
			console.log("[APP START] Listening and serving HTTP on %d\n", this.config.HTTPServer.Listen);
		})
	}
}

// TODO file
function GetAppConfig(filePath) {
	const ser = new HTTPServer(
		8888
	)
	const conf = new Config(
		"express-fiar-appui", 
		ser,
	)
	return conf
}

// establish an APP
function NewApp(config, handler) {
	var app = new App(config)
	app.initHTTPServer(handler)
	return app
}

export { HTTPServer, Config, App }
export { GetAppConfig, NewApp }