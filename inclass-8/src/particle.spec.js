import { expect } from 'chai'
import particle from './particle'
import { update } from './particle'

describe('Particle Functionality', () => {

    it('should have default values', () => {
        const p = particle()
        expect(p).to.be.ok
        expect(p.position).to.have.lengthOf(2)
        expect(p.velocity).to.have.lengthOf(2)
        expect(p.acceleration).to.have.lengthOf(2)
        expect(p.mass).to.have.exist
        // check position, velocity, acceleration, mass
    })

    it('should update the position by the velocity', () => {
        const p = particle({ position: [1, 1], velocity: [0.5, -0.5] })
        const { position } = update(p, 1.0)
        expect(position).to.equal([1.5, 0.5])
    })

    it('should update the position by the velocity and time delta', () => {
        const p = particle({ position: [1, 1], velocity: [0.5, -0.5] })
        const { position } = update(p, 2.0) // dt is different here
        expect(position).to.equal([2.0, 0.0])
    })

    it('should update the velocity by the acceleration', () => {
        const p = particle({ acceleration: [1, 1], velocity: [0.5, -0.5] })
        const { velocity } = update(p, 2.0)
        expect(velocity).to.equal([2.5, 1.5])
    })

    it('particles should wrap around the world', () => {
        // create a particle with position outside
        // of the canvas area.  update() should
        // bring the particle back inside
        // check all four sides
        const p = particle({ acceleration: [1, 1], position: [1000, 1000], velocity: [0.5, -0.5] })
        const { position } = update(p, 2.0)
        expect(position[0]).to.be.below(800)
        expect(position[1]).to.be.below(800)
    })

})
