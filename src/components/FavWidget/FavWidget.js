import { Link } from 'react-router-dom';
import { useFavContext } from '../../Context/FavContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import "./FavWidget.css"

const FavWidget = () => {

    const { totalQuantity } = useFavContext();

    return (
        <div>
            {totalQuantity ? (
                <Link to="/misfavoritos">
                    <FontAwesomeIcon icon={faStar} className="IconFavorite" />
                </Link>
            ) : (
                <></>
            )}
        </div>
    )
};

export default FavWidget;