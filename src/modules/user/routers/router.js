/*
 * @Author: liziwei01
 * @Date: 2022-09-19 21:33:40
 * @LastEditors: liziwei01
 * @LastEditTime: 2022-09-20 05:55:22
 * @Description: file content
 */
import { StartGame } from "../controllers/start.js"

function Init(router) {
	router.get("/startGame", StartGame)
}

export { Init }