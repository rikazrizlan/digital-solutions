import React from 'react';
import {Link} from 'react-router-dom';
import {SolutionsContext} from '../context';
import {FaArrowLeft} from 'react-icons/fa';
import Review from '../components/Review';

class SingleService extends React.Component {
    constructor(props) {
        super(props)
        //console.log(this.props);
        this.state = {
            slug: this.props.match.params.slug, //access the slug property from the passed props, slug will be unique to each service
        };
    }
    static contextType = SolutionsContext;
    //componentDidMount() {}
    render() {
        const {getService} = this.context;
        const service = getService(this.state.slug); //we need to pass the slug property which is in the state
        
        if(!service) { //if room is undefined
            return (
                <div className="error">
                    <h3>room not found</h3>
                    <Link to="/rooms" className="btn-primary">Back To Rooms</Link>
                </div>
            ); 
        }
        const {name, review, title, description, images} = service;
        //could use this line of code if i don't want to display the main image again inside the single-room-images 
        //const [mainImage,...defaultImg] = images; //de-structuring an array, used the rest opeartor to get the rest of the images

        return(
            <div className="single">
                <Link className="btn-primary" to="/"><FaArrowLeft className="fa"/>Back Home</Link>
                <section className="single-service">
                    <div className="single-service-images">
                         <img src={images[0]} alt={name} />
                    </div>
                    <div className="single-service-info">
                        <article className="desc">
                            <h3>{name}</h3>
                            <p>{description}</p>
                            <Link className="btn-secondary" to="/contact">Conatct Us</Link>
                        </article> 
                    </div>
                </section>
                <Review image={images[1]} title={title} review={review} />
            </div>
            
        )
    }
}

export default SingleService