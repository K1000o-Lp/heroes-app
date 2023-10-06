import { Link } from 'react-router-dom';

import { heroImage } from '../../helpers/heroImage';

// const heroImage = require.context('../../assets', true);

export const HeroCard = ({
    id,
    superhero,
    alter_ego,
    first_appearance,
    characters,
}) => {

  // const imagePath = `/assets/${id}.jpg`;

  return (
    <div className="col animate__animated animate__fadeIn">
        <div className="card">
            <div className="row no-gutters">
                <div className="col-5">
                    <img 
                        // src={ imagePath }
                        src={ heroImage(`./${ id }.jpg`) }
                        className="card-img-top" 
                        alt={ superhero } 
                    />
                </div>

                <div className="col-7">
                    <div className="card-body">
                        <h5 className="card-title">{ superhero }</h5>
                        
                        <p className="card-text">{ alter_ego }</p>

                        {
                            ( alter_ego !== characters ) 
                                && <p className="text-mutted">{ characters }</p>
                        }

                        <p className="card-text">
                            <small className="text-mutted">{ first_appearance }</small>
                        </p>

                        <Link to={ `/hero/${id}` }>
                            Ver más...
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
