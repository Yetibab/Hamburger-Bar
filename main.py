class StringQuartetBot:
    def __init__(self):
        self.instruments = {
            'violin1': 'First Violin',
            'violin2': 'Second Violin',
            'viola': 'Viola',
            'cello': 'Cello'
        }
        
        self.responses = {
            'hello': 'Welcome to the String Quartet Bot! How can I help you today?',
            'members': 'Our quartet consists of two violins, a viola, and a cello.',
            'repertoire': 'We perform classical string quartets by composers like Mozart, Beethoven, and Haydn.',
            'booking': 'To book our quartet, please provide your event date and location.',
            'help': 'You can ask about: members, repertoire, booking, or schedule.'
        }

    def respond(self, user_input):
        user_input = user_input.lower().strip()
        
        if 'hello' in user_input or 'hi' in user_input:
            return self.responses['hello']
        elif 'member' in user_input or 'who' in user_input:
            return self.responses['members']
        elif 'play' in user_input or 'repertoire' in user_input:
            return self.responses['repertoire']
        elif 'book' in user_input:
            return self.responses['booking']
        elif 'help' in user_input:
            return self.responses['help']
        else:
            return "I'm not sure about that. Type 'help' for available commands."

