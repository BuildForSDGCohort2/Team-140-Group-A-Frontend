import React, {Component} from "react";
import axios from "axios";

class GetList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
    }
    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
            console.log(response.data)
            this.setState({posts: response.data})
        }).catch(error => {
            console.log(error)
            this.setState({errorMsg: "Error retreiving data"})
        })
    }
    render() {
      const {posts, errorMsg} = this.state
    return (
      <React.Fragment>
        <h4 className="text-center my-5">List of Posts</h4>
        <ul>
          {posts.length
            ? posts.map((post) => <li key={post.id}>{post.title}</li>)
            : null}
            </ul>
            
            {errorMsg ? <div>{errorMsg}</div>:null}
      </React.Fragment>
    );
  }
}

export default GetList;
