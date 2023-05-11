import MiniUserList from '@/features/user/components/MiniUserList/MiniUserList';

function UserPlaceholder() {
  return (
    <li className="user-placeholder flex">
      <div className="profile-image-placeholder " />
      <div className="info-placeholder full">
        <div className="flex  justify-space-between w100 h100 align-end">
          <div className="first-section  flex column justify-center h100 gap-small">
            <div className="full-name-placeholder" />
            <div className="flex gap-small align-center">
              <MiniUserList users={[]} isLoading={true} />
              <div className="other-friends-placeholder" />
            </div>
          </div>
          <div className="button-placeholder" />
        </div>
      </div>
    </li>
  );
}
export default UserPlaceholder;
