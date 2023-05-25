function PostPlaceholder() {
  return (
    <li className="post-placeholder">
      <div className="header placeholder">
        <div className="profile-image-placeholder" />
        <div className="info placeholder">
          <div className="name placeholder" />
          <div className="date placeholder" />
        </div>
      </div>
      <div className="content-placeholder-container">
        <div className="content placeholder" />
        <div className="content placeholder" />
        <div className="content placeholder" />
      </div>
    </li>
  );
}

export default PostPlaceholder;
