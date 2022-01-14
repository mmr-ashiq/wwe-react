import React, { Component } from 'react';

export class Posts extends Component {
	render() {
		return (
			<>
				<div className="card m-2" style={{ width: '18rem' }}>
					<div className="card-body">
						<h4 className="card-title">Post Title</h4>
                        <small className="text-muted">
							Posted by: <a href="https://google.com">John Doe</a> on {new Date().toLocaleDateString()}
						</small>
						<hr />
						<p className="card-text">
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit. Accusamus, doloremque, eius, eos, eveniet
							fugiat ipsam ipsum laboriosam laborum maiores maxime
							nam natus necessitatibus neque nihil nisi nostrum
							officia omnis optio pariatur quae quam quas quia
							quibusdam quod repellat repudiandae sapiente sed
							similique sint sit sunt temporibus tenetur ullam
							unde velit vero voluptate voluptatum!
						</p>
						<a
							href="https://google.com"
							className="btn btn-primary"
						>
							Read More
						</a>
                        <hr />
                        
						<div className="d-flex justify-content-between">
							<i className="fa fa-thumbs-up" />
							<i className="fa fa-thumbs-down" />
                            <input type="text" name="" id="" placeholder="Comment" />
						</div>                       
					</div>
				</div>
			</>
		);
	}
}

export default Posts;
