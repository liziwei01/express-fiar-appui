/*
 * @Author: liziwei01
 * @Date: 2022-09-19 21:33:40
 * @LastEditors: liziwei01
 * @LastEditTime: 2022-09-20 05:36:27
 * @Description: file content
 */
import { CheckWinner } from "../controllers/check_winner.js"

function Init(router) {
	router.post("/checkWinner", CheckWinner)
}

export { Init }