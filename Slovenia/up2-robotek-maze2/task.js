function initTask(subTask) {
   var cellSide = 60;

   subTask.gridInfos = {
      hideSaveOrLoad: true,
      cellSide: cellSide,
      actionDelay: 200,
      itemTypes: {
         green_robot: { img: "green_robot.png", category: "robot", side: 80, nbStates: 9, offsetX: -14 },
         obstacle: { num: 2, img: "obstacle.png", side: cellSide, isObstacle: true },
         green: { num: 3, img: "green.png", side: cellSide, color: "vert" }, 
		 hole: { num: 7, img: "hole.png", side: cellSide, category: "hole", isObstacle: false, isHole: true, zOrder: 0 },
         marble: { num: 8, img: "marble.png", side: cellSide, category: "marble", isObstacle: false, isTransportable: true, zOrder: 1 },
      },
      maxInstructions: 25,
      includeBlocks: {
         groupByCategory: false,
         generatedBlocks: {     
			robot: ["east", "west", "north", "south"/*, "pickTransportable", "dropTransportable", "onTransportable", "onHole"*/]
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: [],
            singleBlocks: ["controls_repeat"]
         }
      },
      ignoreInvalidMoves: false,
      groupByCategory: false,
      includedAll: false,
      includedCategories: [ ],
      includedBlocks: [],
      checkEndEveryTurn: true,
      checkEndCondition: robotEndConditions.checkReachGreenArea //robotEndConditions.checkMarblesInHoles 
   };

   subTask.data = {
      easy: [
         {
            tiles: [
                   [2, 2, 2, 2, 2, 2, 2, 2],
                   [2, 2, 2, 2, 2, 2, 2, 2],
                   [2, 1, 1, 1, 1, 1, 3, 2],
                   [2, 2, 2, 2, 2, 2, 2, 2],
                   [2, 2, 2, 2, 2, 2, 2, 2]
               ],
            initItems: [
                  { row: 2, col: 1, dir: 0, type: "green_robot" }
               ]
         }
      ],
	  medium: [
         {
            tiles: [
                   [2, 2, 2, 2, 2, 2, 2, 2],
                   [2, 3, 1, 1, 1, 1, 1, 2],
                   [2, 2, 2, 2, 2, 2, 1, 2],
                   [2, 1, 1, 1, 1, 1, 1, 2],
                   [2, 2, 2, 2, 2, 2, 2, 2]
               ],
            initItems: [
                  { row: 3, col: 1, dir: 0, type: "green_robot" }
               ]
         }
      ],
	  hard: [
         {
            tiles: [
				   [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                   [2, 2, 2, 2, 1, 1, 1, 2, 2, 2, 2],
                   [2, 2, 2, 1, 1, 2, 1, 1, 2, 2, 2],
                   [2, 2, 1, 1, 2, 2, 2, 1, 1, 2, 2],
                   [2, 1, 1, 2, 2, 2, 2, 2, 1, 3, 2],
                   [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
               ],
            initItems: [
                  { row: 4, col: 1, dir: 0, type: "green_robot" }
               ]
         }
      ]
   };

   initBlocklySubTask(subTask);
}

initWrapper(initTask, ["easy", "medium", "hard"], null, true);
   