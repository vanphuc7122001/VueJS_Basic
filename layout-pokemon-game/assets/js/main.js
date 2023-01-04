const { createApp } = Vue


// bước 1 : render li 
// bước 2 : xử lý logic đóng mở
// bước 3 : xử lý giống nhau giử lại
// bước 4 : xử lý khác nhau đóng 


createApp({
    data(){
        return {
            cards : [
                {
                    "id": 1,
                    "name": "bulbasaur",
                    "images": {
                      "game": {
                        "front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
                        "back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png"
                      },
                      "png": {
                        "front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
                      },
                      "svg": {
                        "front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
                      }
                    }
                  },
                  {
                    "id": 2,
                    "name": "ivysaur",
                    "images": {
                      "game": {
                        "front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
                        "back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png"
                      },
                      "png": {
                        "front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png"
                      },
                      "svg": {
                        "front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg"
                      }
                    }
                  },
                  {
                    "id": 3,
                    "name": "venusaur",
                    "images": {
                      "game": {
                        "front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
                        "back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/3.png"
                      },
                      "png": {
                        "front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png"
                      },
                      "svg": {
                        "front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg"
                      }
                    }
                  },
                  {
                    "id": 4,
                    "name": "charmander",
                    "images": {
                      "game": {
                        "front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
                        "back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png"
                      },
                      "png": {
                        "front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
                      },
                      "svg": {
                        "front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg"
                      }
                    }
                  },
                  {
                    "id": 1,
                    "name": "bulbasaur",
                    "images": {
                      "game": {
                        "front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
                        "back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png"
                      },
                      "png": {
                        "front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
                      },
                      "svg": {
                        "front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
                      }
                    }
                  },
                  {
                    "id": 2,
                    "name": "ivysaur",
                    "images": {
                      "game": {
                        "front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
                        "back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png"
                      },
                      "png": {
                        "front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png"
                      },
                      "svg": {
                        "front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg"
                      }
                    }
                  },
                  {
                    "id": 3,
                    "name": "venusaur",
                    "images": {
                      "game": {
                        "front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
                        "back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/3.png"
                      },
                      "png": {
                        "front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png"
                      },
                      "svg": {
                        "front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg"
                      }
                    }
                  },
                  {
                    "id": 4,
                    "name": "charmander",
                    "images": {
                      "game": {
                        "front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
                        "back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png"
                      },
                      "png": {
                        "front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
                      },
                      "svg": {
                        "front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg"
                      }
                    }
                  },
                  
            ].sort( () => {
              return Math.random() - 0.5
            }),
            selectCard : [],
            pairedCard : [],
            gameResult : {
              win : false,
              lose : false,
            },
            gameData : {
              badSelectNumber : 10
            }
        }
    },
    watch : {
      "gameData.badSelectNumber" : function(badSelectNumber) {
        if(badSelectNumber <= 0)
          this.gameResult = {
            win : false,
            lose : true,
          }
      }
    },
    computed : {
      covered(){
          let covered = this.cards.filter( (card) => !this.uncovered.includes(card))
          if(covered.length === 0) {
            this.gameResult.win = true
            this.gameResult.lose = false
          }
          return covered
        },
        uncovered(){
          let uncovered = [...this.selectCard,...this.pairedCard]
          return uncovered
        }
    },
    methods : {
        handleSelectCard(card){
          this.selectCard.push(card)
          if(this.selectCard.length === 2){
            const [card1, card2] = this.selectCard
            if(card1.id === card2.id){
              this.pairedCard.push(card1)
              this.pairedCard.push(card2)
            }else{
              this.gameData.badSelectNumber--
            }
            setTimeout( ()=> {
              this.selectCard = []
            },1000)
          }
        },
        handleResetGame(){
          this.cards = this.cards.sort( () => Math.random() - 0.5)
          this.selectCard = []
          this.pairedCard = []
          this.gameResult ={
            win : false,
            lose : false,
          }
          this.gameData.badSelectNumber = 10
        }
    }
}).mount('#app')
