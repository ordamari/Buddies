import MiniUserPlaceholder from './components/MiniUserPlaceholder/MiniUserPlaceholder';

function MiniUserListPlaceholder() {
  const NUMBER_OF_PLACEHOLDERS = 5;
  return (
    <ul className="mini-user-list-placeholder">
      {[...Array(NUMBER_OF_PLACEHOLDERS)].map((_, index) => (
        <MiniUserPlaceholder key={index} />
      ))}
    </ul>
  );
}
export default MiniUserListPlaceholder;
