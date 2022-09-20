/*
 * @Author: liziwei01
 * @Date: 2022-09-19 23:51:51
 * @LastEditors: liziwei01
 * @LastEditTime: 2022-09-20 06:07:13
 * @Description: file content
 */
import express from "express"
import bodyParser from "body-parser"
// import * as redis from "../library/redis/redis.js"

function InitMust() {
	// TODO
	// initLoggers()
	// initRedis()
}

// TODO
// function initRedis() {
	// redis.Init()
// }

// InitRouter
function InitRouter() {
	var handler = express()

	// set basic middlewares
	handler.use(bodyParser.urlencoded({extended:true}))
	handler.use(bodyParser.json())

	return handler
}

export { InitMust, InitRouter }