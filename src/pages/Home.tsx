export function Home() {
  return (
    <>
      <h1
        style={{
          position: "absolute",
          width: "1px",
          height: "1px",
          margin: "-1px",
          border: "0",
          padding: "0",
          whiteSpace: "nowrap",
          clipPath: "inset(100%)",
        }}
      >
        Home
      </h1>
      <div className="container-fluid">
        <img
          src="https://cdn.pixabay.com/photo/2018/02/12/09/00/the-market-3147758_1280.jpg"
          alt="groceries"
        />
      </div>
    </>
  );
}
