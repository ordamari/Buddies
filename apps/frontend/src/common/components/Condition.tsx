type PrivateProps = {
  condition: boolean;
  children: React.ReactNode;
  fallback?: React.ReactNode;
};

function Condition({ condition, children, fallback = null }: PrivateProps) {
  if (condition) return <>{children}</>;
  else return <>{fallback}</>;
}
export default Condition;
