import MiniUserList from '@/features/user/components/MiniUserList/MiniUserList';

function UserProfileHeaderPlaceholder() {
  return (
    <div className="user-profile-header-placeholder">
      <div className="main-container placeholder">
        <div className="cover-photo-container-placeholder">
          <div className="image-placeholder" />
          <div className="button-placeholder" />
        </div>
        <div className="flex align-end image-and-info-wrapper-placeholder">
          <div className="profile-image-container-placeholder">
            <div className="image-placeholder">
              <div className="inner-image-placeholder" />
            </div>
          </div>
          <div className="wrapper w100 flex align-end justify-space-between">
            <div className="info-placeholder">
              <div className="first-section flex column gap-small">
                <div className="full-name-placeholder" />
                <div className="friends-placeholder" />
                <MiniUserList users={[]} isLoading={true} />
              </div>
            </div>
            <div className="button-placeholder second" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default UserProfileHeaderPlaceholder;
