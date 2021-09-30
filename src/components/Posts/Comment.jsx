import { Component } from "react";
import CommentData from "./CommentData";
class Comment extends Component {

  constructor(props) {
    super(props);
    this.state = {
      term: '',
      comments: []
    };
  }

  onChange = (event) => {
    this.setState({ term: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      term: '',
      comments: [...this.state.comments, this.state.term]
    });
  }

  render(){
    return (
      <div className="comments">
        <CommentData comment={this.state.comments} />        
        <div className="media pt-2 pb-3">
          <a href="index.html" className="pull-left"><img src="http://designbootstrap.com/livedemos/2015/03/05/twitter-feed/assets/img/1.png" width="40px" alt="logo" className="img-circle" /></a>
          <div className="media-body">
          <form onSubmit={this.onSubmit}>
            <div className="input-group">
              <input value={this.state.term} onChange={this.onChange} type="text" className="form-control comment"  placeholder="Add a comment" />
            </div>
          </form>
          </div>
        </div>
      </div>
    );
  }
}
  
  export default Comment;