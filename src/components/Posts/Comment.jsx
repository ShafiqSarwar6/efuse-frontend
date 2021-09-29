function Comment() {
    return (
      <div className="comments">
        <div className="media pt-2 pb-3">
          <a href="index.html" className="pull-left"><img src="http://designbootstrap.com/livedemos/2015/03/05/twitter-feed/assets/img/1.png" width="40px" alt="logo" className="img-circle" /></a>
          <div className="media-body">
            <div className="input-group">
              <input type="text" className="form-control comment"  placeholder="Add a comment" />
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Comment;