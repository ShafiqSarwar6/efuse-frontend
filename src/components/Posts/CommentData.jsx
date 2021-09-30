import { Component } from "react";

class CommentData extends Component{
    render(){
        console.log("data is", this.props);
        const comments = [];
        if(this.props.comments){
            comments = this.props
        }
        return (
            <div className="show-posts">
                         
              {comments.map((comment) => (
                <h6>test</h6>
              ))} 
          </div>
        );
    }
}

export default CommentData;
