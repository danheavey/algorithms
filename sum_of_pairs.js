function pairHash(array = [], sum = 0) {
    console.log('O(n)');
    console.time('pairHash');
    let values = [];
    const hash = [];
    array.map(function(j) {
        hash.push({key:j, checked:false });
    });
    for (let i = 0; i < array.length; i++) {
        const remain = sum - array[i];
        const remainerIndex = array.indexOf(remain);
        if(remainerIndex > -1 && !hash[remainerIndex].checked && remainerIndex !=i) {
            values.push([array[i], array[remainerIndex]]);
            hash[i].checked = true;
        }
    }
    console.timeEnd('pairHash');
    return values;
}


function pairMap(array = [], sum = 0) {
    let values = [];
    let hash = new Map();
    console.time('pairMap');

    for (let i = 0; i < array.length; i++) {
        const remain = sum - array[i];
	    const current = array[i];
        const remainerIndex = array.indexOf(remain);
        if(remainerIndex > -1 && !hash.get(remainerIndex) && remainerIndex !=i) {
            values.push([current, array[remainerIndex]]);
            hash.set(i, true);
        }
    }
    console.timeEnd('pairMap');

    return values;
}


function pairN(array = [], sum = 0) {
    console.log('O(N2)');
    console.time('pairN');
    let values = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if(array[i] + array[j] == sum) {
                values.push([array[i] , array[j]]);
            }
        }
    }
    console.timeEnd('pairN');
    return values;
  }




function pair(array = [], sum = 0) {
    console.log('O(n)');
    console.time('pair');
    let values = [];
    for (let i = 0; i < array.length; i++) {
        const remain = sum - array[i];
        const current = array[i];
        const remainerIndex = array.indexOf(remain);
        if(remainerIndex > -1 && remainerIndex > i) {
            values.push([current, array[remainerIndex]]);
        }
    }
    console.timeEnd('pair');
    return values;
  }


function pairWhile(array = [], sum = 0) {
    console.log('O(n)');
    console.time('pairWhile');
    let values = [];
    while(array.length) {
        let current = array.shift();
        let remain = sum - current;
        const remainerIndex = array.indexOf(remain);
        if(remainerIndex > -1) {
            values.push([current, remain]);
        }
    }
    console.timeEnd('pairWhile');
    return values;
}

const pairs = [8,7,2,5,3,1];
const sum = 10;
console.log(pairN(pairs.slice(),sum));
console.log(pair(pairs.slice(),sum));
console.log(pairHash(pairs.slice(),sum));
console.log(pairMap(pairs.slice(),sum));
console.log(pairWhile(pairs.slice(),sum));

// Example Output
const result =  [[8,2], [7,3]];

