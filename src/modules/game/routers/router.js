/*
 * @Author: liziwei01
 * @Date: 2022-09-19 21:33:40
 * @LastEditors: liziwei01
 * @LastEditTime: 2022-09-20 01:12:42
 * @Description: file content
 */
import { LocalGame } from "../controllers/login.js"

function Init(router) {
	router.get("/local-game", LocalGame)
}

export { Init }