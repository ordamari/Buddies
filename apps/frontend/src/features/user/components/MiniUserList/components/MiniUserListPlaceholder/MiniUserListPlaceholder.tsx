import MiniUserPlaceholder from './components/MiniUserPlaceholder/MiniUserPlaceholder';

function MiniUserListPlaceholder() {
  return (
    <ul className="mini-user-list-placeholder">
      {[...Array(5)].map((_, index) => (
        <MiniUserPlaceholder key={index} />
      ))}
    </ul>
  );
}
export default MiniUserListPlaceholder;
