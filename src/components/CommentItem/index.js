import {formatDistanceToNow} from 'date-fns'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

const CommentItem = props => {
  const {commentObj, deleteComment, likedComment} = props
  const {name, comment, id, isLiked, date} = commentObj
  const initial = name.charAt(0)

  const randomNumber = Math.floor(Math.random() * 7)
  const liked = isLiked ? 'liked' : 'like'

  return (
    <li className="list-container">
      <div className="comment-header">
        <h1
          className={`commenter-profile ${initialContainerBackgroundClassNames[randomNumber]}`}
        >
          {initial}
        </h1>
        <h3 className="commenter-name">{name}</h3>
        <p className="comment-time">{formatDistanceToNow(new Date(date))}</p>
      </div>
      <p className="comment">{comment}</p>
      <div className="comment-footer">
        <div className="like-container">
          <button
            type="button"
            onClick={event => likedComment(event)}
            className="like-button"
          >
            {isLiked ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png"
                alt="like"
                id={id}
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
                alt="like"
                id={id}
              />
            )}
          </button>
          <p className={`${liked}`}>Like</p>
        </div>
        <button
          type="button"
          onClick={event => deleteComment(event)}
          className="delete"
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            id={id}
          />
        </button>
      </div>
      <hr className="h-line" />
    </li>
  )
}

export default CommentItem
