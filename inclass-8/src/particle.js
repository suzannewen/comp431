const random = (min=0, max=800) =>
    Math.random() * (max - min) + min

// default values
const particle = (
    mass=random(5, 30),
    position=[random(), random()],
    velocity=[random(-0.1, 0.1), random(-0.1, 0.1)],
    acceleration=[0, 0]
) => {
    return {acceleration, velocity, position, mass}
}

const update = ({acceleration, velocity, position, mass}, delta, canvas) => {
    position[0] += velocity[0]*delta + 0.5*acceleration[0]^2;
    position[1] += velocity[1]*delta + 0.5*acceleration[1]^2;
    if (position[0] > 800) {
      position[0] = 0;
    }
    if (position[1] > 800) {
      position[1] = 0;
    }

    // position.forEach( function (element, index, array) {
    //   element += velocity[index]*delta + 0.5*acceleration[index]*delta^2;
    //     if (element > 800) {
    //       element = 0;
    //     }
    // }
    
    velocity[0] += acceleration[0]*delta;
    velocity[1] += acceleration[1]*delta;
    return { mass, acceleration, velocity, position } // new object
}

export default particle // exporting particle module

export { update } // exporting object
