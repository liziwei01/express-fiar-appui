/*
 * @Author: liziwei01
 * @Date: 2022-09-20 05:34:43
 * @LastEditors: liziwei01
 * @LastEditTime: 2022-09-20 08:50:13
 * @Description: file content
 */
import * as gameServices from "../services/check_winner.js"

function CheckWinner(req, res) {
	const chessX = req.query.chessX
	const chessY = req.query.chessY
	const chessColor = req.query.chessColor
	const steps = req.query.steps
	var board = req.session.chessBoard

	if (chessX == undefined || chessY == undefined || chessColor == undefined || steps == undefined ) {
		res.json(req.query)
		return
	}
	
	if (steps == 1) {
		board = []
		for(var i = 0; i <= 14; i++) {
			board[i] = [];
			for(var j = 0; j <= 14; j++) {
				board[i][j] = [0];
				
			}
		}
		board[chessX][chessY] = chessColor
		req.session.chessBoard = board
		res.send("success")
		return
	}

	var ret = gameServices.CheckWinner(chessX, chessY, chessColor, steps, board)
	if (ret.err != undefined) {
		res.send(ret.err)
		return
	}
	if (ret.winner != undefined) {
		req.session.destroy()
		res.send(ret.winner)
		return
	}
	req.session.chessBoard = ret.board
	console.log(ret.board)
	res.send("success")
}

export { CheckWinner }