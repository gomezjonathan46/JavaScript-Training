function dirReduc(arr) {
  let dirNums = arr.join(',').replace(/NORTH/g, 1).replace(/SOUTH/g, -1).replace(/EAST/g, 2).replace(/WEST/g, -2).split(','), cDirs = Array();
  for(var i = 0; i < arr.length; i++){
    if(Number(dirNums[i]) + Number(dirNums[i+1]) != 0 && Number(dirNums[i]) + Number(dirNums[i-1]) != 0){
      if(Number(cDirs[cDirs.length - 1]) + Number(dirNums[i]) != 0){
        cDirs.push(dirNums[i]);
      }
      else cDirs.pop();
    }
  }
  if(cDirs.length) cDirs = cDirs.join(',').replace(/-1/g, 'SOUTH').replace(/1/g, 'NORTH').replace(/-2/g, 'WEST').replace(/2/g, 'EAST').split(',')
  return cDirs;
}

let arr = [];
let directions = ['NORTH','SOUTH','EAST','WEST'];
let min=0;
let max=3;
let minArrLength = 7;
let maxArrLength = 13;
let randomDir = Math.floor(Math.random() * (+max - +min)) + +min;
let randomArrLength = Math.floor(Math.random() * (+maxArrLength - +minArrLength) + +minArrLength);

function generateArr() {
  for (let i = 0; i <= randomArrLength; i++) {
    arr[i].push(directions[randomDir]);
  }
  return arr;
}
