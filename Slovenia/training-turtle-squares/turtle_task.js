function initTask(subTask) {
   subTask.gridInfos = {
      hideSaveOrLoad: true,
      actionDelay: 200,
      includeBlocks: {
         groupByCategory: false,
         generatedBlocks: {
            easy: {turtle: ["moveamountvalue", "turnleft", "turnright"]},
            medium: {turtle: ["moveamountvalue", "turnleft",  "turnright"]},
            hard: {turtle: ["moveamountvalue", "turnleft",  "turnright"]},
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: [],
            singleBlocks: {
                easy: [],
                medium: [],
                hard: [],
            }
         }
      },
      overlayFileName: "sand.png",
      turtleStepSize: 5,
      maxInstructions: {easy: 14, medium: 18, hard: 24},
      blocklyColourTheme: "bwinf",
      checkEndEveryTurn: false,
      checkEndCondition: function(context, lastTurn) {
         if (lastTurn) {
            var userImage = context.turtle.invisibleTurtle.drawingContext.getImageData(0, 0, 300, 300);
            var solutionImage = context.turtle.invisibleSolutionTurtle.drawingContext.getImageData(0, 0, 300, 300);
            var len = Math.min(userImage.data.length, solutionImage.data.length);
            var delta = 0;
            var fill = 0;
            var empty = 0;
            // Pixels are in RGBA format.  Only check the Alpha bytes.
            for (var i = 3; i < len; i += 4) {
               // Check the Alpha byte.
               if (Math.abs(userImage.data[i] - solutionImage.data[i]) > 127) {
                  delta++;
               }
               if (solutionImage.data[i] > 127)
                  fill++;
               else
                  empty++;
            }
            
            if (delta < Math.min(fill,empty) * 0.1) {
               context.success = true;
               throw(window.languageStrings.messages.paintingCorrect);
            }
            else {
               context.success = false;
               throw(window.languageStrings.messages.paintingWrong);
            }
         }
      },
      computeGrade: function(context, message) {
         var rate = 0;
         if (context.success) {
            rate = 1;
            if (context.nbMoves > 100) {
               rate /= 2;
               message += strings.moreThan100Moves;
            }
         }
         return {
            successRate: rate,
            message: message
         };
      }
   };

   subTask.data = {
      easy: [{
          drawSolution : function(turtle) {turtle.move(1); turtle.turn(90); turtle.move(1); turtle.turn(90); turtle.move(1); turtle.turn(90); turtle.move(3); turtle.turn(270); turtle.move(2); turtle.turn(270); turtle.move(2); turtle.turn(270); turtle.move(2);},
         }],
         medium: [{
             drawSolution : function(turtle) {turtle.move(1); turtle.turn(90); turtle.move(2); turtle.turn(270); turtle.move(1); turtle.turn(270); turtle.move(1); turtle.turn(270); turtle.move(2); turtle.turn(90); turtle.move(3); turtle.turn(270); turtle.move(2); turtle.turn(270); turtle.move(2); turtle.turn(270); turtle.move(2);},
         }],
         hard: [{
             drawSolution : function(turtle) {turtle.move(1); turtle.turn(90); turtle.move(2.75); turtle.turn(270); turtle.move(1.75); turtle.turn(270); turtle.move(1.75); turtle.turn(270); turtle.move(2.75); turtle.turn(90); turtle.move(3.25); turtle.turn(270); turtle.move(2.25); turtle.turn(270); turtle.move(2.25); turtle.turn(270); turtle.move(2.25);},
         }],
   };

   initBlocklySubTask(subTask);
}

initWrapper(initTask, ["easy", "medium", "hard"], null);
   
