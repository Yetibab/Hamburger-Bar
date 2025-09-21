def main():
    bot = StringQuartetBot()
    print("String Quartet Bot: Type 'quit' to exit")
    
    while True:
        user_input = input("You: ")
        if user_input.lower() == 'quit':
            print("String Quartet Bot: Goodbye!")
            break
        response = bot.respond(user_input)
        print("String Quartet Bot:", response)

if __name__ == "__main__":
    class StringQuartetBot {
        constructor() {
            this.instruments = {
                'violin1': 'First Violin',
                'violin2': 'Second Violin',
                'viola': 'Viola',
                'cello': 'Cello'
            };
            
            this.responses = {
                'hello': 'Welcome to the String Quartet Bot! How can I help you today?',
                'members': 'Our quartet consists of two violins, a viola, and a cello.',
                'repertoire': 'We perform classical string quartets by composers like Mozart, Beethoven, and Haydn.',
                'booking': 'To book our quartet, please provide your event date and location.',
                'help': 'You can ask about: members, repertoire, booking, or schedule.'
            };
        }

        respond(userInput) {
            userInput = userInput.toLowerCase().trim();
            
            if (userInput.includes('hello') || userInput.includes('hi')) {
                return this.responses['hello'];
            } else if (userInput.includes('member') || userInput.includes('who')) {
                return this.responses['members'];
            } else if (userInput.includes('play') || userInput.includes('repertoire')) {
                return this.responses['repertoire'];
            } else if (userInput.includes('book')) {
                return this.responses['booking'];
            } else if (userInput.includes('help')) {
                return this.responses['help'];
            } else {
                return "I'm not sure about that. Type 'help' for available commands.";
            }
        }
    }

    function main() {
        const bot = new StringQuartetBot();
        console.log("String Quartet Bot: Type 'quit' to exit");
        
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        const askQuestion = () => {
            readline.question("You: ", userInput => {
                if (userInput.toLowerCase() === 'quit') {
                    console.log("String Quartet Bot: Goodbye!");
                    readline.close();
                    return;
                }
                const response = bot.respond(userInput);
                console.log("String Quartet Bot:", response);
                askQuestion();
            });
        };

        askQuestion();
    }

    if (require.main === module) {
        main();
    }