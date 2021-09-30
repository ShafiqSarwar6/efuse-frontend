import { Component } from 'react';
import '../../App.css';
import ShowPost from './ShowPosts';
import UsersPosts from "../../services/post.service";


class CreatPost extends Component {

  constructor(props) {
      super(props);
      this.onSubmit = this.onSubmit.bind(this);
      this.state = {
            term: '',
            user: '6155eca96b0967342a630f66',
            title: 'testing',
            content: "",
            submitted: false,
            notification: false
        };
      }
  onChange = (event) => {
    this.setState({ 
      term: event.target.value
    });
    }
  
  onSubmit = (event) => {
    event.preventDefault();
    var data = {
      term: '',
      content: this.state.term,
      user: this.state.user,
      title: this.state.title,
      notification: true
    }
    
    UsersPosts.createPost(data)
        .then(response => {
          this.setState({
            term: '',
            user: response.data.user,
            title: response.data.title,
            content: response.data.content,
            submitted: true,
            notification:true
          });
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    
  
  };

  render(){
    return (
      <div className="create-post row">
        { this.state.notification ? <div className="alert alert-primary" role="alert">Your post has been submitted</div> : '' }
          <div className="col-md-12 d-flex justify-content-center mt-5 text-start">
              <div className="card border-success mt-5" style={{width:"500px"}}>
              <form onSubmit={this.onSubmit}>
                <div className="media-list">
                  <div className="media pt-4 pb-4">
                    <a href="index.html" className="pull-left"><img src="http://designbootstrap.com/livedemos/2015/03/05/twitter-feed/assets/img/1.png" alt="logo" className="img-circle" /></a>
                    <div className="media-body">
                      <div className="input-group">
                          <textarea value={this.state.term} onChange={this.onChange} className="form-control border-0" style={{resize: "none"}} aria-label="With textarea" placeholder="What is on your mind?"></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                  <div className="card-footer bg-transparent text-secondary">
                  <div className="row justify-content-between">
                      <div className="col-4">
                      <div className="file photo-btn btn btn-dark">
                Photo/Video
                <input type="file" name="file"/>
              </div>
                      </div>
                      <div className="col-4 text-end">
                          <button className="btn btn-primary btn-primary-custom">Post it</button>
                      </div>
                      </div>
                  </div>
                  </form>
              </div>
          </div>
          <ShowPost />
      </div>     
    );
  }
 
}


export default CreatPost;
