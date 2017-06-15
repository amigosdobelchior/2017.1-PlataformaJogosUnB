import React from "react";
import {Link} from "react-router-dom";
import {Dropdown} from "semantic-ui-react";
import {dataListApi} from "../resource/DataListApi";

export default class GenreItems extends React.Component{

    constructor (props) {
        super(props);
        this.state = {
            "genres":[],
            "selectedGenre":'Categoria'
        };
    }


    componentWillMount () {

        dataListApi("/api/genres/", (genres) => {

            this.setState({genres});

        });

    }

    handleClick(genreName){
        const option = genreName;
        this.setState({ selectedGenre: genreName });
        this.props.callbackParent(option);
    }

    mountGenreItems(){
        if(typeof this.state.genres === "undefined"){
            return false
        }
        const gameGenresItems = this.state.genres.map((genre) =>
                <Dropdown.Item onClick={(e) => this.handleClick(genre.name, e)}>
                    {genre.name}
                </Dropdown.Item>
        );
        return gameGenresItems

    }

    render (){
        return(
            <Dropdown text={this.state.selectedGenre}>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={(e) => this.handleClick('Todas as categorias', e)}>
                        Todas as categorias
                    </Dropdown.Item>
                    {this.mountGenreItems()}
                </Dropdown.Menu>
            </Dropdown>
        );
    }
}
