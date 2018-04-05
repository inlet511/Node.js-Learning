const expect = require('expect');
const utils = require('./utils');

it('should add two numbers',()=>{
    var res = utils.add(33,11);

    // if(res!==44){
    //     throw new Error(`Expected 44, but got${res}`);
    // }

    expect(res).toBeA("number").toBe(44);    
});

// it('should expect some values',()=>{
//     expect({name:"Ken"}).toEqual({name:"Ken"});
// });


it('should async add two numbers',(done)=>{
    utils.asyncAdd(4,3,(sum)=>{
        expect(sum).toBe(7).toBeA('number');
        done();
    });
});
