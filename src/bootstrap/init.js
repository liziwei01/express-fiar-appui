/*
 * @Author: liziwei01
 * @Date: 2022-09-19 23:51:51
 * @LastEditors: liziwei01
 * @LastEditTime: 2022-09-20 00:59:50
 * @Description: file content
 */
import express from "express"

function InitMust() {
	// TODO
	// 日志.
	// initLoggers(ctx)
}

// InitRouter 获取web路由.
function InitRouter() {
	// TODO Middleware
	var handler = express()

	return handler
}

export { InitMust, InitRouter }