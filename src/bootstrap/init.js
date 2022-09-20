/*
 * @Author: liziwei01
 * @Date: 2022-09-19 23:51:51
 * @LastEditors: liziwei01
 * @LastEditTime: 2022-09-20 09:18:55
 * @Description: file content
 */
import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
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
	handler.use(cors())

	return handler
}

export { InitMust, InitRouter }