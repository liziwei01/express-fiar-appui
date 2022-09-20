/*
 * @Author: liziwei01
 * @Date: 2022-09-20 05:34:43
 * @LastEditors: liziwei01
 * @LastEditTime: 2022-09-20 10:23:52
 * @Description: file content
 */
import * as gameServices from "../services/check_winner.js"

const blackChess = "Black"
const whiteChess = "White"

function CheckWinner(req, res) {
	const chessX = req.query.chessX
	const chessY = req.query.chessY
	const chessColor = req.query.chessColor
	const steps = req.query.steps
	var board = req.session.chessBoard
	var s_steps = req.session.steps

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
		req.session.steps = 1
		res.send("success")
		return
	}

	if (s_steps + 1 != steps) {
		req.session.destroy()
		res.send("game stopped due to some malicious param")
		return
	}
	var cl = getChessColor(steps)
	if (cl != chessColor) {
		req.session.destroy()
		res.send("game stopped due to some malicious param")
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
	req.session.steps = steps
	req.session.chessBoard = ret.board
	res.send("success")
}

// check if it is black turn or white turn 
function getChessColor(steps) {
	var idx = steps % 2
	
	if (idx == 0) {
		return whiteChess
	}

	return blackChess
}

export { CheckWinner }