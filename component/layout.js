const BaseLayout = ({ children }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ height: "100px", width: "100%" }}>test header</div>
      <div style={{ height: "calc(100% - 100px )", width: "100%" }}>
        {children}
      </div>
    </div>
  );
};

export default BaseLayout;
