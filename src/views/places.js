import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import PlacesS1 from "../components/places-s1";
import PlacesS2 from "../components/places-s2";

class Places extends Component{
    render(){
        return(        
            <Container fluid className="minh-footer-adj p-0">
                <PlacesS1/>
                <PlacesS2/>
            </Container>    
        );
    }
}

export default Places;