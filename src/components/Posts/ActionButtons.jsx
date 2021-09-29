import { Component } from "react";
import Comment from './Comment'

class ActionButtons extends Component{

constructor(props) {
    super(props);
    this.state = {
        likes:0,
        show:true,
        comments: false
    };
    }

IncrementItem = () => {
    this.setState({ likes: this.state.likes + 1 });
    }

ToggleLike = () => {
    this.setState({ show: !this.state.show });
}

ToggleComment = () => {

    this.setState({comments: !this.state.comments})
}
    render(){
        return(
            <div className="main">
                <div className="counters">
                    <p className="px-3 mb-1 text-secondary"> <span className="text-secondary-light">{ this.state.show ? '0' : '1' }  Likes </span>. 0 Comments </p>
                </div>
                <div className="card-footer text-secondary">
                        {/* <span className="me-2 like-btn" ><i class="bi bi-heart-fill"></i> Like</span> */}
                        <button type="button" onClick={this.ToggleLike} class="btn btn-light btn-info text-secondary"> <span class="btn-label"><i class="bi bi-heart-fill me-1"></i></span>Like</button>
                        <button type="button" onClick={this.ToggleComment} class="btn btn-light btn-info text-secondary"> <span class="btn-label"><i class="bi bi-pencil-square me-1"></i></span>Comment</button>

                        { this.state.comments ? <Comment /> : '' }

                    </div>
            </div>
        )
    }
}

export default ActionButtons;