
import { expect } from 'chai'
console.log(typeof(expect))
import authMiddleware from './middleware/isAuth'

it('should throw an error if no authorization header is present',function(){
    const req = {
        get: function(headerName){
            return null
        }
    }
    expect(authMiddleware.bind(this,req,{},()=>{}).to.throw('not authenticated'))
})

it('should add numbers correctly',function(){
    const num1 = 3
    const num2 = 2
    expect(num1 + num2).to.equal(5)
})

it('should be an array',function(){
    const array = [1,2,3,4]
    expect(array).to.be.an('array')
    expect(array).to.include(2)
})

it('should be correct 1',function(){
    const teddy = {
        name:"teddy",
        about:function(){ return `${this.name} is ${this.character}`},
        character:"compassionate"
    }

    const emma = {
        name:"emma",
        character:"a people pleaser"
    }

    const emmaCharacter = teddy.about.bind(emma)
    expect(emmaCharacter()).to.equal('emma is a people pleaser')
})

it('should be correct 2',function(){
    const multiply = (a,b)=>{
        return a * b
    }

    const double = multiply.bind(null,2)
    expect(double(5)).to.equal(10)
})

it('should be correct 3',function(){
    const Object = {
        id:1738,
        about:function(){
            return this.id
        }
    }

    const newObject = Object.about.bind(Object)
    expect(newObject()).to.equal(1738)
})

it('it should be an object',function(){
    const clock = {
        date: new Date(),
        data: function(){
            return this.date
        }
    }
    expect(setTimeout(clock.data.bind(clock),2000)).to.be.an('object')
})