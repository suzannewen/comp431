import { expect } from 'chai'
import { go, sleep, findId, findCSS, By } from './selenium'
import common from './common'

describe('Test Dummy Server Example Page', () => {

    const preamble = 'you are logged in as'

    before('should log in', (done) => {
        go().then(common.login).then(done)
    })

    it('should log in as the test user', (done) => {
        sleep(500)
        .then(findId('message').getText()
            .then(text => {
                expect(text.indexOf(preamble)).to.equal(0)
            })
            .then(done))
    })

    it("Update the headline and verify the change", (done) => {
        const old = findId('message').getText()
        findId('message').sendKeys("new message")
        findId('message').getText()
            .then(text => { expect( text.to.equal("new message") ) } )
        findId('message').sendKeys(old)
        findId('message').getText()
            .then(text => { expect( text.to.equal(old) ) } )
        done()
    })

    after('should log out', (done) => {
        common.logout().then(done)
    })
})
