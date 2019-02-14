import React, { Component } from "react";
import Navbar from "../Navbar";
import Jumbotron from "../Jumbotron";
import Wrapper from "../Wrapper";
import FriendCard from "../FriendCard";
import friends from "../../friends.json"
import Footer from "../Footer";

class Homepage extends Component {

    state = {
        count: 0
    };

    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 });
    }

    render() {
        return (
            <div>
                <Navbar
                    count={this.state.count}
                />
                <Jumbotron />
                <Wrapper>
                    {
                        friends.map((friend) => {
                            return (
                                <FriendCard
                                    image={friend.image}
                                    handleIncrement={this.handleIncrement}
                                />
                            )
                        })
                    }
                </Wrapper>
                <Footer />
            </div>
        );
    }
}

export default Homepage;