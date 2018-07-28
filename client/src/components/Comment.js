import React, { Component } from "react";

class Comment extends Component {
  render() {
    return (
      <article className="media">
        <figure className="media-left">
          <p className="image is-48x48">
            <img
              src={`https://api.adorable.io/avatars/96/${this.props.comment.name.toString(
                "base64"
              )}.png`}
              alt={`${this.props.comment.name}'s avatar`}
            />
          </p>
        </figure>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{this.props.comment.name}</strong>
              <br />
              {this.props.comment.comment}
            </p>
          </div>
        </div>
      </article>
    );
  }
}

export default Comment;
