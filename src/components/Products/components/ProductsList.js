import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap'
import ProductsHeader from "./ProductsHeader";

import product1 from '../../../img/pomidory.png';
import product2 from '../../../img/olej.png';
import product3 from '../../../img/barbecue.png';
import product4 from '../../../img/chilii.png';
import product5 from '../../../img/jankes.png';
import product6 from '../../../img/karo.png';
import product7 from '../../../img/królewski.png';
import product8 from '../../../img/papryka.png';

import drFisherLogo from "../../../img/logo.png";
import ProductElements from "./subcomponent/ProductElements";
import BrandDescription from "./subcomponent/BrandDescription";

const ListOfProducts = [
    {
        photo: product1,
        title: "Filety śledziowe w sosie pomidorowym",
        description: "Przepyszny śledz w sosie pomidorowym, rewelacyjny posiłek dla całej rodziny.",
        dimension: "130 x 150 x 20",
        nettoWeight: "170g",
        // packingStyle: "1 karton = 13 puszek lub 1 paleta = 238 kartonów",
        // accesibility: "dostępny na magazynie"
    },
    {
        photo: product2,
        title: "Filety śledziowe w oleju",
        description: "Przepyszny śledz w oleju, rewelacyjny posiłek dla całej rodziny.",
        dimension: "130 x 150 x 20",
        nettoWeight: "170g",
        // packingStyle: "1 karton = 13 puszek lub 1 paleta = 238 kartonów",
        // accesibility: "dostępny na magazynie"
    },
    {
        photo: product3,
        title: "Filety śledziowe w sosie barbecue",
        description: "Przepyszny śledz w sosie barbecue, rewelacyjny posiłek dla całej rodziny.",
        dimension: "130 x 150 x 20",
        nettoWeight: "170g",
        // packingStyle: "1 karton = 13 puszek lub 1 paleta = 238 kartonów",
        // accesibility: "dostępny na magazynie"
    },
    {
        photo: product4,
        title: "Filety śledziowe w sosie pomidorowym-chilli",
        description: "Przepyszny śledz w sosie pomidorowym-chilli, rewelacyjny posiłek dla całej rodziny.",
        dimension: "130 x 150 x 20",
        nettoWeight: "170g",
        // packingStyle: "1 karton = 13 puszek lub 1 paleta = 238 kartonów",
        // accesibility: "dostępny na magazynie"
    },
    {
        photo: product5,
        title: "Filety śledziowe w w sosie jankes",
        description: "Przepyszny śledz w sosie jankes, rewelacyjny posiłek dla całej rodziny.",
        dimension: "130 x 150 x 20",
        nettoWeight: "170g",
        // packingStyle: "1 karton = 13 puszek lub 1 paleta = 238 kartonów",
        // accesibility: "dostępny na magazynie"
    },
    {
        photo: product6,
        title: "Filety śledziowe w oleju karo",
        description: "Przepyszny śledz w oleju karo, rewelacyjny posiłek dla całej rodziny.",
        dimension: "130 x 150 x 20",
        nettoWeight: "170g",
        // packingStyle: "1 karton = 13 puszek lub 1 paleta = 238 kartonów",
        // accesibility: "dostępny na magazynie"
    },
    {
        photo: product7,
        title: "Filety śledziowe po królewsku",
        description: "Przepyszny śledz po królewsku, rewelacyjny posiłek dla całej rodziny.",
        dimension: "130 x 150 x 20",
        nettoWeight: "170g",
        // packingStyle: "1 karton = 13 puszek lub 1 paleta = 238 kartonów",
        // accesibility: "dostępny na magazynie"
    },
    {
        photo: product8,
        title: "Filety śledziowe w sosie pomidorowo-paprykowym",
        description: "Przepyszny śledz w sosie pomidorowo-paprykowym, rewelacyjny posiłek dla całej rodziny.",
        dimension: "130 x 150 x 20",
        nettoWeight: "170g",
        // packingStyle: "1 karton = 13 puszek lub 1 paleta = 238 kartonów",
        // accesibility: "dostępny na magazynie"
    }
];

class ProductsList extends Component {


    render() {
        return (
            <Row>
                <BrandDescription/>
                <ProductsHeader/>
                <Col sm={12} xs={12} className="products-list-container">

                    {ListOfProducts.map((e, i) =>
                        <ProductElements
                            photo={e.photo}
                            title={e.title}
                            description={e.description}
                            dimension={e.dimension}
                            nettoWeight={e.nettoWeight}
                            accesibility={e.accesibility}
                            packingStyle={e.packingStyle}
                            key={i}/>
                    )}
                </Col>
            </Row>

        );
    }
}

export default ProductsList;