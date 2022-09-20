/*
 * @Author: liziwei01
 * @Date: 2022-09-20 06:14:58
 * @LastEditors: liziwei01
 * @LastEditTime: 2022-09-20 06:58:00
 * @Description: file content
 */
function CheckWinner(chessX, chessY, chessColor, steps, board) {
	var ret = {
		board: board,
		winner: undefined,
		err: undefined
	}
	
	if (board[chessX][chessY] != 0) {
		ret.err = "Invalid Input"
		return ret
	}

	ret.board[chessX][chessY] = chessColor
	ret.winner = checkWinner(chessX, chessY, chessColor, ret.board)

	return ret
}

function checkWinner(chessX, chessY, chessColor, board) {
	var count = 1;

	// horizontal
    for(var column = chessX + 1; column < i + 5 && column <= 14; column++) {
        if (board[column][chessY] && board[column][chessY] == chessColor) {
            count++;
        }else{
            break;
        }
    }
    for(var column = chessX - 1; column > chessX - 5 && column >= 0; column--) {
        if(board[column][chessY] && board[column][chessY] == chessColor) {
            count++;
        }else{
            break;
        }
    }
	if (count == 5) {
		return chessColor
	} else {
		count = 1
	}

    // vertical
    for(var row = chessY + 1; row < chessY + 5 && row <= 14; row++) {
        if(board[chessX][row] && board[chessX][row] == chessColor) {
            count++;
        }else{
            break;
        }
    }
    for(var row = chessY - 1; row > chessY - 5 && row >= 0; row--) {
        if(board[chessX][row] && board[chessX][row] == chessColor) {
            count++;
        }else{
            break;
        }
    }
	if (count == 5) {
		return chessColor
	} else {
		count = 1
	}

    // left incline
    for(var column = chessX + 1, row = chessY + 1; column < chessX + 5 && row < chessY + 5 && column <= 14 && row <= 14; column++, row++){
        if(board[column][row] && board[column][row] == chessColor){
            count++;
        } else {
            break;
        }
    }
	for(var column = chessX - 1, row = chessY - 1; column > chessX - 5 && row > chessY - 5 && column >= 0 && row >= 0; column--, row--){
        if(board[column][row] && board[column][row] == chessColor){
            count++;
        } else {
            break;
        }
    }
	if (count == 5) {
		return chessColor
	} else {
		count = 1
	}

    // right incline
    for(var column = chessX + 1, row = chessY - 1; column < chessX + 5 && row > chessY - 5 && column <= 14 && row >= 0; column++, row--){
        if(board[column][row] && board[column][row] == chessColor){
            count++;
        } else {
            break;
        }
    }
	for(var column = chessX - 1, row = chessY + 1; column > chessX - 5 && row < chessY + 5 && column >= 0 && row <= 14; column--, row++){
        if(board[column][row] && board[column][row] == chessColor){
            count++;
        } else {
            break;
        }
    }
	if (count == 5) {
		return chessColor
	} else {
		count = 1
	}
	
	return undefined
}

export { CheckWinner }