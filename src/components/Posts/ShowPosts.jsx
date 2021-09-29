import { Component } from 'react';
import '../../App.css';
import ActionButtons from './ActionButtons'


class ShowPost extends Component {
  render(){

  const posts = this.props.posts
  return (
      <div className="show-posts">
                   
        {posts.map((name, index) => (
        <div key={index} className="col-md-12 d-flex justify-content-center text-start">

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
                    <p>{name}</p>
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
