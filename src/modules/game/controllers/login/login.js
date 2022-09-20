/*
 * @Author: liziwei01
 * @Date: 2022-09-19 21:33:50
 * @LastEditors: liziwei01
 * @LastEditTime: 2022-09-19 23:27:23
 * @Description: file content
 */
import * as url from "url" 

function Login(request, response) {
	var pathname = url.parse(request.url).pathname;
	console.log("Request for " + pathname + " received.");
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello World");
	response.end();
}

export { Login }