class SlothMachine {
    counter = 0;
    play() {
        this.counter += 1;
        var rand_number1 = Math.random();
        var rand_number2 = Math.random();
        var rand_number3 = Math.random();
        var random_boolean_value = rand_number1 < 0.5 && rand_number2 < 0.5 && rand_number3 < 0.5;
        console.log(random_boolean_value);

        if (random_boolean_value) {
            console.log("Congratulations!!!. You won " + this.counter + "coins!!")
            this.counter = 0;
        } else {
            console.log("Good luck next time!!")
        }
    }
}


const machine1 = new SlothMachine();
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 3 coins!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 2 coins!!"