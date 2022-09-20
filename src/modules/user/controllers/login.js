/*
 * @Author: liziwei01
 * @Date: 2022-09-19 21:33:50
 * @LastEditors: liziwei01
 * @LastEditTime: 2022-09-20 01:11:40
 * @Description: file content
 */


function Login(req, res) {
	res.writeHead(200, {"Content-Type": "text/plain"});
	res.write("Hello World");
	res.end();
}

export { Login }