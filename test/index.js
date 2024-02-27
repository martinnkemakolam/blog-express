const {expect} = require('expect')
const superagent = require('superagent')
const {port, boot, shutdown} =  require('../index')
describe('Server', () => { 
    before(()=>{
        // load server
        boot()
    })
    describe('homepage', () => {
        it('should respond to GET request', () => {
            superagent.get(`http://localhost:${port}`).end((err, res)=>{
                expect(res.status).toEqual(200)
            })
        })
    })
    after(()=>{
        // close server
        shutdown()
    })
})