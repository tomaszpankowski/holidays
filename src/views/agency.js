import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import AgencyS1 from "../components/agency-s1";
import AgencyS2 from "../components/agency-s2";
import AgencyS3 from "../components/agency-s3";

class Agency extends Component{
    render(){
        return(        
            <Container fluid className="minh-footer-adj p-0">
                <AgencyS1/>
                <AgencyS2/>
                <AgencyS3/>
            </Container>    
        );
    }
}

export default Agency;