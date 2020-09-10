import React, {Component} from "react";
import axios from "axios";

class PostRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      title: "",
      body: "",
    };
  }

  changehandler = e => {
    this.setState({[e.target.name]: e.target.value});
  };
  submitHandler = e => {
    e.preventDefault();
    console.log(this.state);
      axios.post("https://jsonplaceholder.typicode.com/posts", this.state)
          .then(response => {
              console.log(response);
          })
          .catch(err => {
              console.log(err);
      })
  };
  render() {
    const {userId, title, body} = this.state;
    return (
      <React.Fragment>
        <div className="sized_container">
          <h4 className="text-center my-5">Post Request</h4>
          <form onSubmit={this.submitHandler}>
            <div className="row">
              <div className="col">
                <div className="form-group">
                  <label htmlFor="userId">UserId</label>
                  <input
                    type="text"
                    className="form-control"
                    id="userId"
                    name="userId"
                    value={userId}
                    onChange={this.changehandler}
                  />
                </div>
              </div>
              <div className="col">
                <div className="form-group">
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    value={title}
                    onChange={this.changehandler}
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="body">Body</label>
              <textarea
                className="form-control"
                id="body"
                rows="3"
                name="body"
                value={body}
                onChange={this.changehandler}
              ></textarea>
            </div>

            <div className="form-group">
              <button type="submit" className="btn bg_primary_dark _btn">Submit</button>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default PostRequest;
