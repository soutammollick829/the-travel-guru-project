
import sajekimg from '../../../assets/images/Sajek.png'

const Sajek = () => {
  return (
    <div className="card w-56 image-full me-10">
      <figure>
        <img
          src={sajekimg}
          alt="img"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Sajek</h2>
      </div>
    </div>
  );
};

export default Sajek;
