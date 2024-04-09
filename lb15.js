
function printSolution(board)
{
    let sol = ""; 
    for(let i = 0; i < board.length; i++)
    {
        for(let j = 0; j < board.length; j++)
        {
            if(board[i][j] == 1)
                sol+="Q "
            else
                sol+=". "
        }
        sol+="\n"
    }
    console.log(sol)
}
 
function isSafe(board, row, col)
{
 
    // Check this row on left side
    for(let i = 0; i < col; i++){
        if(board[row][i] == 1)
            return false 
    }
 
    // Check upper diagonal on left side
    for (i = row, j = col; i >= 0 && j >= 0; i--, j--)
        if (board[i][j])
            return false
 
    // Check lower diagonal on left side
    for (i = row, j = col; j >= 0 && i < board.length; i++, j--)
        if (board[i][j])
            return false
 
    return true
}
 
function solveNQUtil(board, col){
     
    if(col >= board.length)
        return true
    for(let i=0;i<board.length;i++){

        if(isSafe(board, i, col)==true){
        
            board[i][col] = 1
        
            if(solveNQUtil(board, col + 1) == true)
                return true

            board[i][col] = 0
        }
    }

    return false
}
 

function solveNQ(size){

    let N_N_Board = Array.from({length:size},()=>Array(size).fill(0))
  
    if(solveNQUtil(N_N_Board, 0) == false){
        console.log("Solution does not exist")
        return false
    }
 
    printSolution(N_N_Board)
    return true
}

solveNQ(5)
 
 