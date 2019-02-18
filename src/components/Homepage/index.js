import React, { Component } from "react";
import Navbar from "../Navbar";
import Jumbotron from "../Jumbotron";
import Wrapper from "../Wrapper";
import FriendCard from "../FriendCard";
import friends from "../../friends.json"
import Footer from "../Footer";

class Homepage extends Component {

    state = {
        message: "Click an Image to begin!",
        score: 0,
        topScore: 0,
        friends,
        clickedId: []
    };

    shuffle = (array) => {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    };

    clickCard = (event) => {
        console.log(event.target.id);

        if (this.state.clickedId.includes(event.target.id)) {
            this.setState({
                score: 0,
                message: "WRONG!!! Start Over.",
                friends: this.shuffle(friends),
                clickedId: []
            })
        }
        else {
            this.state.clickedId.push(event.target.id);
            
            this.setState({
                score: this.state.score + 1,
                message: "Good Job!",
                friends: this.shuffle(friends)
            });
            
            if (this.state.score === 11) {
                this.setState({
                    message: "Great Job! You Win!",
                    score: 0,
                    clickedId: [],
                    friends: this.shuffle(friends),
                    topScore: this.state.score + 1
                })
            }
            else if (this.state.topScore <= this.state.score) {
                this.setState({
                    topScore: this.state.score + 1
                })
            }
        }
    };



    render() {
        return (
            <div>
                <Navbar
                    message={this.state.message}
                    score={this.state.score}
                    topScore={this.state.topScore}
                />
                <Jumbotron />
                <Wrapper>
                    {friends.map((friend) => (
                        <FriendCard
                            id={friend.id}
                            key={friend.id}
                            image={friend.image}
                            clickCard={this.clickCard}
                        />
                    ))}
                </Wrapper>
                <Footer />
            </div>
        );
    }
}

export default Homepage;

