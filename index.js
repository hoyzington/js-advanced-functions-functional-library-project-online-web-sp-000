const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0';
    },

    each: (clxn, clbk) => {
      const array = clxn instanceof Array ? clxn.slice : Object.values(clxn);
      for (const item of array) { clbk(item) }
      return clxn;
    },

    map: (clxn, clbk) => {
      if (!(clxn instanceof Array))
        clxn = Object.values(clxn);
      const array = [];
      for (const item of clxn) { array.push(clbk(item)) }
      return array;
    },

    reduce: (clxn, clbk, acc) => {
      const array = acc ? clxn : clxn.slice(1);
      if (!acc) { acc = clxn[0] }
      for (const item of array) {
        acc = clbk(acc, item, array);
      }
      return acc;
    },

    find: (clxn, cond) => {
      for (const item of clxn) { 
        if (cond(item))
          return item;
      }
    },

    filter: (clxn, cond) => {
      let array = [];
      for (const item of clxn) { 
        if (cond(item))
          array.push(item);
      }
      return array;
    },

    size: (clxn) => {
      const array = clxn instanceof Array ? clxn : Object.keys(clxn);
      let size = 0;
      for (const item of array) { 
        if (!!item)
          size += 1;
      }
      return size;
    },

    first: (array, n=1) => {
      return (n > 1) ? array.slice(0,n) : array[0];
    },

    last: (array, n=1) => {
      return (n > 1) ? array.slice(-1 * n) : array.slice(-1)[0];
    },

    compact: (array) => {
      return array.filter(item => !!item);
    },

    sortBy: (array, clbk) => {
      let result = [...array];
      return result.sort((a, b) => clbk(a) - clbk(b));
    },

    unpack: function(receiver, arr) {
      for (let val of arr)
        receiver.push(val);
    },

    flatten: function(array, isShallow, result=[]) {
      if (!Array.isArray(array)) return result.push(array);
      if (isShallow) {
        for (const item of array) {
          if (Array.isArray(item)) {
            for (const inItem of item) {
              result.push(inItem);
            }
          } else {
            result.push(item);
          }
        }
      } else {
        for (let item of array) {
          this.flatten(item, false, result);
        }
      }
      return result;
    },

    uniq: (array, isSorted=false, clbk=false) => {
      if (isSorted) {
        const sorted = [array[0]];
        if (clbk) {
          for (let i = 1; i < array.length; i++) {
            if (clbk(sorted[-1]) !== clbk(array[i])) { 
              sorted.push(array[i]);
            }
          }
        } else {
          for (let i = 1; i < array.length; i++) {
            if (sorted !== array[i]) { 
              sorted.push(array[i]);
            }
          }
        }
        return sorted;
      } else {
        const unsorted = [array[0]];
        if (clbk) {
          for (let i = 1; i < array.length; i++) {
            for (const item of unsorted) {
              if (clbk(item) !== clbk(array[i])) { 
                unsorted.push(array[i]);
              }
            }
          }
        } else {
          for (let i = 1; i < array.length; i++) {
            if (!unsorted.includes(array[i])) { 
              unsorted.push(array[i]);
            }
          }
        }
        return unsorted;
      }
    },

    keys: (obj) => {
      
      return ;
    },

    values: (obj) => {
      
      return ;
    },

    functions: (obj) => {
      
      return ;
    },

      };
})();

fi.libraryMethod();
