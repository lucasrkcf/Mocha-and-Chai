/**************************************
List of assert methods - See  http://chaijs.com/api/assert/#method_assert
                        for the full list
fail(actual, expected, msg)
equal(a, b)
notEqual
isAbove     isAtLeast
isBelow     isAtMost
typeOf
isOk        strictEqual         deepEqual
isNotOk     strictNotEqual      deepNotEqual
isTrue      isNotTrue
isFalse     isNotFalse
isNull      isNaN           isNotNull       isNotNaN
exists      notExists
isUndefined isDefined
isFunction  isObject    isArray isString    isNumber
isBoolean
instanceOf
match       notMatch        <-- regular expressions
property    notProperty
propertyVal notPropertyVal
lengthOf
hasAnyKeys  hasAllKeys      containsAllKeys <!--- in objects
throws      doesNotThrow
closeTo     approximately
oneOf       <--- look in an array
changes     doesNotChange
increases   increasesBy     increasesButNotBy
decreases   decreasesBy     decreasesButNotBy
**************************************/
// Unit Testing with Mocha and Chai
//

const assert = require('chai').assert;
const R = require('../app');


describe('Field test for killer robot', function(){
   
    let num = 6;
    let str = 'teste';
    let boo = false;

    it('check that num is numeric', function(){
        assert.isNumber(num);
    });

    it('check that str is String', function(){
        assert.isString(str);
    });

    it('check that str is Boolean', function(){
        assert.isBoolean(boo);
    });
    
});