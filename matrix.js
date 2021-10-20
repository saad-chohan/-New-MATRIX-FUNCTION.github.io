




// Matrix A
var mA00 = document.getElementById('a-0-0');
var mA01 = document.getElementById('a-0-1');
var mA02 = document.getElementById('a-0-2');
var mA10 = document.getElementById('a-1-0');
var mA11 = document.getElementById('a-1-1');
var mA12 = document.getElementById('a-1-2');
var mA20 = document.getElementById('a-2-0');
var mA21 = document.getElementById('a-2-1');
var mA22 = document.getElementById('a-2-2');

//  Matrix B
var mB00 = document.getElementById('b-0-0');
var mB01 = document.getElementById('b-0-1');
var mB02 = document.getElementById('b-0-2');
var mB10 = document.getElementById('b-1-0');
var mB11 = document.getElementById('b-1-1');
var mB12 = document.getElementById('b-1-2');
var mB20 = document.getElementById('b-2-0');
var mB21 = document.getElementById('b-2-1');
var mB22 = document.getElementById('b-2-2');

// Matrix C
var mC00 = document.getElementById('c-0-0');
var mC01 = document.getElementById('c-0-1');
var mC02 = document.getElementById('c-0-2');
var mC10 = document.getElementById('c-1-0');
var mC11 = document.getElementById('c-1-1');
var mC12 = document.getElementById('c-1-2');
var mC20 = document.getElementById('c-2-0');
var mC21 = document.getElementById('c-2-1');
var mC22 = document.getElementById('c-2-2');

//  add Matrix
     function plus () {
    var matrixA = [
        [Number(mA00 .value), Number(mA01 .value), Number(mA02.value)],
        [Number(mA10.value), Number(mA11.value), Number(mA12.value)],
        [Number(mA20.value), Number(mA21.value), Number(mA22.value)]
    ];

    var matrixB = [
        [Number(mB00 .value), Number(mB01 .value), Number(mB02.value)],
        [Number(mB10.value), Number(mB11.value), Number(mB12.value)],
        [Number(mB20.value), Number(mB21.value), Number(mB22.value)]
    ];

    var matrixC = [
        [Number(mC00 .value), Number(mC01 .value), Number(mC02.value)],
        [Number(mC10.value), Number(mC11.value), Number(mC12.value)],
        [Number(mC20.value), Number(mC21.value), Number(mC22.value)]
    ];

     

    for (var i = 0; i < 3; i++) {
        
        for (j = 0; j < 3; j++) {
            
            matrixC[i][j] = matrixA[i][j] + matrixB[i][j];

        }
    }

    document.getElementById('c-0-0').value = matrixC[0][0];
    document.getElementById('c-0-1').value = matrixC[0][1];
    document.getElementById('c-0-2').value = matrixC[0][2];
    document.getElementById('c-1-0').value = matrixC[1][0];
    document.getElementById('c-1-1').value = matrixC[1][1];
    document.getElementById('c-1-2').value = matrixC[1][2];
    document.getElementById('c-2-0').value = matrixC[2][0];
    document.getElementById('c-2-1').value = matrixC[2][1];
    document.getElementById('c-2-2').value = matrixC[2][2];
}

//  subtract Matrix
function sub () {
    var matrixA = [
        [Number(mA00 .value), Number(mA01 .value), Number(mA02.value)],
        [Number(mA10.value), Number(mA11.value), Number(mA12.value)],
        [Number(mA20.value), Number(mA21.value), Number(mA22.value)]
    ];

    var matrixB = [
        [Number(mB00 .value), Number(mB01 .value), Number(mB02.value)],
        [Number(mB10.value), Number(mB11.value), Number(mB12.value)],
        [Number(mB20.value), Number(mB21.value), Number(mB22.value)]
    ];

    var matrixC = [
        [Number(mC00 .value), Number(mC01 .value), Number(mC02.value)],
        [Number(mC10.value), Number(mC11.value), Number(mC12.value)],
        [Number(mC20.value), Number(mC21.value), Number(mC22.value)]
    ];

     console.log('Matrix a: ', matrixA);
     console.log('Matrix b: ',matrixB);
     console.log('Matrix c: ',matrixC);

    for (let i = 0; i < 3; i++) {
        
        for (j = 0; j < 3; j++) {
            
            matrixC[i][j] = matrixA[i][j] - matrixB[i][j];

        }
    }

    document.getElementById('c-0-0').value = matrixC[0][0];
    document.getElementById('c-0-1').value = matrixC[0][1];
    document.getElementById('c-0-2').value = matrixC[0][2];
    document.getElementById('c-1-0').value = matrixC[1][0];
    document.getElementById('c-1-1').value = matrixC[1][1];
    document.getElementById('c-1-2').value = matrixC[1][2];
    document.getElementById('c-2-0').value = matrixC[2][0];
    document.getElementById('c-2-1').value = matrixC[2][1];
    document.getElementById('c-2-2').value = matrixC[2][2];
}

//  multipication Matrix
function mul () {
    var matrixA = [
        [Number(mA00 .value), Number(mA01 .value), Number(mA02.value)],
        [Number(mA10.value), Number(mA11.value), Number(mA12.value)],
        [Number(mA20.value), Number(mA21.value), Number(mA22.value)]
    ];

    var matrixB = [
        [Number(mB00 .value), Number(mB01 .value), Number(mB02.value)],
        [Number(mB10.value), Number(mB11.value), Number(mB12.value)],
        [Number(mB20.value), Number(mB21.value), Number(mB22.value)]
    ];

    var matrixC = [
        [Number(mC00 .value), Number(mC01 .value), Number(mC02.value)],
        [Number(mC10.value), Number(mC11.value), Number(mC12.value)],
        [Number(mC20.value), Number(mC21.value), Number(mC22.value)]
    ];

     
    for (let i = 0; i < 3; i++) {
        
        for (j = 0; j < 3; j++) {
            
            matrixC[i][j] = matrixA[i][j] * matrixB[i][j];

        }
    }

    document.getElementById('c-0-0').value = matrixC[0][0];
    document.getElementById('c-0-1').value = matrixC[0][1];
    document.getElementById('c-0-2').value = matrixC[0][2];
    document.getElementById('c-1-0').value = matrixC[1][0];
    document.getElementById('c-1-1').value = matrixC[1][1];
    document.getElementById('c-1-2').value = matrixC[1][2];
    document.getElementById('c-2-0').value = matrixC[2][0];
    document.getElementById('c-2-1').value = matrixC[2][1];
    document.getElementById('c-2-2').value = matrixC[2][2];
}

//  division Matrix
function div () {
    var matrixA = [
        [Number(mA00 .value), Number(mA01 .value), Number(mA02.value)],
        [Number(mA10.value), Number(mA11.value), Number(mA12.value)],
        [Number(mA20.value), Number(mA21.value), Number(mA22.value)]
    ];

    var matrixB = [
        [Number(mB00 .value), Number(mB01 .value), Number(mB02.value)],
        [Number(mB10.value), Number(mB11.value), Number(mB12.value)],
        [Number(mB20.value), Number(mB21.value), Number(mB22.value)]
    ];

    var matrixC = [
        [Number(mC00 .value), Number(mC01 .value), Number(mC02.value)],
        [Number(mC10.value), Number(mC11.value), Number(mC12.value)],
        [Number(mC20.value), Number(mC21.value), Number(mC22.value)]
    ];

     

    for (let i = 0; i < 3; i++) {
        
        for (j = 0; j < 3; j++) {
            
            matrixC[i][j] = matrixA[i][j] / matrixB[i][j];

        }
    }

    document.getElementById('c-0-0').value = matrixC[0][0];
    document.getElementById('c-0-1').value = matrixC[0][1];
    document.getElementById('c-0-2').value = matrixC[0][2];
    document.getElementById('c-1-0').value = matrixC[1][0];
    document.getElementById('c-1-1').value = matrixC[1][1];
    document.getElementById('c-1-2').value = matrixC[1][2];
    document.getElementById('c-2-0').value = matrixC[2][0];
    document.getElementById('c-2-1').value = matrixC[2][1];
    document.getElementById('c-2-2').value = matrixC[2][2];
}