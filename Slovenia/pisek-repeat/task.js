function initTask(subTask) {
   var cellSide = 60;

   subTask.gridInfos = {
      hideSaveOrLoad: true,
      cellSide: cellSide,
      actionDelay: 200,
      itemTypes: {
         pisek: { img: "pisek.png", side: 80, nbStates: 9, isObstacle: true, offsetX: -14, category: "robot", team: 0, zOrder: 2 },
         hole: { num: 2, img: "hole.png", side: cellSide, category: "hole", isObstacle: false, isHole: true, zOrder: 0 },
         seed: { num: 3, img: "seed.png", side: cellSide, category: "marble", isObstacle: false, isTransportable: true, zOrder: 1 }
      },
      maxInstructions: { easy: 6, medium: 40, hard: 12 },
      includeBlocks: {
         groupByCategory: false,
         generatedBlocks: {
            robot: ["east", "west", "north", "south", "pickTransportable", "dropTransportable"]
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: [],
            singleBlocks: ["controls_repeat"]
         }
      },
      ignoreInvalidMoves: false,
      checkEndEveryTurn: false,
      checkEndCondition: robotEndConditions.checkMarblesInHoles
   };

   subTask.data = {
      easy: [
         {
            tiles: [
                   [1, 3, 1, 1, 1, 1, 1, 2]
               ],
            initItems: [
                  { row: 0, col: 0, dir: 0, type: "pisek" }
               ]
         }
      ],
      medium: [
         {
            tiles: [
                   [1, 1, 1, 1, 3, 1, 1, 1, 2],
                   [1, 1, 1, 3, 1, 1, 1, 1, 2],
                   [1, 1, 3, 1, 1, 1, 1, 1, 2],
                   [1, 3, 1, 1, 1, 1, 1, 1, 2]
               ],
            initItems: [
                  { row: 0, col: 1, dir: 0, type: "pisek"}
               ]
         }
      ],
      hard: [
         {
            tiles: [
                   [3, 1, 1, 1, 1, 1, 1, 1, 1, 2],
                   [3, 1, 1, 1, 1, 1, 1, 1, 1, 2],
                   [3, 1, 1, 1, 1, 1, 1, 1, 1, 2],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 0, col: 2, dir: 0, type:"pisek"}
               ]
         }
      ]
   };

   initBlocklySubTask(subTask);
   displayHelper.thresholdEasy = 5000;
   displayHelper.thresholdMedium = 10000;
}

initWrapper(initTask, ["easy", "medium", "hard"], null, true);
