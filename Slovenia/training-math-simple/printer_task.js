function initTask(subTask) {
   subTask.gridInfos = {
      hideSaveOrLoad: true,
      actionDelay: 200,
      includeBlocks: {
         groupByCategory: false,
         generatedBlocks: {
             printer: ["print", "readInteger"],
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: {easy : [], medium : [], hard : []},
            singleBlocks: {easy:["math_arithmetic"],medium:["math_arithmetic"],hard:["math_arithmetic"],},
         },
	  variables : {easy : ["Celo 1", "Celo 2", "Rezultat"], medium : ["Celo 1", "Celo 2", "Rezultat"], hard : ["Celo 1", "Celo 2", "Celo 3", "Rezultat"]}
      },
      maxInstructions: {easy:8, medium:16, hard: 16},
      checkEndEveryTurn: false,
      blocklyColourTheme: "bwinf",
      checkEndCondition: function(context, lastTurn) {
          if (!lastTurn) return;

          // throws, if something is wrong …
          context.checkOutputHelper();

          // Seems like everything is okay: Right number of lines and all lines match …
          context.success = true;
         throw(window.languageStrings.messages.outputCorrect);
      },
      computeGrade: function(context, message) {
         var rate = 0;
         if (context.success) {
            rate = 1;
            if (context.nbMoves > 100) {
               rate /= 2;
               message += languageStrings.messages.moreThan100Moves;
            }
         }
         return {
            successRate: rate,
            message: message
         };
      }
   };

   subTask.data = {
      easy: [
         {
            input: "2\n3\n",
            output: "5\n",
         },
         {
           input: "4\n17\n",
           output: "21\n",
         },
         {
           input: "55\n102\n",
           output: "157\n",
         },
      ],
      medium: [
         {
            input: "4\n2\n",
            output: "8\n",
         },
         {
           input: "14\n14\n",
           output: "196\n",
         },
         {
           input: "35\n2\n",
           output: "70\n",
         },
      ],
      hard: [
          {
            input: "12\n2\n5\n",
            output: "36\n",
          },
          {
            input: "23\n7\n9\n",
            output: "46\n",
          },
          {
            input: "28\n5\n8\n",
            output: "84\n",
          },
      ],
   };

   initBlocklySubTask(subTask);
}

initWrapper(initTask, ["easy", "medium", "hard"], null);
   
