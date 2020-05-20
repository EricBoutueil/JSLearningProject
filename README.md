# JS Learning Project

## Intent

- This repo is intended to learn JS using the .js files code lines or blocks individually
- It is not structured not intended to be used as an app by itself


## How to use

### Repo index
- Repo index sections are created in the index.html
- Chapters bulletpoints are identified in .js files by:

        /***
        * CHAPTER TITLE
        ***/

- They are added to the index using:

        addChapter("fileId", "CHAPTER TITLE");

### The variable `val`
- The variable `val` is used throughout the file to avoid multiplicating `console.log()`
- The console with always log the last `val` reassignement only
- To log the value of `val` in the middle of a file, comment following script files in respective .html + insert in code in .js:

        const BreakVal = val
        console.log("Break val: ", BreakVal);
        throw new Error("Code break to console.log() on previous line(s)");

- It can also be used before `console.clear()`