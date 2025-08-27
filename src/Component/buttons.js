const Buttons = ({ className = " ", children }) => {
  return (
    <button className={className} >
      {children}
    </button>
  );
};

export default Buttons;
