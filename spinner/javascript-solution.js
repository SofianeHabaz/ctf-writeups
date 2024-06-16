const radius = 50; 
const totalSteps = 100; 
const totalCircles = 10000;
const delayBetweenSteps = 10; 

const generateCircularPath = (centerX, centerY, radius, totalSteps, roundIndex) => {
    const path = [];
    const angleOffset = Math.random() * 2 * Math.PI;

    for (let i = 0; i < totalSteps; i++) {
        const angle = ((i / totalSteps) * 2 * Math.PI) + angleOffset + (roundIndex * 0.5 * Math.PI);
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        path.push({ x, y });
    }
    return path;
};

const simulateCircularMovement = async () => {
    const centerX = window.innerWidth / 2; // Center X coordinate
    const centerY = window.innerHeight / 2; // Center Y coordinate

    for (let roundIndex = 0; roundIndex < totalCircles; roundIndex++) {
        const circularPath = generateCircularPath(centerX, centerY, radius, totalSteps, roundIndex);

        for (let stepIndex = 0; stepIndex < totalSteps; stepIndex++) {
            const { x, y } = circularPath[stepIndex];
            const event = new MouseEvent('mousemove', {
                clientX: x,
                clientY: y,
                bubbles: true
            });
            document.dispatchEvent(event);
        }
    }
};

// finally run simulateCircularMovement function on the console 