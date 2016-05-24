// resources/assets/js/games/index.js

var Game = {

    all: function() {

        return [
            {
                "name": "Final Fantasy IX",
                "platform": "Playstation"
            },
            {
                "name": "Final Fantasy X",
                "platform": "Playstation II"
            },
            {
                "name": "Command And Conquer",
                "platform": "Playstation"
            },
            {
                "name": "Metal Gear Solid",
                "platform": "Playstation"
            },
            {
                "name": "The Talos Principle",
                "platform": "Steam"
            },
            {
                "name": "The King of Fighter 97",
                "platform": "Playstation"
            }
        ]
    },

    byName: function(name) {

        return this.all().filter(function(game){
            return game.name == name;
        })

    }

};