/*
 * @Author: liziwei01
 * @Date: 2022-09-14 01:46:50
 * @LastEditors: liziwei01
 * @LastEditTime: 2022-09-14 01:48:58
 * @Description: file content
 */

const appConfPath = "./conf/app.toml"

function Abs(str) {
	var filename = location.pathname.match(/[^\/]+$/)
	return filename
}

function Base(str) {
	var filename = location.pathname.match(/[^\/]+$/)[0]
	return filename
}

console.log(Abs(appConfPath))
