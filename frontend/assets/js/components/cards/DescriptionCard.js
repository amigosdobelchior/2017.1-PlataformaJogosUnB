import React from "react";
import {Card, Popup} from "semantic-ui-react";
import {Link} from "react-router-dom";

export default class DescriptionCard extends React.Component {

    render () {

        return (
            <Card fluid>
                <Card.Content header="Descrição" description={this.props.description} />
                <Card fluid>
                    <Card.Content header="Prêmios" description={this.props.awards.map((award) =>
                        <div>Nome do prêmio: { award.name } - Ano: { award.year } - Colocação: { award.place }</div>
                    )} />
                </Card>
            </Card>
        );
    }
}

