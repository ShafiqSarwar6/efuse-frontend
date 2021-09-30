import { Component } from 'react';
import '../../App.css';
import ShowPost from './ShowPosts';
import UsersPosts from "../../services/post.service";


class CreatPost extends Component {

  constructor(props) {
      super(props);
      this.state = {
            term: '',
            user: '6155b7fee588bea77be618b7',
            title: 'testing',
            content: "",
            submitted: false
        };
      }
  onChange = (event) => {
    this.setState({ 
      content: event.target.value
    });
    }
  
  onSubmit = (event) => {
    event.preventDefault();
    var data = {
      term: "",
      content: this.state.content,
      user: this.state.user,
      title: this.state.title
    }

    UsersPosts.createPost(data)
        .then(response => {
          this.setState({
            user: response.data.user,
            title: response.data.title,
            content: response.data.content,
            submitted: true
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
          <div className="col-md-12 d-flex justify-content-center mt-5 text-start">
              <div className="card border-success mt-5" style={{width:"500px"}}>
              <form onSubmit={this.onSubmit}>
                <div className="media-list">
                  <div className="media pt-4 pb-4">
                    <a href="index.html" className="pull-left"><img src="http://designbootstrap.com/livedemos/2015/03/05/twitter-feed/assets/img/1.png" alt="logo" className="img-circle" /></a>
                    <div className="media-body">
                      <div className="input-group">
                          <textarea value={this.state.content} onChange={this.onChange} className="form-control border-0" style={{resize: "none"}} aria-label="With textarea" placeholder="What is on your mind?"></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                  <div className="card-footer bg-transparent text-secondary">
                  <div class="row justify-content-between">
                      <div class="col-4">
                      <div class="file photo-btn btn btn-dark">
                Photo/Video
                <input type="file" name="file"/>
              </div>
                      </div>
                      <div class="col-4 text-end">
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
