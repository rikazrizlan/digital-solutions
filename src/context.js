import React, { Component } from 'react';
import items from './data';
//import Client from './Contentful';

const SolutionsContext = React.createContext();

class SolutionsProvider extends Component {
    state = {
      services: [],
      ready: false
    };
    
    /*getData from contentful
    getData = async () => {
        try {
            let response = await Client.getEntries({
                content_type: "beachResortRoom",
                order: "sys.createdAt"
            });
            let rooms = this.formatData(response.items);
            let featuredRooms = rooms.filter(room => room.featured === true);
            let maxPrice = Math.max(...rooms.map(item => item.price));
            let maxSize = Math.max(...rooms.map(item => item.size));

            this.setState({
                rooms: rooms,
                featuredRooms: featuredRooms,
                sortedRooms: rooms,
                loading: false,
                maxPrice,
                price: maxPrice,
                maxSize
            })
        } catch (error) {
            console.log(error);
        }
    }
    */

    componentDidMount() {
        // to get data from contentful
        //this.getData();

        // get local data
        let services = this.formatData(items);
        console.log(services);

        this.setState({
            services: services
        })
    }
    
    formatData(items) {
        let tempItems = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);

            let service = {...item.fields,images,id} //copying the properties from the fields object using javascript spread operator
            return service;
        })
        return tempItems;
    }

    getService = (slug) =>{
        let tempServices = [...this.state.services];
        const service = tempServices.find((service) => service.slug === slug);
        return service;
    };

    render() {
        return (
            <div>
                <SolutionsContext.Provider 
                    value={{
                        ...this.state, 
                        getService:this.getService /* let getRoom be available in our context */
                    }}
                >
                    {this.props.children}
                </SolutionsContext.Provider>
            </div>
        );
    }
}

const SolutionsConsumer = SolutionsContext.Consumer;

export function withSolutionsConsumer(Component) {
    return function consumerWrapper(props){
        return <SolutionsConsumer>
            {value => <Component {...props} context={value} />}
        </SolutionsConsumer>
    }
}

export {SolutionsProvider, SolutionsConsumer, SolutionsContext}
 