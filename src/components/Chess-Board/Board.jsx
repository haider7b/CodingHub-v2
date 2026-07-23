
import { useState ,useEffect,useRef} from "react"
import { ChessPiece,fulledPosition} from  "../../constants/index"
import { gsap } from "gsap/gsap-core";
function Board() {
    const latter=['a','b','c','d','e','f','g','h'];
    const numbers=[8,7,6,5,4,3,2,1];
    const [whitePL, setWhitePL] = useState(ChessPiece[1]);
    const [blackPL, setBlackPL] = useState(ChessPiece[0]);
    const [possibleMoves, setPossibleMoves] = useState([]);
    const [fulledPositions,setFulledPositions]=useState([...fulledPosition]);
    const [selectedPiece, setSelectedPiece] = useState(null);
    const fulledPositionsRef=useRef([]);
    
    const knightOffsets = [
        {x: 100, y: 200},
        {x: -100, y: 200},
        {x: 100, y: -200},
        {x: -100, y: -200},

        {x: 200, y: 100},
        {x: 200, y: -100},
        {x: -200, y: 100},
        {x: -200, y: -100},
    ];

    const kingOffsets=[
        {x:100,y:100},
        {x:100,y:-100},
        {x:-100,y:100},
        {x:-100,y:-100},
        {x:100,y:0},
        {x:-100,y:0},
        {x:0,y:100},
        {x:0,y:-100},
    ]



    useEffect(() => {
        if(possibleMoves.length===0){
            return;
        }
        possibleMoves.forEach((element,ind) => {
            gsap.to(`#possibleMoves${ind}`,{
                left:element.x,
                top:element.y,
                duration:0
            })
        })
        
    },[possibleMoves])

    useEffect(() => {
        fulledPositionsRef.current=fulledPositions;
    },[fulledPositions])


    useEffect(() => {
        blackPL.pieces.forEach(element => {
            gsap.to(`#${element.id}`,{
                left:element.position.x,
                top:element.position.y,
                duration:0
            })
        });

    },[blackPL,])

    useEffect(() => {
        
        
        whitePL.pieces.forEach(element => {
            gsap.to(`#${element.id}`,{
                left:element.position.x,
                top:element.position.y,
                duration:0
            })
        });
    },[whitePL])


    function findAllPossibleMoves(player,piece){
        if(piece.type==="pawn"){
            
            setPossibleMoves([...pawnMoves(player,piece)]);
        }
        
        else if(piece.type==="rook"){
            console.log("rook")
            let newPossibleMoves = [
                ...slideMove(0, -1, player, piece), // up
                ...slideMove(0, 1, player, piece),  // down
                ...slideMove(-1, 0, player, piece), // left
                ...slideMove(1, 0, player, piece)   // right
            ];

            //console.log(newPossibleMoves)
            setPossibleMoves([...newPossibleMoves]);
        }
        else if(piece.type==="bishop"){
            console.log("bishop")
            let newPossibleMoves = [

                ...slideMove(-1, -1, player, piece), // top left
                ...slideMove(1, -1, player, piece),  // top right

                ...slideMove(-1, 1, player, piece),  // bottom left
                ...slideMove(1, 1, player, piece)    // bottom right
            ];
            setPossibleMoves([...newPossibleMoves]);
        }else if(piece.type==="queen"){
            console.log("queen")
            let newPossibleMoves = [

                // bishop moves
                ...slideMove(-1, -1, player, piece), // top left
                ...slideMove(1, -1, player, piece),  // top right

                ...slideMove(-1, 1, player, piece),  // bottom left
                ...slideMove(1, 1, player, piece),   // bottom right

                // rook moves
                ...slideMove(0, -1, player, piece), // up
                ...slideMove(0, 1, player, piece),  // down

                ...slideMove(-1, 0, player, piece), // left
                ...slideMove(1, 0, player, piece)   // right
            ];
            setPossibleMoves([...newPossibleMoves]);
        }else if(piece.type==="knight"){
            console.log("knight")
            setPossibleMoves([...knightMoves(player, piece)]);
        }else if (piece.type==='king'){
            console.log("king");
            setPossibleMoves([...kingPossibleMoves(player, piece)]);
        }
    }

    function pawnMoves(player,piece){
        if(piece.position.y===0||piece.position.y===700){
                setPossibleMoves([]);
                return [];
            }
            let possibleMoves=[]
            const num=player==="white"?-1:1;
            let newMove=piece.positionName[0]+(Number(piece.positionName[1])+num);
            let RNeighbor=String.fromCharCode(piece.positionName[0].charCodeAt(0)+1)+(Number(piece.positionName[1])+num);
            let LNeighbor=String.fromCharCode(piece.positionName[0].charCodeAt(0)-1)+(Number(piece.positionName[1])+num);

            let isNewMoveFulled=true
            fulledPositionsRef.current.forEach(element => {              
                if(
                    (element.positionName===RNeighbor||
                    element.positionName===LNeighbor)&&
                    element.id[0]===(player==='white'?'B':'W')
                ){  
                    possibleMoves.push(element.position);
                }
                if(element.positionName===newMove){
                    isNewMoveFulled=false;
                }
                
            })
            isNewMoveFulled?possibleMoves.push({x:piece.position.x,y:piece.position.y+(-100*num)}):null
        return possibleMoves
    }


    function kingAttackMoves(player, piece){
        let possibleMoves=[]
        
        kingOffsets.forEach(offset => {
            
            const newPosition={
                x:piece.position.x+offset.x,
                y:piece.position.y+offset.y
            }

            if (
                newPosition.x < 0 ||
                newPosition.x > 700 ||
                newPosition.y < 0 ||
                newPosition.y > 700
            ) {
                return;
            }

            const pieceOnSquare = fulledPositionsRef.current.find(element =>
                element.position.x === newPosition.x &&
                element.position.y === newPosition.y
            );

            // empty square
            if (!pieceOnSquare) {
                possibleMoves.push(newPosition);
                return;
            }

            const isEnemyPiece =pieceOnSquare.id[0] === (player === "white" ? "B" : "W");

            if (isEnemyPiece) {
                possibleMoves.push(newPosition);
            }
        })
        
        return possibleMoves;

    }

    function kingPossibleMoves(player, piece) {
        
        let possibleMoves=[...kingAttackMoves(player, piece)];
        const enemyPlayer =
            player === "white"
                ? "black"
                : "white";

        const attackedSquares = getAllAttackedSquares(enemyPlayer);

        let finalPossibleMoves = possibleMoves.filter(move => {

            return !attackedSquares.some(square =>
                    square.x === move.x &&
                    square.y === move.y
                );
        });

        console.log("possible", possibleMoves);
        console.log("attacked", attackedSquares);
        console.log("final", finalPossibleMoves);
        return finalPossibleMoves
    }


    function getAllAttackedSquares(enemyPlayer) {

        let attackedSquares = [];

        const enemyPieces =
            enemyPlayer === "white"
                ? whitePL.pieces
                : blackPL.pieces;

        enemyPieces.forEach(piece => {

            let moves = [];

            switch (piece.type) {

                case "pawn":
                    moves = pawnMoves(enemyPlayer, piece);
                    break;

                case "rook":
                    moves = [
                        ...slideMove(0, -1, enemyPlayer, piece),
                        ...slideMove(0, 1, enemyPlayer, piece),
                        ...slideMove(-1, 0, enemyPlayer, piece),
                        ...slideMove(1, 0, enemyPlayer, piece)
                    ];
                    break;

                case "bishop":
                    moves = [
                        ...slideMove(-1, -1, enemyPlayer, piece),
                        ...slideMove(1, -1, enemyPlayer, piece),
                        ...slideMove(-1, 1, enemyPlayer, piece),
                        ...slideMove(1, 1, enemyPlayer, piece)
                    ];
                    break;

                case "queen":
                    moves = [
                        ...slideMove(-1, -1, enemyPlayer, piece),
                        ...slideMove(1, -1, enemyPlayer, piece),
                        ...slideMove(-1, 1, enemyPlayer, piece),
                        ...slideMove(1, 1, enemyPlayer, piece),
                        ...slideMove(0, -1, enemyPlayer, piece),
                        ...slideMove(0, 1, enemyPlayer, piece),
                        ...slideMove(-1, 0, enemyPlayer, piece),
                        ...slideMove(1, 0, enemyPlayer, piece)
                    ];
                    break;

                case "knight":
                    moves = knightMoves(enemyPlayer, piece);
                    break;

                case "king":
                    moves = kingAttackMoves(enemyPlayer,piece);
                    break;
            }

            attackedSquares.push(...moves);
        });

        // remove duplicates
        return attackedSquares.filter(
            (square, index, self) =>
                index === self.findIndex(
                    pos =>
                        pos.x === square.x &&
                        pos.y === square.y
                )
        );
    }


    function knightMoves(player, piece) {

        let possibleMoves = [];

        knightOffsets.forEach(offset => {

            const newPosition = {
                x: piece.position.x + offset.x,
                y: piece.position.y + offset.y
            };

            // outside board
            if (
                newPosition.x < 0 ||
                newPosition.x > 700 ||
                newPosition.y < 0 ||
                newPosition.y > 700
            ) {
                return;
            }

            const pieceOnSquare = fulledPositionsRef.current.find(element =>
                element.position.x === newPosition.x &&
                element.position.y === newPosition.y
            );

            // empty square
            if (!pieceOnSquare) {
                possibleMoves.push(newPosition);
                return;
            }

            const isEnemyPiece =pieceOnSquare.id[0] === (player === "white" ? "B" : "W");

            if (isEnemyPiece) {
                possibleMoves.push(newPosition);
            }
        });

        return possibleMoves;
    }
    
    function slideMove(dx, dy, player, piece) {

        let possibleMoves = [];

        let nextPosition = {
            x: piece.position.x + (dx * 100),
            y: piece.position.y + (dy * 100)
        };

        while (
            nextPosition.x >= 0 &&
            nextPosition.x <= 700 &&
            nextPosition.y >= 0 &&
            nextPosition.y <= 700
        ) {

            // search for piece on current square
            const pieceOnSquare = fulledPositionsRef.current.find(element =>
                element.position.x === nextPosition.x &&
                element.position.y === nextPosition.y
            );

        // empty square
            if (!pieceOnSquare) {

                possibleMoves.push({
                    x: nextPosition.x,
                    y: nextPosition.y
                });

            } else {


                const isEnemyPiece =
                    pieceOnSquare.id[0] === (player === "white" ? "B" : "W");

                // enemy can be attacked
                if (isEnemyPiece) {

                    possibleMoves.push({
                        x: nextPosition.x,
                        y: nextPosition.y
                    });
                }

                // stop movement after any piece
                break;
            }

            // continue movement
            nextPosition = {
                x: nextPosition.x + (dx * 100),
                y: nextPosition.y + (dy * 100)
            };
        }

        return possibleMoves;
    }




    function movePiece(position) {

    // animate piece movement
    gsap.to(`#${selectedPiece.id}`, {
        left: position.x,
        top: position.y,
        duration: 1
    });

    const isWhitePiece = selectedPiece.id[0] === "W";

    // current player pieces
    const currentPieces = isWhitePiece
        ? [...whitePL.pieces]
        : [...blackPL.pieces];

    // enemy player pieces
    const enemyPieces = isWhitePiece
        ? [...blackPL.pieces]
        : [...whitePL.pieces];

    // update moved piece
    const updatedCurrentPieces = currentPieces.map(piece => {

        if (piece.id === selectedPiece.id) {
            return {
                ...piece,
                position,
                positionName: convertPositionToPositionName(position)
            };
        }

        return piece;
    });

    // check if there is a piece to capture
    const attackedPiece = enemyPieces.find(piece =>
        piece.position.x === position.x &&
        piece.position.y === position.y
    );

    // remove captured piece from enemy pieces
    const updatedEnemyPieces = attackedPiece
        ? enemyPieces.filter(piece => piece.id !== attackedPiece.id)
        : enemyPieces;

    // rebuild filled positions
    const newFulledPositions = fulledPositionsRef.current.filter(pos => {

        // remove old position of moved piece
        if (pos.id === selectedPiece.id) {
            return false;
        }

        // remove captured piece position
        if (attackedPiece && pos.id === attackedPiece.id) {
            return false;
        }

        return true;
    });

    // add new position of moved piece
    newFulledPositions.push({
        id: selectedPiece.id,
        positionName: convertPositionToPositionName(position),
        position
    });

    // update states
    if (isWhitePiece) {

        setWhitePL(prev => ({
            ...prev,
            pieces: updatedCurrentPieces
        }));

        setBlackPL(prev => ({
            ...prev,
            pieces: updatedEnemyPieces
        }));

    } else {

        setBlackPL(prev => ({
            ...prev,
            pieces: updatedCurrentPieces
        }));

        setWhitePL(prev => ({
            ...prev,
            pieces: updatedEnemyPieces
        }));
    }

    // update board positions
    setFulledPositions(newFulledPositions);

    if(selectedPiece.type==="pawn"){
        updatePawn()
    }

    // clear selection
    setSelectedPiece(null);
    setPossibleMoves([]);

    // update turn
    //setTurn(prev => (prev === "white" ? "black" : "white"));
    
    

    }

    // function convertPositionNameToPosition(positionName){
    //     return {x:latter.indexOf(positionName[0])*100,y:800-positionName[1]*100};
    // }

    function convertPositionToPositionName(position){    
        return `${latter[position.x/100]}${numbers[position.y/100]}`;
    }

    function updatePawn(){
        
        return;
    }

    function boxes() {
        const boxRow=[]
        for(var i=0;i<8;i++){
            var row=[]
            for(var j=0;j<8;j++){
                row.push(
                        <div 
                        key={`${i}-${j}-box`}
                        className={`box w-[100px] h-[100px]
                        ${(i+j) % 2 === 0 ? 'bg-white' : 'bg-black'} `}>
                        </div>
                )
            }
            boxRow.push(row)
        }
        return boxRow
    }


    return (
        <div className="">
            <div className="board w-full h-full grid grid-cols-8 grid-rows-8 relative my-24">
                
                {boxes()}                

                {/* chess pieces */}
                {/* change the div to img later  */}

                {blackPL.pieces.map((piece)=>(
                    <div 
                    key={piece.id}
                    id={piece.id}
                    className="absolute w-[100px] h-[100px] text-black 
                    flex justify-center items-center text-[15px] font-bold"
                    src={piece.type}
                    alt={piece.type}
                    
                    >
                        <span className="cursor-grab p-2 bg-fuchsia-300"
                        onClick={()=>{
                            setPossibleMoves([]);
                            findAllPossibleMoves('black',piece);
                            setSelectedPiece(piece);
                            //^ for test
                            // console.log(convertPositionToPositionName(piece.position));
                            // console.log(convertPositionNameToPosition(piece.positionName));
                            // console.log(piece.position);
                            
                        }}
                        >
                            {piece.type}
                        </span>
                        {
                            piece.position.y===0&&piece.type==="pawn"&&
                            <div className="absolute top-0 left-0 bg-red-400 flex flex-col gap-1 ">
                            <button className="cursor-pointer hover:bg-fuchsia-300 px-2">
                                Queen
                            </button>
                            <button className="cursor-pointer hover:bg-fuchsia-300 px-2">
                                Rook
                            </button>
                            <button className="cursor-pointer hover:bg-fuchsia-300 px-2">
                                Bishop
                            </button>
                            <button className="cursor-pointer hover:bg-fuchsia-300 px-2">
                                Knight
                            </button>
                        </div> 
                            //||piece.position.y===700
                        }
                        
                    </div>
                ))}


                {whitePL.pieces.map((piece)=>(
                    <div 
                    key={piece.id}
                    id={piece.id}
                    className="absolute w-[100px] h-[100px] text-white
                    flex justify-center items-center text-[15px] font-bold"
                    src={piece.type}
                    alt={piece.type}
                    
                    >
                        <span className="cursor-grab p-2 bg-fuchsia-300"
                        onClick={()=>{
                            setPossibleMoves([]);
                            findAllPossibleMoves('white',piece);
                            setSelectedPiece(piece);
                        }}
                        >
                            {piece.type}
                        </span>
                    </div>
                ))}


                 {/*  possibleMoves dots */}
                {possibleMoves.map((position,ind)=>(
                    <div
                    key={`possibleMoves${ind}`}
                    id={`possibleMoves${ind}`}
                    className="absolute w-[100px] h-[100px] flex justify-center items-center"
                    >
                        <span className="rounded-full bg-amber-800 w-[30px] h-[30px] cursor-pointer"
                        onClick={()=>{
                            movePiece(position);
                        }}
                        >
                        </span>
                    </div>
                ))}


                {/*  latter */}

                <div className="w-full  flex  absolute text-blue-500 top-[95%] left-0"> 
                    {latter.map((lat)=>(
                        <span
                        key={`${lat}-lat`}
                        className="text-end p-2.5 text-xl font-black w-[100px] h-full "
                        >
                            {lat}
                        </span>
                    ))}
                </div>

                <div className="h-[800px] w-[40px]  flex-col   absolute text-blue-500 top-0 left-0"> 
                    {numbers.map((num)=>(
                        <span
                        key={`${num}-num`}
                        className=" p-2.5 text-xl font-black block h-[100px] w-full "
                        >
                            {num}
                        </span>
                    ))}
                </div>

            </div>
            
        </div>
    )
}

export default Board