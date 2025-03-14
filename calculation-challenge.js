        let nickname = prompt("Enter your nickname: ");
        let victories = parseInt(prompt("Enter the number of victories: "));
        let loses = parseInt(prompt("Enter the number of loses: "));
        
        function rankedPoints(victories, loses){
            let result = victories - loses;
            return result
            }

        let rank
        let result = rankedPoints(victories, loses)
        if (result <= 10){
            rank = "Iron"
        } else if (result > 10 && result <= 20){
            rank = "Bronze"
        } else if (result > 20 && result <= 50 ){
            rank = "Silver"
        } else if (result > 50 && result <= 80){
            rank = "Gold"
        } else if (result > 80 && result <= 90) {
            rank = "Diamond" 
        } else if (result > 90 && result <= 100){
            rank = "Legendary"
        } else if (result > 100){
            rank = "Imortal"
        }
        
        console.log("The Hero " + nickname + " has " + result + " Ranked Points and is " + rank + " Rank.")