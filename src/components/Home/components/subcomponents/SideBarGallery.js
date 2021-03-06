import React, {Component} from 'react';
import { Col, Image, Modal} from 'react-bootstrap';

class SideBarGallery extends Component {
    constructor(props) {
        super(props);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false
        };
    }

    handleClose() {
        this.setState({show: false});
    }

    handleShow() {
        this.setState({show: true});
    }


    render() {
        return (
                <Col xs={6} sm={6}>
                    <Image src={this.props.photo} responsive className={"gallery-photo"}
                           onClick={this.handleShow}/>
                    <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Body>
                            <Image src={this.props.photo} rounded responsive/>
                        </Modal.Body>
                    </Modal>
                </Col>
        );
    }
}

export default SideBarGallery;