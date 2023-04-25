import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

// Write your code here
class Comments extends Component {
  state = {
    name: '',
    comment: '',
    commentList: [],
  }

  inputName = event => {
    this.setState({name: event.target.value})
  }

  inputComment = event => {
    this.setState({comment: event.target.value})
  }

  originalState = () => {
    this.setState({name: '', comment: ''})
  }

  updateCommentList = () => {
    const {name, comment} = this.state
    this.setState(
      prevState => ({
        commentList: [
          ...prevState.commentList,
          {id: uuidv4(), name, comment, isLiked: false, date: new Date()},
        ],
      }),
      this.originalState,
    )
  }

  deleteComment = event => {
    const {commentList} = this.state
    const filteredList = commentList.filter(e => e.id !== event.target.id)
    this.setState({commentList: filteredList})
  }

  likedComment = event => {
    const {commentList} = this.state
    this.setState({
      commentList: commentList.map(e => {
        if (e.id === event.target.id) {
          if (e.isLiked === false) {
            return {...e, isLiked: true}
          }
          return {...e, isLiked: false}
        }
        return {...e}
      }),
    })
  }

  render() {
    const {name, comment, commentList} = this.state
    return (
      <div className="bg-container">
        <section className="flex-section">
          <div className="input-container">
            <h1 className="heading">Comments</h1>
            <p className="comment-paragraph">
              Say something about 4.0Technologies
            </p>
            <input
              type="text"
              value={name}
              onChange={this.inputName}
              placeholder="Your Name"
              className="input-text"
            />
            <textarea
              rows="8"
              cols="30"
              value={comment}
              onChange={this.inputComment}
              placeholder="Your Comment"
              className="input-textarea"
            />
            <button
              type="button"
              onClick={this.updateCommentList}
              className="comment-button"
            >
              Add Comment
            </button>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
            className="comment-img"
          />
        </section>
        <hr className="h-line" />
        {commentList.length === 0 ? (
          ''
        ) : (
          <p className="comment-paragraph">
            <span className="comments-number">{commentList.length}</span>
            Comments
          </p>
        )}
        <ul className="comment-container">
          {commentList.map(eachItem => (
            <CommentItem
              commentObj={eachItem}
              key={eachItem.id}
              deleteComment={this.deleteComment}
              likedComment={this.likedComment}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
