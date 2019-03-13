function initTask(subTask) {
   var cellSide = 60;

   subTask.gridInfos = {
      hideSaveOrLoad: true,
      cellSide: cellSide,
      actionDelay: 200,
      itemTypes: {
         green_robot: { img: "green_robot.png", category: "robot", side: 80, nbStates: 9, offsetX: -14 },
         obstacle: { num: 2, img: "obstacle.png", side: cellSide, isObstacle: true },
         green: { num: 3, img: "green.png", side: cellSide, color: "vert" }
      },
      maxInstructions: 20,
      includeBlocks: {
         groupByCategory: true,
         generatedBlocks: {
            robot: ["forward", "right", "left", "east", "west", "north", "south"]
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: ["loops", "variables", "math"],
            singleBlocks: []
         }
      },
      ignoreInvalidMoves: false,
      groupByCategory: false,
      includedAll: false,
      includedCategories: [ ],
      includedBlocks: [],
      checkEndEveryTurn: true,
      checkEndCondition: robotEndConditions.checkReachGreenArea
   };

   subTask.data = {
      easy: [
         {
            tiles: [
                   [2, 2, 2, 2, 2, 2, 2, 2],
                   [2, 1, 1, 1, 1, 1, 1, 2],
                   [2, 1, 2, 2, 2, 2, 1, 2],
                   [2, 1, 2, 3, 1, 2, 1, 2],
                   [2, 1, 2, 2, 1, 2, 1, 2],
                   [2, 1, 1, 1, 1, 2, 1, 2],
                   [2, 2, 2, 2, 2, 2, 1, 2],
                   [2, 1, 1, 1, 1, 1, 1, 2],
                   [2, 2, 2, 2, 2, 2, 2, 2]
               ],
            initItems: [
                  { row: 7, col: 1, dir: 0, type: "green_robot" }
               ]
         }
      ]
   };

   initBlocklySubTask(subTask);
}

initWrapper(initTask, null, null, true);
   