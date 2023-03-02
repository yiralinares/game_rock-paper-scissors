# Game: Rock, Paper, Scissors
The rock, paper, scissors game in javascript. Beginner friendly.

### 1920 x 1080
![Wireframe - 3](https://user-images.githubusercontent.com/103174369/222278047-a5d97c04-0709-4d56-a41f-85cbd3322778.png)


## Challenge

The users should be able to:

- View the optimal layout for the game depending on their device's screen size
- Play Rock, Paper, Scissors against the computer.

## **Typography**

Lato: 400, 700, 900.

## **Colors**

Black

Body background: radial-gradient(50% 50% at 50% 50%, #A8FF1B 0%, #F2F5F8 100%)

## Section (options)

I have three (3) buttons with the following options:

- Rock
- Paper
- Scissors

## Section (players)

In this section computer and user’s choices are shown after clicking one of the button mentioned above:

- Computer Choice
- User Choice

## **Footer**

### *The result*

- You won!
- You lost!
- It’s a draw!

### *My signature*

- Coded by Yira Linares: links to GitHub code.
- My logo

## Algorithm

1. User Input will be taken. 
2. The computer will choose a random choice between "Rock", "Paper" and "Scissor". Logic - = We will generate a random number between 0 - 2; if the number is 0 --> Computer will choose Rock = 1 --> Computer will choose Paper = 2 --> Computer will choose Scissor
3. User Input will be compared with computers choice.
4. According to rules, one of them will win.
5. Rules: 
    1. if (computerChoice === userChoice) {
        result = "It's a draw!"
    }
    2. if (computerChoice === 'rock' && userChoice === 'paper') {
        result = 'You won!'
    }
    3. if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = 'You won!'
    }
    4. if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = 'You won!'
    }
    5. if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = 'You lost!' 
    }
    6. if (computerChoice === 'paper' && userChoice === 'rock') {
        result = 'You lost!' 
    }
    7. if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = 'You lost!' 
    }

### 1440 x 1024
![Wireframe - 2](https://user-images.githubusercontent.com/103174369/222278043-bf1ba257-63d3-46ff-837d-4ff4dd986116.png)

### Tablet
![Wireframe - 4](https://user-images.githubusercontent.com/103174369/222278053-e8c70c78-7611-4529-a301-1ff81a7a10d2.png)

### Mobile
![Wireframe - 5](https://user-images.githubusercontent.com/103174369/222278056-7e612654-990a-41b8-85a4-f60bead4b2cf.png)
