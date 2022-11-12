const Card = (props) => {
  return (
    <>
      <div className="card mb-3" style={{ maxWidth: "100%" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={props.image} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">{props.body}</p>
              <button onClick={() => props.clickremove(props.id)} className="btn btn-primary">
                Hapus Ah
              </button>
              <button onClick={() => props.clickedit(props.id)} className="btn btn-danger ms-5">
                Edit Aja
              </button>
            </div>
          </div>
        </div>
        ss
      </div>
    </>
  );
};

export default Card;
