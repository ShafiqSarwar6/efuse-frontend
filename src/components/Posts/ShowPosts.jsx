import { Component } from 'react';
import '../../App.css';
import ActionButtons from './ActionButtons'
import UsersPosts from "../../services/post.service";

class ShowPost extends Component {

  constructor(props) {
    super(props);
    this.retrievePosts = this.retrievePosts.bind(this);

    this.state = {
      posts: [],
      currentPost: null,
    };
  }

  componentDidMount() {
    this.retrievePosts();
  }

  retrievePosts() {
    UsersPosts.getPosts()
      .then(response => {
        this.setState({
          posts: response.data
        });
        // console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render(){

  const posts = this.state.posts
  // console.log("the posts data is", posts)
  return (
      <div className="show-posts">
                   
        {posts.map((post) => (
        <div className="col-md-12 d-flex justify-content-center text-start">

            <div className="card border-success mt-5" style={{width:"500px"}}>
              <div className="media-list">
                <div className="media pt-4 pb-3">
                  <a href="index.html" className="pull-left"><img src="http://designbootstrap.com/livedemos/2015/03/05/twitter-feed/assets/img/1.png" alt="logo" className="img-circle" /></a>
                  <div className="media-body">
                    <strong className="text-secondary">Patrick Shuff</strong>
                    <p className="fw-bold text-primary-custom mb-0"><i class="bi bi-geo-alt-fill me-1"></i>OH, USA</p>
                    <span className="text-secondary"><small>1 minute ago</small></span>
                  </div>
                </div>
                <div className="post-content px-3 text-secondary fst-normal">
                    <p>{post.content}</p>
                </div>
              </div>
            <ActionButtons />
            </div>
        </div>
        ))} 
    </div>
  );
}
}

export default ShowPost;
