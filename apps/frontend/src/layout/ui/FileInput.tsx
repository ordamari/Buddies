type PrivateProps = {
  children: React.ReactNode;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

function FileInput({ className = '', onChange, children }: PrivateProps) {
  return (
    <label className={`file-input-container ${className}`}>
      <input type="file" onChange={onChange} />
      {children}
    </label>
  );
}

export default FileInput;
