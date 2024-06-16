import pyautogui
import math
import time
import random
pyautogui.PAUSE = 0.00001
# Get the screen width (a) and height (b)
a, b = pyautogui.size()

# Center coordinates
centerX = a // 2
centerY = b // 2

total_steps = 100  
total_circles = 10000
def generate_circular_path(centerX, centerY, total_steps):
    path = []
    for i in range(total_steps):

        angle = (i / total_steps) * 2 * math.pi
        x = int(centerX + (random.randint(50,200)) * math.cos(angle))
        y = int(centerY + (random.randint(50,200)) * math.sin(angle))
        path.append((x, y))

    return path

# Delay before starting the movements
time.sleep(2)

# Perform circular movements
for _ in range(total_circles):
    circular_path = generate_circular_path(centerX, centerY, total_steps)
    for i in range(len(circular_path)):
        x, y = circular_path[i]
        # Move to the next point with no pause
        pyautogui.moveTo(x, y, duration=0)

print("Circular mouse movements completed.")
