import { Component } from "react";
import Comment from './Comment'

class CommentData extends Component{
    render(){
        console.log("data is", this.props);
        return(
            <div className="main">
               <p>{this.props.comment}</p>
            </div>
        )
    }
}

export default CommentData;