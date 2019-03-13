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
            singleBlocks: {easy:["math_arithmetic"],medium:["math_arithmetic"],hard:["math_arithmetic", "controls_repeat_ext"],},
         },
	  variables : {easy : ["začetniČlen", "desetiČlen", "razlika"], medium : ["začetniČlen", "razlika", "i"], hard : ["začetniČlen", "razlika", "številoČlenov"]}
      },
      maxInstructions: {easy:16, medium:16, hard: 20},
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
            output: "29\n",
         },
         {
           input: "12\n2\n",
           output: "30\n",
         },
         {
           input: "55\n7\n",
           output: "118\n",
         },
      ],
      medium: [
         {
            input: "3\n2\n5\n",
            output: "11\n",
         },
         {
           input: "14\n1\n17\n",
           output: "30\n",
         },
         {
           input: "35\n11\n3\n",
           output: "57\n",
         },
      ],
      hard: [
          {
            input: "12\n2\n5\n",
            output: "12\n14\n16\n18\n20\n",
          },
          {
            input: "23\n7\n9\n",
            output: "23\n30\n37\n44\n51\n58\n65\n72\n79\n",
          },
          {
            input: "28\n5\n13\n",
            output: "28\n33\n38\n43\n48\n53\n58\n63\n68\n73\n78\n83\n88\n",
          },
      ],
   };

   initBlocklySubTask(subTask);
}

initWrapper(initTask, ["easy", "medium", "hard"], null);