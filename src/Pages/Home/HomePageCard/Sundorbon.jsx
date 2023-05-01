
import sundorbonImg from '../../../assets/images/Sundorbon.png'

const Sundorbon = () => {
  return (
    <div className="card w-56 bg-base-100 shadow-xl image-full me-10">
      <figure>
        <img
          src={sundorbonImg}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Sundarbans</h2>
      </div>
    </div>
  );
};

export default Sundorbon;
