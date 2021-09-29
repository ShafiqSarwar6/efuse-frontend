import { Component } from 'react';
import '../../App.css';
import ShowPost from './ShowPosts';


class CreatPost extends Component {

constructor(props) {
    super(props);
    this.state = {
        term: '',
        items: []
    };
    }
onChange = (event) => {
    this.setState({ term: event.target.value });
    }

onSubmit = (event) => {
    event.preventDefault()
    this.setState({
        term: '',
        items: [...this.state.items, this.state.term]
    });
}

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
                        <textarea value={this.state.term} onChange={this.onChange} className="form-control border-0" style={{resize: "none"}} aria-label="With textarea" placeholder="What is on your mind?"></textarea>
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
        <ShowPost posts={this.state.items} />
    </div>     
  );
}
}

export default CreatPost;
